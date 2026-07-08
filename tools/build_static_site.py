from __future__ import annotations

import html
import re
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PORTFOLIO = ROOT / "portfolio"
CONTENT_POSTS = ROOT / "content" / "posts"
DIST = ROOT / "dist"


IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".mp4", ".mov"}


def reset_dist() -> None:
    if DIST.exists():
        shutil.rmtree(DIST)
    shutil.copytree(PORTFOLIO, DIST)


def parse_frontmatter(text: str) -> tuple[dict[str, str], str]:
    if not text.startswith("+++"):
        return {}, text
    parts = text.split("+++", 2)
    if len(parts) < 3:
        return {}, text
    raw_meta = parts[1]
    body = parts[2].lstrip()
    meta: dict[str, str] = {}
    for line in raw_meta.splitlines():
        match = re.match(r"\s*([A-Za-z0-9_-]+)\s*=\s*'?\"?([^'\"]*)'?\"?\s*$", line)
        if match:
            meta[match.group(1)] = match.group(2).strip()
    return meta, body


def inline_markup(text: str) -> str:
    escaped = html.escape(text)
    escaped = re.sub(r"`([^`]+)`", r"<code>\1</code>", escaped)
    escaped = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", escaped)
    escaped = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", escaped)
    escaped = re.sub(
        r"(https?://[^\s<]+)",
        lambda match: f'<a href="{match.group(1)}" target="_blank" rel="noopener">{match.group(1)}</a>',
        escaped,
    )
    return escaped


def button_link(line: str) -> str | None:
    match = re.match(r"\[\[button:([^\]]+)\]\(([^)]+)\)\]", line.strip(), re.IGNORECASE)
    if not match:
        return None
    label, url = match.groups()
    return f'<a class="action-button" href="{html.escape(url)}" target="_blank" rel="noopener">{html.escape(label)}</a>'


def figure_shortcode(line: str, project: str) -> str | None:
    match = re.search(r'{{<\s*figure\s+([^>]*)>}}', line)
    if not match:
        return None
    attrs = dict(re.findall(r'(\w+)="([^"]*)"', match.group(1)))
    src = attrs.get("src")
    if not src:
        return ""
    title = attrs.get("title", "")
    width = attrs.get("width", "")
    style = f' style="max-width:{html.escape(width)}"' if width else ""
    return (
        f'<figure class="detail-figure"{style}>'
        f'<img src="{html.escape(src)}" alt="{html.escape(title or src)}" loading="lazy">'
        f'{f"<figcaption>{inline_markup(title)}</figcaption>" if title else ""}'
        "</figure>"
    )


def video_shortcode(line: str) -> str | None:
    match = re.search(r'{{<\s*video\s+([^>]*)>}}', line)
    if not match:
        return None
    attrs = dict(re.findall(r'(\w+)="([^"]*)"', match.group(1)))
    src = attrs.get("src")
    if not src:
        return ""
    title = attrs.get("title", "")
    return (
        '<figure class="detail-figure">'
        f'<video src="{html.escape(src)}" controls muted playsinline preload="metadata"></video>'
        f'{f"<figcaption>{inline_markup(title)}</figcaption>" if title else ""}'
        "</figure>"
    )


def notice_shortcode(line: str) -> str | None:
    match = re.search(r'{{<\s*notice\s+([^>]*)>}}', line)
    if not match:
        return None
    attrs = dict(re.findall(r'(\w+)="([^"]*)"', match.group(1)))
    text = attrs.get("text")
    if not text:
        return ""
    return f'<p class="detail-notice">{inline_markup(text)}</p>'


def markdown_image(line: str) -> str | None:
    match = re.match(r"!\[([^\]]*)\]\(([^)]+)\)", line.strip())
    if not match:
        return None
    alt, src = match.groups()
    return (
        '<figure class="detail-figure">'
        f'<img src="{html.escape(src)}" alt="{html.escape(alt)}" loading="lazy">'
        f'{f"<figcaption>{inline_markup(alt)}</figcaption>" if alt else ""}'
        "</figure>"
    )


def markdown_to_html(markdown: str, project: str) -> str:
    blocks: list[str] = []
    paragraph: list[str] = []
    list_items: list[str] = []
    in_math = False
    in_mermaid = False
    math_lines: list[str] = []
    mermaid_lines: list[str] = []

    def flush_paragraph() -> None:
        nonlocal paragraph
        if paragraph:
            blocks.append(f"<p>{inline_markup(' '.join(paragraph))}</p>")
            paragraph = []

    def flush_list() -> None:
        nonlocal list_items
        if list_items:
            blocks.append("<ul>" + "".join(f"<li>{inline_markup(item)}</li>" for item in list_items) + "</ul>")
            list_items = []

    def flush_math() -> None:
        nonlocal math_lines
        if math_lines:
            blocks.append('<div class="math-block">\\[' + html.escape("\n".join(math_lines)) + "\\]</div>")
            math_lines = []

    def flush_mermaid() -> None:
        nonlocal mermaid_lines
        if mermaid_lines:
            blocks.append('<pre class="mermaid">' + html.escape("\n".join(mermaid_lines)) + "</pre>")
            mermaid_lines = []

    for raw_line in markdown.splitlines():
        line = raw_line.rstrip()
        stripped = line.strip()

        if stripped == "```mermaid":
            flush_paragraph()
            flush_list()
            in_mermaid = True
            mermaid_lines = []
            continue

        if in_mermaid:
            if stripped == "```":
                flush_mermaid()
                in_mermaid = False
            else:
                mermaid_lines.append(line)
            continue

        if stripped == "$$":
            flush_paragraph()
            flush_list()
            if in_math:
                flush_math()
            in_math = not in_math
            continue

        if in_math:
            math_lines.append(line)
            continue

        if not stripped:
            flush_paragraph()
            flush_list()
            continue

        button = button_link(stripped)
        if button:
            flush_paragraph()
            flush_list()
            blocks.append(button)
            continue

        video = video_shortcode(stripped)
        if video is not None:
            flush_paragraph()
            flush_list()
            blocks.append(video)
            continue

        notice = notice_shortcode(stripped)
        if notice is not None:
            flush_paragraph()
            flush_list()
            blocks.append(notice)
            continue

        fig = figure_shortcode(stripped, project)
        if fig is not None:
            flush_paragraph()
            flush_list()
            blocks.append(fig)
            continue

        image = markdown_image(stripped)
        if image:
            flush_paragraph()
            flush_list()
            blocks.append(image)
            continue

        heading = re.match(r"^(#{1,4})\s+(.+?)(?:\s+\{[^}]*\})?$", stripped)
        if heading:
            flush_paragraph()
            flush_list()
            level = min(len(heading.group(1)) + 1, 5)
            blocks.append(f"<h{level}>{inline_markup(heading.group(2).strip())}</h{level}>")
            continue

        if stripped == "---":
            flush_paragraph()
            flush_list()
            blocks.append("<hr>")
            continue

        item = re.match(r"^[-*]\s+(.+)$", stripped)
        if item:
            flush_paragraph()
            list_items.append(item.group(1))
            continue

        paragraph.append(stripped)

    flush_paragraph()
    flush_list()
    if in_math:
        flush_math()
    if in_mermaid:
        flush_mermaid()
    return "\n".join(blocks)


DETAIL_TEMPLATE = """<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{description}">
    <title>{title} | Wenbo Xu</title>
    <link rel="stylesheet" href="../../assets/css/site.css?v=20260708-diffuser-1">
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="../../index.html" aria-label="Wenbo Xu home">
        <span class="brand-mark">W</span>
        <span class="brand-text">Wenbo Xu</span>
      </a>
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="../../">Projects</a>
        <a href="../../robotics/">Robotics</a>
      </nav>
      <div class="header-actions">
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Toggle black and white mode">◐</button>
        <a class="button secondary compact-button" href="../../">All Projects</a>
      </div>
    </header>
    <main>
      <article class="detail-page">
        <a class="back-link" href="../../">← Projects</a>
        <p class="eyebrow">{date}</p>
        <h1>{title}</h1>
        <div class="detail-content">
          {body}
        </div>
      </article>
    </main>
    <footer class="site-footer">
      <span>© Wenbo Xu</span>
      <span>Static GitHub Pages portfolio</span>
    </footer>
    <script>
      window.MathJax = {{ tex: {{ inlineMath: [['\\\\(', '\\\\)']], displayMath: [['\\\\[', '\\\\]']] }} }};
    </script>
    <script type="module">
      import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
      mermaid.initialize({{ startOnLoad: true, theme: document.documentElement.dataset.theme === "light" ? "default" : "dark" }});
    </script>
    <script src="../../assets/js/site.js?v=20260708-diffuser-1"></script>
    <script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  </body>
</html>
"""


def copy_project_media(project_dir: Path, target_dir: Path) -> None:
    target_dir.mkdir(parents=True, exist_ok=True)
    for item in project_dir.iterdir():
        if item.is_file() and item.suffix.lower() in IMAGE_EXTS:
            shutil.copy2(item, target_dir / item.name)


def build_detail_pages() -> None:
    posts_target = DIST / "posts"
    posts_target.mkdir(parents=True, exist_ok=True)
    for project_dir in sorted(CONTENT_POSTS.iterdir()):
        if not project_dir.is_dir():
            continue
        index = project_dir / "index.md"
        if not index.exists():
            continue
        target_dir = posts_target / project_dir.name
        copy_project_media(project_dir, target_dir)
        raw = index.read_text(encoding="utf-8")
        meta, body = parse_frontmatter(raw)
        title = meta.get("title") or project_dir.name
        date = meta.get("date", "")
        body_html = markdown_to_html(body, project_dir.name)
        description = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", body_html)).strip()[:160]
        page = DETAIL_TEMPLATE.format(
            title=html.escape(title),
            date=html.escape(date),
            description=html.escape(description),
            body=body_html,
        )
        (target_dir / "index.html").write_text(page, encoding="utf-8", newline="\n")


def main() -> None:
    reset_dist()
    build_detail_pages()


if __name__ == "__main__":
    main()

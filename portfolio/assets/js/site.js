(function () {
  const root = document.documentElement;
  const storageKey = "wjx-portfolio-lang";
  const basePrefix = location.pathname.includes("/robotics/") ? "../" : "";
  const projects = window.PORTFOLIO_PROJECTS || [];

  const dictionary = {
    en: {
      page_title: "Personal Projects",
      page_tagline: "Autonomous Systems · Mechatronics · Mechanical Design · Full-Stack Engineering",
      contact_label: "Contact:",
      footer_note: "Static GitHub Pages portfolio.",
      details_label: "Details"
    },
    zh: {
      page_title: "个人作品集",
      page_tagline: "自主系统 · 机电一体化 · 机械设计 · 全栈工程",
      contact_label: "联系:",
      footer_note: "静态 GitHub Pages 作品集。",
      details_label: "项目详情"
    }
  };

  function text(projectField, lang) {
    if (!projectField) return "";
    return projectField[lang] || projectField.en || "";
  }

  function isExternal(url) {
    return /^(https?:|mailto:|#)/.test(url);
  }

  function withBase(url) {
    return isExternal(url) ? url : `${basePrefix}${url}`;
  }

  function mediaItems(project) {
    const items = Array.isArray(project.media) ? project.media : [project.media];
    return items.filter(Boolean);
  }

  function mediaElement(project, src, index, lang) {
    const alt = `${text(project.mediaAlt, lang)}${index ? ` ${index + 1}` : ""}`;
    const caption = index === 0 ? text(project.title, lang) : `${text(project.title, lang)} · ${index + 1}`;
    const path = withBase(src);
    const isVideo = /\.(mp4|mov|webm)$/i.test(src);
    const media = isVideo
      ? `<video src="${path}" muted playsinline controls preload="metadata"></video>`
      : `<img src="${path}" alt="${alt}" loading="lazy">`;

    return `
      <figure class="media-slide">
        ${media}
        <figcaption>${caption}</figcaption>
      </figure>
    `;
  }

  function tags(project) {
    return project.tags.map((tag) => `<span>${tag}</span>`).join("");
  }

  function links(project, lang) {
    if (!project.links.length) return "";
    return `
      <div class="project-links">
        ${project.links.map((link) => {
          const external = isExternal(link.url);
          const attrs = external ? ' target="_blank" rel="noopener"' : "";
          const label = link.label === "Details" ? dictionary[lang].details_label : link.label;
          return `<a href="${withBase(link.url)}"${attrs}>${label}</a>`;
        }).join("")}
      </div>
    `;
  }

  function projectSection(project, lang) {
    const body = text(project.body, lang);
    const bodyHtml = Array.isArray(body) ? body.map((paragraph) => `<p>${paragraph}</p>`).join("") : "";
    const media = mediaItems(project);
    const slideHtml = media.map((src, index) => mediaElement(project, src, index, lang)).join("");

    return `
      <article class="showcase-project" id="${project.id}">
        <h2>${text(project.title, lang)}</h2>
        <div class="showcase-carousel" data-carousel>
          <button class="carousel-button carousel-button--prev" type="button" aria-label="Previous images" data-carousel-dir="-1">‹</button>
          <div class="media-scroller" tabindex="0">
            ${slideHtml}
          </div>
          <button class="carousel-button carousel-button--next" type="button" aria-label="Next images" data-carousel-dir="1">›</button>
        </div>
        <div class="project-summary">
          <div class="project-meta">
            <span>${project.year}</span>
            <div class="project-tags">${tags(project)}</div>
          </div>
          <p class="project-subtitle">${text(project.subtitle, lang)}</p>
          <div class="project-body">${bodyHtml}</div>
          ${links(project, lang)}
        </div>
      </article>
    `;
  }

  function renderProjects(lang) {
    const list = document.querySelector("[data-project-list]");
    const nav = document.querySelector("[data-project-nav]");

    if (list) {
      list.innerHTML = projects.map((project) => projectSection(project, lang)).join("");
    }

    if (nav) {
      nav.innerHTML = projects.map((project) => `<a href="#${project.id}">${text(project.title, lang)}</a>`).join("");
    }
  }

  function setLanguage(lang) {
    const nextLang = dictionary[lang] ? lang : "en";
    root.lang = nextLang;
    localStorage.setItem(storageKey, nextLang);

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dictionary[nextLang][key]) node.textContent = dictionary[nextLang][key];
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === nextLang);
    });

    renderProjects(nextLang);
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-carousel-dir]");
    if (!button) return;
    const carousel = button.closest("[data-carousel]");
    const scroller = carousel?.querySelector(".media-scroller");
    if (!scroller) return;
    const dir = Number(button.dataset.carouselDir);
    scroller.scrollBy({
      left: dir * Math.max(scroller.clientWidth * 0.86, 320),
      behavior: "smooth"
    });
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  root.dataset.theme = "dark";
  setLanguage(localStorage.getItem(storageKey) || "en");
})();

(function () {
  const root = document.documentElement;
  const storageKey = "wjx-portfolio-lang";
  const themeKey = "wjx-portfolio-theme";
  const basePrefix = location.pathname.includes("/robotics/") ? "../" : "";
  const projects = window.PORTFOLIO_PROJECTS || [];

  const dictionary = {
    en: {
      nav_home: "Home",
      nav_robotics: "Robotics",
      nav_contact: "Contact",
      hero_eyebrow: "Robotics Portfolio",
      hero_title: "Building robots that sense, decide, and move.",
      hero_lede: "A project-focused portfolio for manipulation, autonomous systems, control, perception, and software integration.",
      hero_cta: "View robotics work",
      hero_github: "GitHub",
      focus_eyebrow: "Focus",
      focus_title: "Engineering work, shown as systems.",
      focus_1_title: "Manipulation",
      focus_1_text: "Forward/inverse kinematics, robot motion planning, dual-arm coordination, and object handling.",
      focus_2_title: "Autonomy",
      focus_2_text: "Perception, localization, control loops, and task-level decision logic for embodied systems.",
      focus_3_title: "Integration",
      focus_3_text: "Python, ROS-style workflows, simulation, debugging, documentation, and deployable project structure.",
      selected_eyebrow: "Selected Work",
      selected_title: "Recent robotics projects",
      contact_eyebrow: "Contact",
      contact_title: "Open to robotics, autonomy, and control projects.",
      footer_note: "Built as a static GitHub Pages portfolio.",
      back_home: "← Home",
      robotics_eyebrow: "Robotics / Autonomous Systems",
      robotics_title: "Projects organized like engineering notebooks.",
      robotics_lede: "Each project is presented with media, the system problem, technical stack, and what was actually built.",
      notes_eyebrow: "Build Notes",
      notes_title: "What this site architecture is optimized for",
      note_1_title: "Static deployment",
      note_1_text: "Everything runs directly on GitHub Pages without a backend or build step.",
      note_2_title: "Project data file",
      note_2_text: "New projects are added in one JavaScript data file instead of duplicating page markup.",
      note_3_title: "Media-first layout",
      note_3_text: "The design expects real photos, CAD exports, simulation screenshots, and demo videos.",
      details_label: "Details",
      links_label: "Links"
    },
    zh: {
      nav_home: "首页",
      nav_robotics: "机器人项目",
      nav_contact: "联系",
      hero_eyebrow: "机器人作品集",
      hero_title: "构建能够感知、决策和运动的机器人系统。",
      hero_lede: "一个面向机械臂、自主系统、控制、感知和软件集成的项目型作品集。",
      hero_cta: "查看机器人项目",
      hero_github: "GitHub",
      focus_eyebrow: "方向",
      focus_title: "把工程项目按系统能力展示出来。",
      focus_1_title: "机械臂操作",
      focus_1_text: "正逆运动学、机械臂运动规划、双臂协同和物体操作。",
      focus_2_title: "自主系统",
      focus_2_text: "感知、定位、控制回路，以及具身系统里的任务级决策逻辑。",
      focus_3_title: "系统集成",
      focus_3_text: "Python、ROS 风格流程、仿真、调试、文档和可部署的项目结构。",
      selected_eyebrow: "精选项目",
      selected_title: "近期机器人项目",
      contact_eyebrow: "联系",
      contact_title: "关注机器人、自主系统和控制方向的项目机会。",
      footer_note: "静态 GitHub Pages 作品集。",
      back_home: "← 首页",
      robotics_eyebrow: "机器人 / 自主系统",
      robotics_title: "像工程笔记一样组织项目。",
      robotics_lede: "每个项目都围绕媒体素材、系统问题、技术栈和实际完成内容来展示。",
      notes_eyebrow: "架构说明",
      notes_title: "这个网站架构适合做什么",
      note_1_title: "静态部署",
      note_1_text: "不需要后端和构建步骤，可以直接运行在 GitHub Pages 上。",
      note_2_title: "项目数据文件",
      note_2_text: "新增项目时只需要改一个 JavaScript 数据文件，不用重复写页面结构。",
      note_3_title: "媒体优先",
      note_3_text: "页面设计默认你会放真实照片、CAD 导出图、仿真截图和演示视频。",
      details_label: "项目说明",
      links_label: "链接"
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

  function setTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    root.dataset.theme = nextTheme;
    localStorage.setItem(themeKey, nextTheme);
  }

  function tags(project) {
    return project.tags.map((tag) => `<span>${tag}</span>`).join("");
  }

  function links(project) {
    if (!project.links.length) return "";
    return `<div class="project-links">${project.links.map((link) => {
      const external = isExternal(link.url);
      const attrs = external ? ' target="_blank" rel="noopener"' : "";
      return `<a href="${withBase(link.url)}"${attrs}>${link.label}</a>`;
    }).join("")}</div>`;
  }

  function card(project, lang, compact) {
    const body = text(project.body, lang);
    const bodyHtml = Array.isArray(body) ? body.map((paragraph) => `<p>${paragraph}</p>`).join("") : "";
    const compactClass = compact ? " project-card--compact" : "";
    const media = mediaItems(project);
    const mediaHtml = media.map((src, index) => `<img src="${withBase(src)}" alt="${text(project.mediaAlt, lang)}${index ? ` ${index + 1}` : ""}" loading="lazy">`).join("");

    return `
      <article class="project-card${compactClass}" id="${project.id}">
        <div class="project-media${media.length > 1 ? " project-media--gallery" : ""}">
          ${mediaHtml}
        </div>
        <div class="project-content">
          <div class="project-kicker">
            <span>${project.year}</span>
            <div class="project-tags">${tags(project)}</div>
          </div>
          <h3>${text(project.title, lang)}</h3>
          <p class="project-subtitle">${text(project.subtitle, lang)}</p>
          ${compact ? "" : `<div class="project-body">${bodyHtml}</div>`}
          ${links(project)}
        </div>
      </article>
    `;
  }

  function renderProjects(lang) {
    const featured = document.querySelector("[data-featured-projects]");
    const fullList = document.querySelector("[data-project-list]");
    const nav = document.querySelector("[data-project-nav]");

    if (featured) {
      featured.innerHTML = projects.filter((project) => project.featured).map((project) => card(project, lang, true)).join("");
    }

    if (fullList) {
      fullList.innerHTML = projects.map((project) => card(project, lang, false)).join("");
    }

    if (nav) {
      nav.innerHTML = projects.map((project) => `<a href="#${project.id}">${text(project.title, lang)}</a>`).join("");
    }
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  setTheme(localStorage.getItem(themeKey) || "light");
  setLanguage(localStorage.getItem(storageKey) || "en");
})();

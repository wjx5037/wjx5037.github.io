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

  function text(field, lang) {
    if (!field) return "";
    return field[lang] || field.en || "";
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

  function topCarousel(lang) {
    const slides = projects.map((project) => {
      const src = mediaItems(project)[0];
      return `
        <a class="featured-slide" href="#${project.id}">
          <img src="${withBase(src)}" alt="${text(project.mediaAlt, lang)}" loading="lazy">
          <span>${text(project.title, lang)}</span>
        </a>
      `;
    }).join("");

    return `
      <button class="strip-button strip-button--prev" type="button" aria-label="Previous projects" data-strip-dir="-1">‹</button>
      <div class="featured-scroller" tabindex="0">${slides}</div>
      <button class="strip-button strip-button--next" type="button" aria-label="Next projects" data-strip-dir="1">›</button>
    `;
  }

  function projectCard(project, lang) {
    const media = mediaItems(project).slice(0, 3);
    const body = text(project.body, lang);
    const bodyHtml = Array.isArray(body) ? body.map((paragraph) => `<p>${paragraph}</p>`).join("") : "";
    const mediaHtml = media.map((src, index) => `
      <img src="${withBase(src)}" alt="${text(project.mediaAlt, lang)}${index ? ` ${index + 1}` : ""}" loading="lazy">
    `).join("");

    return `
      <article class="project-card" id="${project.id}">
        <div class="project-media${media.length > 1 ? " project-media--gallery" : ""}">
          ${mediaHtml}
        </div>
        <div class="project-content">
          <div class="project-kicker">
            <span>${project.year}</span>
            <div class="project-tags">${tags(project)}</div>
          </div>
          <h2>${text(project.title, lang)}</h2>
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
    const carousel = document.querySelector("[data-project-carousel]");

    if (nav) {
      nav.innerHTML = projects.map((project) => `<a href="#${project.id}">${text(project.title, lang)}</a>`).join("");
    }

    if (carousel) {
      carousel.innerHTML = topCarousel(lang);
    }

    if (list) {
      list.innerHTML = projects.map((project) => projectCard(project, lang)).join("");
    }

    setupAutoStrip();
  }

  function setupAutoStrip() {
    document.querySelectorAll(".featured-scroller").forEach((scroller) => {
      if (scroller.dataset.autoScrollReady === "true") return;
      scroller.dataset.autoScrollReady = "true";

      let paused = false;
      const pause = () => {
        paused = true;
      };
      const resume = () => {
        paused = false;
      };

      scroller.addEventListener("mouseenter", pause);
      scroller.addEventListener("focusin", pause);
      scroller.addEventListener("mouseleave", resume);
      scroller.addEventListener("focusout", resume);

      window.setInterval(() => {
        if (paused || scroller.scrollWidth <= scroller.clientWidth) return;
        const step = Math.max(scroller.clientWidth * 0.42, 180);
        const nearEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 8;
        scroller.scrollTo({
          left: nearEnd ? 0 : scroller.scrollLeft + step,
          behavior: "smooth"
        });
      }, 2600);
    });
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
    const button = event.target.closest("[data-strip-dir]");
    if (!button) return;
    const strip = button.closest("[data-project-carousel]");
    const scroller = strip?.querySelector(".featured-scroller");
    if (!scroller) return;
    scroller.scrollBy({
      left: Number(button.dataset.stripDir) * Math.max(scroller.clientWidth * 0.78, 320),
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

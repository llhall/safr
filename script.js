document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll(".submenu-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".has-submenu");
      if (!parent) return;
      const open = parent.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
  });

  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const linkFile = link.getAttribute("href");
    if (linkFile === currentFile) {
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll(".demo-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      const formName = form.dataset.formName || "website";
      if (status) {
        status.textContent =
          `This ${formName} form is included for design review but is not connected to a submission service yet.`;
      }
    });
  });

  const injectLiveGraphics = () => {
    const selectors = [
      ".hero",
      ".page-hero",
      ".dark-section",
      ".newsletter-section",
      ".support-strip",
      ".site-footer"
    ];

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((section) => {
        if (section.querySelector(".section-video-bg")) return;
        section.classList.add("has-live-graphic");

        const bg = document.createElement("div");
        bg.className = "section-video-bg";
        bg.setAttribute("aria-hidden", "true");

        if (!reducedMotion) {
          const video = document.createElement("video");
          video.autoplay = true;
          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          video.setAttribute("playsinline", "");
          video.setAttribute("preload", "auto");

          const source = document.createElement("source");
          source.src = "assets/safr-live-graphic.mp4";
          source.type = "video/mp4";
          video.appendChild(source);
          bg.appendChild(video);
        }

        const overlay = document.createElement("div");
        overlay.className = "section-video-overlay";
        bg.appendChild(overlay);

        section.prepend(bg);
      });
    });
  };

  injectLiveGraphics();
});

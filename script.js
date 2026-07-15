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
    if (link.getAttribute("href") === currentFile) {
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
        status.textContent = `This ${formName} form is designed but is not connected to a submission service yet.`;
      }
    });
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".hero, .page-hero").forEach((section) => {
    if (section.querySelector(".section-video-bg")) return;

    const background = document.createElement("div");
    background.className = "section-video-bg";
    background.setAttribute("aria-hidden", "true");

    if (!reducedMotion) {
      const video = document.createElement("video");
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.poster = "assets/safr-live-poster.jpg";
      video.setAttribute("preload", "auto");

      const source = document.createElement("source");
      source.src = "assets/safr-live-graphic.mp4";
      source.type = "video/mp4";
      video.appendChild(source);
      background.appendChild(video);
    }

    const overlay = document.createElement("div");
    overlay.className = "section-video-overlay";
    background.appendChild(overlay);
    section.prepend(background);
  });

  if (!reducedMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }
});

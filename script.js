(() => {
  const nav = document.querySelector("[data-nav]");
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // Subtle parallax on hero image
  const img = document.querySelector(".hero-img");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (img && !reduce) {
    window.addEventListener(
      "scroll",
      () => {
        const y = Math.min(window.scrollY, 600);
        img.style.translate = `0 ${y * 0.18}px`;
      },
      { passive: true }
    );
  }
})();

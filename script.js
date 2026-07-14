(() => {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const mobileQuery = window.matchMedia("(max-width: 67.5rem)");
  let closeTimer = 0;
  let scrollFrame = 0;

  const setHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
    scrollFrame = 0;
  };

  const openMenu = () => {
    if (!menuToggle || !mobileNav) return;
    window.clearTimeout(closeTimer);
    mobileNav.hidden = false;
    menuToggle.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");
    window.requestAnimationFrame(() => mobileNav.classList.add("is-open"));
  };

  const closeMenu = (immediate = false) => {
    if (!menuToggle || !mobileNav) return;
    window.clearTimeout(closeTimer);
    menuToggle.classList.remove("is-open");
    mobileNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    if (immediate) {
      mobileNav.hidden = true;
      return;
    }

    closeTimer = window.setTimeout(() => {
      if (!mobileNav.classList.contains("is-open")) mobileNav.hidden = true;
    }, 340);
  };

  menuToggle?.addEventListener("click", () => {
    if (menuToggle.getAttribute("aria-expanded") === "true") closeMenu();
    else openMenu();
  });

  mobileNav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("pointerdown", (event) => {
    if (
      menuToggle?.getAttribute("aria-expanded") === "true" &&
      !header?.contains(event.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });

  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) closeMenu(true);
  });

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(setHeaderState);
    },
    { passive: true },
  );

  setHeaderState();

})();

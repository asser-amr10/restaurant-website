const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const menuIsOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", menuIsOpen);
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
});

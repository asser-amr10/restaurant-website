const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const sectionLinks = document.querySelectorAll("[data-section]");
const pageSections = document.querySelectorAll(".page-section");

menuToggle.addEventListener("click", () => {
  const menuIsOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", menuIsOpen);
});

function showSection(sectionId) {
  pageSections.forEach((section) => {
    section.classList.toggle("active-section", section.id === sectionId);
  });

  sectionLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === sectionId);
  });

  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSection(link.dataset.section);
  });
});

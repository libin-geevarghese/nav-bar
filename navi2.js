const navbarToggler = document.querySelector(".navbar-toggler");
const collapseMenu = document.querySelector(".collapse-menu");

navbarToggler.addEventListener("click", () => {
  collapseMenu.classList.toggle("show");
});

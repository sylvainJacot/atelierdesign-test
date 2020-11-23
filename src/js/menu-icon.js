// const close_menu = document.getElementById("burger-menu");
const menu_icon = document.getElementById("button-menu");
const mainNav = document.getElementById("main-navigation-list");

menu_icon.addEventListener("click", togglemenu);
function togglemenu() {
  menu_icon.classList.toggle("button-menu-active");
  mainNav.classList.toggle("main-navigation-list-active");
}

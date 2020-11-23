window.onscroll = function () {
  scrollFunction();
};

var header = document.getElementById("header");
var logoPositif = document.getElementById("paynxtLogo-Positif");
var logoNegatif = document.getElementById("paynxtLogo-Negatif");

var icMenu = document.getElementById("ic-menu");
var icClose = document.getElementById("ic-close");

var navList = document.getElementById("main-navigation-list");

var headerHeight = header.offsetHeight;

function scrollFunction() {
  if (
    document.body.scrollTop > headerHeight ||
    document.documentElement.scrollTop > headerHeight
  ) {
    header.style.cssText =
      "Background-color: white; height: 56px; box-shadow: -10px 10px 18px 0px #00094030;";
    logoNegatif.style.cssText = "Display: none;";
    logoPositif.style.cssText = "Display: block; width: 120px;";
    navList.style.cssText = "Top: 6rem;";
    icMenu.style.cssText = "color: #FF6901";
    icClose.style.cssText = "color: #FF6901";
  } else {
    header.style.cssText = "Background-color: transparent; height: 80px";
    logoPositif.style.cssText = "Display: none;";
    logoNegatif.style.cssText = "Display: block; width: 140px;";
    navList.style.cssText = "Top: 10rem;";
    icMenu.style.cssText = "color: White";
    icClose.style.cssText = "color: White";
  }
}

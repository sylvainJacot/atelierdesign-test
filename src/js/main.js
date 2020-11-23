function callAll(jsfiles) {
  var src = document.createElement("script");
  src.setAttribute("type", "text/javascript");
  src.setAttribute("src", jsfiles);
  document.getElementsByTagName("body")[0].appendChild(src);
}
callAll("./src/js/gsap-animations.js");
callAll("./src/js/loader.js");
callAll("./src/js/cursor.js");
callAll("./src/js/header-scroll.js");
callAll("./src/js/parallax.js");
callAll("./src/js/slider.js");
callAll("./src/js/menu-icon.js");
callAll("./src/js/dropdown-icon.js");

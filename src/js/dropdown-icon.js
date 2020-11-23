// When the HTML content is loaded :
if (document.readyState !== "loading") {
  ToggleDropDown();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    ToggleDropDown();
  });
}

function ToggleDropDown() {
  var element = document.querySelectorAll(".dropdown-wrapper");

  if (element) {
    element.forEach(function (el, key) {
      el.addEventListener("click", function () {
        el.classList.toggle("dropdown-active");

        element.forEach(function (ell, keyEll) {
          if (key !== keyEll) {
            ell.classList.remove("dropdown-active");
          }
        });
      });
    });
  }
}

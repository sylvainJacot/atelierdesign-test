let mouseCursor = document.querySelector(".cursor");
let logo = document.getElementById("paynxtLogo");
let menuButton = document.getElementById("button-menu");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

menuButton.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
});

menuButton.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
});

logo.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow");
});
logo.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow");
});

document.addEventListener("click", () => {
  mouseCursor.classList.add("clickexpand");
  setTimeout(() => {
    mouseCursor.classList.remove("clickexpand");
  }, 300);
});

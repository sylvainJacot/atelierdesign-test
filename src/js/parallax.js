const translate = document.querySelectorAll(".translate");
window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;

  translate.forEach((el) => {
    let speed = el.dataset.speed;
    el.style.transform = `translateY(${scroll * speed}px)`;
  });
});

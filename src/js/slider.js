// // core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from "swiper";
// import "swiper/swiper-bundle.css";
// // configure Swiper to use modules
// Swiper.use([Navigation, Pagination]);

// // init Swiper:
var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-previous-unique",
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

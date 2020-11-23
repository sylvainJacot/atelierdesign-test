gsap.registerPlugin(ScrollTrigger);

gsap.from(".sub-hero-header", {
  scrollTrigger: {
    trigger: ".sub-hero-header",
    start: "top center",
    end: "top center",
    scrub: 2,
    markers: false,
  },
  duration: 1,
  y: 80,
  ease: "power1.inOut",
});

gsap.from(".swiper-button-previous-unique", {
  scrollTrigger: {
    trigger: ".slider-container",
    start: "top center",
    end: "top center",
    scrub: 2,
    markers: false,
  },
  x: -40,
  duration: 0.3,
  ease: "power1.inOut",
});

gsap.from(".swiper-button-next-unique", {
  scrollTrigger: {
    trigger: ".slider-container",
    start: "top center",
    end: "top center",
    scrub: 2,
    markers: false,
  },
  x: 40,
  duration: 0.3,
  ease: "power1.inOut",
});

gsap.from(".dropdown-wrapper", {
  scrollTrigger: {
    trigger: ".dropdown-wrappers",
    start: "top center",
    end: "top center",
    scrub: 3,
    markers: false,
  },
  y: 40,
  duration: 0.6,
  stagger: 0.5,
  ease: "power1.inOut",
});

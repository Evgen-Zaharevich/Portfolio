gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// <-- disable effects on mobile devices -->

// if (ScrollTrigger !== 1) {}

ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
});

if (ScrollTrigger !== 1) {
  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );

  let itemsLeftColumn = gsap.utils.toArray("gallery__left .gallery__item");

  itemsLeftColumn.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "-3000",
          end: "-500",
          scrub: true,
        },
      }
    );
  });

  let itemsRightColumn = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsRightColumn.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "-3000",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  gsap.fromTo(
    ".image-brushes",
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".image-brushes",
        start: "-850",
        end: "-250",
        scrub: true,
      },
    }
  );
}

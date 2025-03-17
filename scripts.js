document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);
  // gsap code here!
  // gsap.from("nav",{duration:1,y:-100,opacity:0,ease:"power2.out", delay:1})

  // Initialize Lenis
  const lenis = new Lenis({
    // Set the scroll speed
    speed: 1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

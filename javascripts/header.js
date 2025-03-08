document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);
  // gsap code here!
  gsap.from("nav .iconCont", {
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5,
  });
  let menuIcon = document.querySelector(".iconCont");
  let menuCloseIcon = document.querySelector(".menuCloseIcon");
  let menu = document.querySelector(".menu");
  let menuToggle = false;
  function toggleMenu() {
    console.log("clicked");
    if (menuToggle) {
      gsap.to(menu, {
        duration: 0.5,
        left: "100%",
        ease: "power2.out",
      });
      menuToggle = false;
    } else {
      gsap.to(menu, {
        duration: 0.5,
        left: "0%",
        ease: "power2.out",
      });
      menuToggle = true;
    }
  }
  menuIcon.addEventListener("click", () => {
    toggleMenu();
  });
  menuCloseIcon.addEventListener("click", () => {
    toggleMenu();
  });
});

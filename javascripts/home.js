document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    let text1 = document.querySelector("#home .cont .textcont h1");
    let text2 = document.querySelector("#home .cont .textcont h3");
    // let text3 = document.querySelector("#home .cont .textcont h4");

    // Smooth animation with GPU acceleration
    const t1 = gsap.timeline();

    t1.from(text1, { duration: 1, y: -500, opacity: 0, ease: "power2.out" });
    // t1.from(text3, { duration: 1, x: 0, opacity:1, ease: "power2.out" });
    t1.from(text2, { duration: 1, y: -100, opacity: 0, ease: "power2.out" });


});

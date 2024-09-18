import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Mousemove = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Animate the cursor with mouse movement
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 12,
        y: e.clientY - 12,
        duration: 0.5,
        ease: "power2.inout",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-[30px] h-[30px] z-[3] border-[1px] border-white rounded-3xl fixed flex justify-center items-center"
    ></div>
  );
};

export default Mousemove;

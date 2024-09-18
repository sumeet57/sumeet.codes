import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Mousemove = () => {
  const cursorRef = useRef(null);
  const cursorRef2 = useRef(null);
  

  useEffect(() => {
    // Animate the cursor with mouse movement
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.9,
        // ease: "power2.out",
      });
      gsap.to(cursorRef2.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        // ease: "power2.out",
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
  ref={cursorRef}
  className="w-[30px] h-[30px] border-[1px] border-white rounded-3xl fixed flex justify-center items-center"
>
  <div
    ref={cursorRef2}
    className="fixed w-[2px] h-[2px] bg-white rounded-3xl"
  >
  </div>
</div>
  );
};

export default Mousemove;

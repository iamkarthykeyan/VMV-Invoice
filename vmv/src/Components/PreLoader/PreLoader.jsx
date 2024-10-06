import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PreLoader = ({ onComplete }) => {
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Spin the circle for 2 seconds
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });

    // Fade-in the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );

    // Fade out the preloader after 2 seconds
    const timeout = setTimeout(() => {
      gsap.to(circleRef.current, { opacity: 0, duration: 0.5 });
      gsap.to(textRef.current, { opacity: 0, duration: 0.5, onComplete });
    }, 1000); // 2 seconds

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col items-center">
        {/* Spinning Circle */}
        <div
          ref={circleRef}
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-t-4 border-gray-800 rounded-full transition-all"
        ></div>
      </div>
    </div>
  );
};

export default PreLoader;

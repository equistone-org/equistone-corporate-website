// orbGradient.js

import { useEffect } from "react";
import gsap from "gsap";

export default function useOrbGradientAnimation(
  orbGradient1,
  orbGradient2,
  orbGradient3
) {
  useEffect(() => {
    gsap.to(orbGradient1.current, {
      x: 150,
      y: -200,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(orbGradient2.current, {
      x: -180,
      y: 120,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(orbGradient3.current, {
      x: 100,
      y: 180,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [orbGradient1, orbGradient2, orbGradient3]);
}
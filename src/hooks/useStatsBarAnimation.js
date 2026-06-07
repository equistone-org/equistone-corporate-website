"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useStatsBarAnimation(ref) {
  useEffect(() => {
    if (!ref?.current) return;

    const el = ref.current;

    gsap.fromTo(
      el,
      {
        marginTop: 0,
      },
      {
        paddingTop: 112, // mt-16 = 64px
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, [ref]);
}

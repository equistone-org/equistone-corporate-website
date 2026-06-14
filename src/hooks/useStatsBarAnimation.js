"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useStatsBarAnimation(ref) {
  useEffect(() => {
    if (!ref?.current) return;

    const el = ref.current;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    // kill old trigger for safety
    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === el) t.kill();
    });

    if (isMobile) return; // ❌ disable on mobile completely

    gsap.fromTo(
      el,
      {
        paddingTop: 0,
      },
      {
        paddingTop: 112,
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

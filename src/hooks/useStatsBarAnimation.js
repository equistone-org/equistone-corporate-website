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

    // optional: kill any existing triggers
    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === el) t.kill();
    });

    gsap.fromTo(
      el,
      {
        paddingTop: isMobile ? 0 : 112,
      },
      {
        paddingTop: isMobile ? 0 : 112, // no animation difference on mobile
        ease: "power2.out",
        scrollTrigger: isMobile
          ? null
          : {
              trigger: el,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
      },
    );
  }, [ref]);
}

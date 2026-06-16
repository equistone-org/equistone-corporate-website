"use client";
import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PartnerSlider() {
  const trackRef = useRef(null);

  const partners = [
    {
      name: "Payhalal Sdn Bhd",
      src: "/collaborations/equistone-payhalal-logo.svg",
      type: "FinTech Strategic Partner",
    },
    {
      name: "Klinik Utama",
      src: "/collaborations/equistone-klinikutama-logo.svg",
      type: "Clinex Healthcare Client",
    },
    // {
    //   name: "JomChat",
    //   src: "/collaborations/equistone-intellilabs-logo.svg",
    //   type: "AI Technology Partner",
    // },
    {
      name: "Jomchat",
      src: "/collaborations/equistone-jomchat-logo.svg",
      type: "Communications Partner",
    },
  ];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const init = () => {
      const singleWidth = el.scrollWidth / 2;

      gsap.fromTo(
        el,
        { x: 0 },
        {
          x: -singleWidth,
          duration: 32,
          ease: "none",
          repeat: -1,
        },
      );
    };

    const timeout = setTimeout(init, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="overflow-hidden w-full bg-dark-primary">
      <div ref={trackRef} className="track flex w-max whitespace-nowrap">
        {[...partners, ...partners].map((item, index) => (
          <div
            key={index}
            className="
          flex items-center
          gap-[clamp(0.5rem,1vw,0.75rem)]
          px-[clamp(1rem,2.5vw,2rem)]
          py-[clamp(0.75rem,1.5vw,1.25rem)]
          border-r border-white/20
        "
          >
            <Image
              src={item.src}
              alt={item.name}
              height={78}
              width={78}
              className="w-[clamp(3rem,5vw,4.5rem)] h-auto"
            />

            <span
              className="
            text-white/60
            text-[clamp(0.75rem,1vw,0.9rem)]
          "
            >
              · {item.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

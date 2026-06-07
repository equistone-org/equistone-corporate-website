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
      name: "IntelliLabs AI",
      src: "/collaborations/equistone-klinikutama-logo.svg",
      type: "Clinex Healthcare Client",
    },
    {
      name: "JomChat",
      src: "/collaborations/equistone-intellilabs-logo.svg",
      type: "AI Technology Partner",
    },
    {
      name: "Klinik Utama Sdn Bhd",
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
          duration: 25,
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
            className="flex items-center gap-3 px-8 py-4 border-r border-white/20"
          >
            <Image
              src={item.src}
              alt={item.name}
              height={78}
              width={78}
              className="w-[78px] lg:w-[82px] h-auto"
            />
            <span className="text-white/60 text-sm">· {item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

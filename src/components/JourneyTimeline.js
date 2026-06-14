"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function JourneyTimeline() {
  const [active, setActive] = useState("2019");

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const yearRef = useRef(null);

  const data = [
    {
      year: "2019",
      desc: "Equistone Sdn Bhd incorporated in Kuala Lumpur, Malaysia",
    },
    {
      year: "2019–2023",
      desc: "Actively evaluating investments across multiple ICT businesses and sectors",
    },
    {
      year: "2024",
      desc: "Clinex clinic management system development begins in-house at Equistone",
    },
    {
      year: "2024–2025",
      desc: "Clinex deployed — first GP clinics go live; Klinik Utama onboarded as key client",
    },
    {
      year: "2025",
      desc: "Strategic partnerships established: Payhalal, IntelliLabs AI, JomChat",
    },
    {
      year: "2026",
      desc: "50+ clinics live · 350,000+ patient records · ASEAN expansion underway",
    },
  ];

  const activeItem = data.find((d) => d.year === active);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
    )
      .fromTo(
        descRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2",
      )
      .fromTo(
        yearRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3",
      );
  }, [active]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(2rem,4vw,4rem)] items-start">
      {/* TIMELINE NAV */}
      <div className="lg:col-span-3 mb-[clamp(2rem,4vw,3rem)]">
        <div className="relative">
          {/* LINE */}
          <div
            className="
          absolute
          left-[7px] top-0 bottom-0
          border-l border-dashed border-gray-600
          lg:left-0 lg:right-0 lg:top-1/2 lg:bottom-auto
          lg:border-l-0 lg:border-t
          lg:-translate-y-1/2
        "
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:justify-between">
            {data.map((item) => {
              const isActive = active === item.year;

              return (
                <button
                  key={item.year}
                  onClick={() => setActive(item.year)}
                  className="relative flex flex-row items-center gap-4 lg:flex-col lg:items-center lg:text-center min-w-[clamp(60px,8vw,100px)] cursor-pointer"
                >
                  {/* DOT */}
                  <div
                    className={`
                  absolute left-[7px] top-1/2 -translate-x-1/2 -translate-y-1/2
                  lg:left-auto lg:translate-x-0 lg:top-1/2
                  w-[clamp(0.6rem,1vw,0.875rem)]
                  h-[clamp(0.6rem,1vw,0.875rem)]
                  rounded-full border-2 transition
                  ${
                    isActive
                      ? "bg-black border-black scale-125"
                      : "bg-white border-gray-400"
                  }
                `}
                  />

                  {/* SPACER */}
                  <div className="w-6 lg:w-0 h-0 lg:h-[clamp(1rem,2vw,1.5rem)]" />

                  {/* YEAR LABEL */}
                  <div
                    className={`
                  mt-0 lg:mt-[clamp(0.75rem,1vw,1rem)]
                  text-[clamp(0.75rem,1vw,0.875rem)]
                  transition
                  ${
                    isActive
                      ? "text-dark-primary font-semibold"
                      : "text-black/60 font-normal"
                  }
                `}
                  >
                    {item.year}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="lg:col-span-3 flex flex-col justify-start">
        {/* TITLE */}
        <h3
          ref={titleRef}
          className="text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-dark-primary"
        >
          {activeItem?.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          ref={descRef}
          className="mt-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.95rem,1.1vw,1.125rem)] text-[#3a4347] leading-[1.8]"
        >
          {activeItem?.desc}
        </p>

        {/* YEAR DISPLAY */}
        <div
          ref={yearRef}
          className="flex flex-col justify-start mt-[clamp(2rem,3vw,3rem)]"
        >
          <div className="w-full overflow-hidden">
            <div className="inline-block whitespace-nowrap font-semibold text-green-dark-primary leading-none text-[clamp(2.5rem,6vw,6rem)]">
              {activeItem?.year}
            </div>
          </div>

          <div className="mt-[clamp(0.75rem,1vw,1rem)] h-[3px] w-[clamp(3rem,6vw,5rem)] bg-black mr-auto" />

          <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.75rem,1vw,0.875rem)] text-[#3a4347]">
            Selected milestone
          </p>
        </div>
      </div>
    </div>
  );
}

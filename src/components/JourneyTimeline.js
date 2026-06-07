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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
      <div className="lg:col-span-3 mb-10">
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-600 -translate-y-1/2" />
          <div className="flex justify-between relative">
            {data.map((item) => {
              const isActive = active === item.year;

              return (
                <button
                  key={item.year}
                  onClick={() => setActive(item.year)}
                  className="relative flex flex-col items-center text-center min-w-[100px] cursor-pointer"
                >
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 transition ${
                      isActive
                        ? "bg-black border-black scale-125"
                        : "bg-white border-gray-400"
                    }`}
                  />
                  <div className="h-6" />

                  <div
                    className={`mt-4 text-sm transition ${
                      isActive
                        ? "text-dark-primary font-semibold"
                        : "text-black/60 font-normal"
                    }`}
                  >
                    {item.year}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 flex flex-col justify-start">
        <h3 ref={titleRef} className="text-2xl font-semibold text-dark-primary">
          {activeItem?.title}
        </h3>

        <p
          ref={descRef}
          className="mt-4 text-[#3a4347] leading-7 text-base lg:text-lg"
        >
          {activeItem?.desc}
        </p>

          <div ref={yearRef} className="flex justify-start flex flex-col">
            <div className="w-full overflow-hidden">
              <div className="inline-block whitespace-nowrap font-semibold text-green-dark-primary leading-none text-[clamp(3rem,6vw,6rem)]">
                {activeItem?.year}
              </div>
            </div>

            <div className="mt-4 h-[4px] w-20 bg-black mr-auto" />

            <p className="mt-4 text-sm text-[#3a4347]">Selected milestone</p>
          </div>
      </div>
    </div>
  );
}

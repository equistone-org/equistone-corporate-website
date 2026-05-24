"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderLight from "@/components/HeaderLight";
import FooterLight from "@/components/FooterLight";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function PartnerSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".logo-track", {
        xPercent: -50,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  const logos = [
    {
      src: "/collaborations/equistone-payhalal-logo.svg",
      name: "Payhalal Sdn Bhd",
    },
    {
      src: "/collaborations/equistone-klinikutama-logo.svg",
      name: "Klinik Utama Sdn Bhd",
    },
    {
      src: "/collaborations/equistone-intellilabs-logo.svg",
      name: "IntelliLabs AI",
    },
    {
      src: "/collaborations/equistone-jomchat-logo.svg",
      name: "JomChat",
    },
  ];

  return (
    <div ref={sliderRef} className="overflow-hidden w-full py-20 bg-primary-dark">
      <div className="logo-track flex w-max">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="w-[300px] px-6 lg:px-12 py-10 lg:py-18 text-lg lg:text-2xl flex flex-col justify-between border border-gray-400"
          >
            <div className="flex items-center justify-center py-4 h-[120px]">
              <Image
                src={logo.src}
                alt={logo.name}
                height={72}
                width={182}
                className="w-[120px] lg:w-[182px] h-auto"
              />
            </div>

            <h4 className="text-white flex justify-center font-semibold text-center">
              {logo.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const orb3 = useRef(null);
  useEffect(() => {
    gsap.to(orb1.current, {
      x: 150,
      y: -200,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(orb2.current, {
      x: -180,
      y: 120,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(orb3.current, {
      x: 100,
      y: 180,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="flex-1 flex-col items-start justify-center bg-primary-light font-sans">
      <main className="relative min-h-screen w-full overflow-hidden font-sans z-[99]">
        <div className="absolute inset-0 z-0 overflow-hidden bg-secondary-light">
          {/* Orb 1 */}
          <div
            ref={orb1}
            className="absolute w-[600px] h-[600px] rounded-full blur-[20px] opacity-90"
            style={{
              background:
                "radial-gradient(circle, #e7c8a0 0%, transparent 70%)",
              top: "20%",
              left: "10%",
            }}
          />

          <div
            ref={orb2}
            className="absolute w-[500px] h-[800px] rounded-full blur-[40px] opacity-90"
            style={{
              background:
                "radial-gradient(circle, #deb68a 0%, transparent 70%)",
              top: "60%",
              left: "50%",
            }}
          />

          <div
            ref={orb3}
            className="absolute w-[800px] h-[1200px] rounded-full blur-[60px] opacity-90"
            style={{
              background:
                "radial-gradient(circle, #d4a373 0%, transparent 70%)",
              top: "20%",
              left: "70%",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex min-h-screen flex-col">
          <HeaderLight withBorder />

          <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full flex-1 container mx-auto">
            <div className="col-span-2 px-[clamp(2rem,3vw,4rem)] py-12 lg:py-0 flex items-center justify-center">
              <h1 className="text-[clamp(4rem,6vw,6rem)] font-medium leading-[1.2] tracking-tight text-green-dark-primary flex items-start justify-center gap-4 lg:gap-6">
                Unlocking value through clarity, strategy, and purpose
              </h1>
            </div>

            <div className="col-span-1 px-[clamp(2rem,3vw,4rem)] hidden lg:block"></div>
          </div>
        </div>
      </main>

      <main className="flex z-2 relative w-full flex-col px-[clamp(2rem,3vw,4rem)] font-sans bg-primary-light py-16 ">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between text-center">
            <h1 className="text-2xl lg:text-4xl font-normal leading-[1.2] tracking-tight text-[#00330f] flex gap-4">
              <span>•</span>
              About us
            </h1>

            <p className="text-lg lg:text-2xl text-[#3a4347]">-1</p>
          </div>

          <div className="mt-6">
            <p className="text-[clamp(2rem,4vw,4.2rem)] text-green-dark-primary font-medium w-full lg:w-[80%] leading-[1.2]">
              Equistone builds value where investment, strategy, and technology
              meet.
            </p>

            <div className="text-sm px-4 py-2 bg-primary-dark font-semibold text-white w-fit mt-8">
              <Link href="/about">Read more</Link>
            </div>
          </div>
        </div>
      </main>

      <main className="flex z-2 relative w-full flex-col px-[clamp(2rem,3vw,4rem)] font-sans bg-primary-dark py-20">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between text-center">
            <h1 className="text-2xl lg:text-4xl font-normal leading-[1.2] tracking-tight text-white flex gap-4">
              <span>•</span>
              Our strategic partner
            </h1>

            <p className="text-lg lg:text-2xl text-[#bec1c2]">-2</p>
          </div>

          <div className="mt-6">
            <p className="text-[clamp(1.8rem,3vw,3rem)] text-white font-medium w-full lg:w-[80%] leading-[1.2]">
              We work hand-in-hand with our strategic partners, combining
              strengths and expertise to ensure project success and deliver
              greater value
            </p>

            <div className="text-sm px-4 py-2 bg-[#EFF4F6] font-semibold text-black w-fit mt-8">
              <Link href="/about">Read more</Link>
            </div>
          </div>
          <PartnerSlider />
        </div>
      </main>

      <main className="flex z-2 relative w-full flex-col px-[clamp(2rem,3vw,4rem)] font-sans bg-primary-light py-20">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between text-center">
            <h1 className="text-2xl lg:text-4xl font-normal leading-[1.2] tracking-tight text-black flex gap-4">
              <span>•</span>
              Our product
            </h1>

            <p className="text-lg lg:text-2xl text-[#3d494d]">-2</p>
          </div>

          <div className="mt-6">
            <p className="text-[clamp(2rem,4vw,4.2rem)] text-green-dark-primary font-medium w-full lg:w-[80%] leading-[1.2]">
              A tiptop product that succesful, trust by clinic to use
            </p>
          </div>
        </div>
      </main>

      <FooterLight />
    </div>
  );
}

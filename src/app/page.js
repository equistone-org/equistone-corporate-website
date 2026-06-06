"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderLight from "@/components/HeaderLight";
import FooterLight from "@/components/FooterLight";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function JourneyTimeline() {
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
      {/* LEFT: DESCRIPTION (FOCUS) */}{" "}
      <div className="lg:col-span-3 mb-10">
        <div className="relative">
          {/* LINE */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -translate-y-1/2" />

          <div className="flex justify-between relative">
            {data.map((item) => {
              const isActive = active === item.year;

              return (
                <button
                  key={item.year}
                  onClick={() => setActive(item.year)}
                  className="relative flex flex-col items-center text-center min-w-[100px] cursor-pointer"
                >
                  {/* DOT (overlapping line) */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 transition ${
                      isActive
                        ? "bg-black border-black scale-125"
                        : "bg-white border-gray-400"
                    }`}
                  />

                  {/* spacing so text doesn't collide with dot */}
                  <div className="h-6" />

                  {/* YEAR */}
                  <div
                    className={`mt-4 text-sm font-semibold transition ${
                      isActive ? "text-green-dark-primary" : "text-gray-400"
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
      <div className="lg:col-span-2">
        <h3
          ref={titleRef}
          className="text-2xl font-semibold text-green-dark-primary"
        >
          {activeItem?.title}
        </h3>

        <p
          ref={descRef}
          className="mt-4 text-[#3a4347] leading-7 text-base lg:text-lg"
        >
          {activeItem?.desc}
        </p>
      </div>
      <div className="lg:col-span-1 flex lg:justify-end">
        <div ref={yearRef} className="text-right">
          <div className="w-full text-right overflow-hidden">
            <div className="inline-block whitespace-nowrap font-semibold text-green-dark-primary leading-none text-[clamp(3rem,6vw,6rem)]">
              {activeItem?.year}
            </div>
          </div>

          <div className="mt-4 h-[4px] w-20 bg-black ml-auto" />

          <p className="mt-4 text-sm text-[#3a4347]">Selected milestone</p>
        </div>
      </div>
    </div>
  );
}
function PartnerSlider() {
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
      type: "AI Technology Partner",
    },
    {
      name: "JomChat",
      src: "/collaborations/equistone-intellilabs-logo.svg",
      type: "Communications Partner",
    },
    {
      name: "Klinik Utama Sdn Bhd",
      src: "/collaborations/equistone-jomchat-logo.svg",
      type: "Clinex Healthcare Client",
    },
  ];

  useEffect(() => {
    const el = trackRef.current;

    gsap.set(el, { x: 0 });

    const width = el.scrollWidth / 2;

    gsap.to(el, {
      x: -width,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="overflow-hidden w-full bg-primary-dark">
      <div ref={trackRef} className="flex w-max whitespace-nowrap">
        {[...partners, ...partners].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 py-4 border-r border-white/20"
          >
            <Image
              src={item.src}
              alt={item.name}
              height={12}
              width={12}
              className="w-[78px] lg:w-[82px] h-auto"
            />
            <span className="text-white/60 text-sm">· {item.type}</span>
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
      {" "}
      <HeaderLight withBorder />
      <main className="relative h-[calc(100dvh-80px)] w-full overflow-hidden font-sans z-[99]">
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
        <div className="relative z-20 flex flex-col h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full flex-1 container mx-auto justify-center items-center">
            <div className="col-span-2 py-12 px-[clamp(2rem,3vw,4rem)] lg:py-0 flex">
              <div className="w-full px-6">
                <div className="mb-6 flex flex-row space-x-4">
                  <div className="text-xs lg:text-sm px-3 lg:px-4 py-2 border border-black font-semibold text-green-dark-primary uppercase">
                    ICT Investment Holding
                  </div>
                  <div className="text-xs lg:text-sm px-3 lg:px-4 py-2 border border-black font-semibold text-green-dark-primary uppercase">
                    Integra Tower · Kuala Lumpur
                  </div>
                </div>
                <h1 className="mb-8 font-semibold text-6 lg:text-[96px] xxl:text-[98px] text-green-dark-primary leading-20">
                  We Build What <br />
                  <span className="text-[#7f4f24]">Others Only Fund.</span>
                </h1>
                <p className="mb-22 font-semibold text-green-dark-primary">
                  Equistone Sdn Bhd is Malaysia's purpose-driven investment
                  holding and venture-building company — combining strategic
                  capital, corporate advisory, and in-house technology execution
                  to create scalable ICT ventures.
                </p>
                <div className="flex flex-row space-x-4">
                  <div className="text-xs lg:text-sm px-3 lg:px-4 py-2 bg-black font-semibold text-white uppercase">
                    Explore Our Ventures →
                  </div>
                  <div className="text-xs lg:text-sm px-3 lg:px-4 py-2 bg-black font-semibold text-white uppercase">
                    Partner With Us →
                  </div>
                </div>
                <div className="mt-12 flex flex-row space-x-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 divide-x  divide-gray-300">
                    <div className="p-5">
                      <div className="text-2xl font-bold text-green-dark-primary">
                        2019
                      </div>
                      <div className="mt-1 text-sm text-gray-800">
                        Year incorporated
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-2xl font-bold text-green-dark-primary">
                        50+
                      </div>
                      <div className="mt-1 text-sm text-gray-800">
                        Live clinics on Clinex
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-2xl font-bold text-green-dark-primary">
                        350k+
                      </div>
                      <div className="mt-1 text-sm text-gray-800">
                        Patient records managed
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-2xl font-bold text-green-dark-primary">
                        ICT
                      </div>
                      <div className="mt-1 text-sm text-gray-800">
                        Primary focus sector
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>

              {/* <h1 className="text-[clamp(4rem,6vw,6rem)] font-medium leading-[1.2] tracking-tight text-green-dark-primary flex items-start justify-center gap-4 lg:gap-6">
                Unlocking value through clarity, strategy, and purpose
              </h1> */}
            </div>

            <div className="col-span-1 hidden lg:block"></div>
          </div>
        </div>
      </main>
      <main className="flex z-2 relative w-full flex-col font-sans bg-primary-light ">
        {" "}
        <PartnerSlider />
      </main>
      <main className="flex z-2 relative w-full flex-col px-[clamp(2rem,3vw,4rem)] font-sans bg-primary-light py-16 ">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between text-center">
            <h1 className="text-lg font-normal leading-[1.2] tracking-tight text-[#00330f] flex gap-4">
              <span>•</span>
              About Equistone
            </h1>

            <p className="text-lg lg:text-2xl text-[#3a4347]">-1</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
            {/* First Grid */}
            <div className="lg:col-span-2">
              <h3 className="text-[clamp(2rem,2vw,4.2rem)] text-green-dark-primary font-medium leading-[1.2]">
                Capital, Strategy, and Technology — Under One Roof
              </h3>

              <p className="mt-6 text-[#3a4347] leading-8">
                Equistone Sdn Bhd is a Malaysian investment holding and digital
                solutions company that builds long-term value through a model no
                traditional holding company uses — we invest, advise, and build
                simultaneously. Incorporated in 2019 and headquartered in Kuala
                Lumpur, Equistone is focused on developing scalable ICT ventures
                across Malaysia and the ASEAN region.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                <div className="border-l border-gray-300 pl-5">
                  <h4 className="text-lg font-semibold text-green-dark-primary">
                    Strategic Investment
                  </h4>

                  <p className="mt-3 text-[#3a4347] leading-7 text-sm">
                    We identify high-potential opportunities in ICT sectors and
                    provide smart capital with hands-on strategic guidance — not
                    just a cheque.
                  </p>
                </div>

                <div className="border-l border-gray-300 pl-5">
                  <h4 className="text-lg font-semibold text-green-dark-primary">
                    Venture Building
                  </h4>

                  <p className="mt-3 text-[#3a4347] leading-7 text-sm">
                    We don't just fund — we build. Clinex is the proof:
                    designed, developed, and deployed in-house to 50+ Malaysian
                    clinics since 2024.
                  </p>
                </div>

                <div className="border-l border-gray-300 pl-5">
                  <h4 className="text-lg font-semibold text-green-dark-primary">
                    Sustainable Value Creation
                  </h4>

                  <p className="mt-3 text-[#3a4347] leading-7 text-sm">
                    We specialise in strategic asset transformation and
                    sustainable development initiatives — aligning every venture
                    with Malaysia's NIMP 2030 and digital economy agenda.
                  </p>
                </div>
              </div>

              <div className="text-sm px-4 py-2 bg-primary-dark font-semibold text-white w-fit mt-10">
                <Link href="/about">Read more</Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8">
              {/* Right Column */}
              <div className="flex flex-col gap-8">
                <div className="border-l border-gray-300 pl-6">
                  <div className="text-4xl font-semibold text-green-dark-primary">
                    2019
                  </div>

                  <p className="mt-3 text-[#3a4347] leading-7">
                    Year incorporated — Kuala Lumpur, Malaysia
                  </p>
                </div>

                <div className="border-l border-gray-300 pl-6">
                  <div className="text-4xl font-semibold text-green-dark-primary">
                    50+
                  </div>

                  <p className="mt-3 text-[#3a4347] leading-7">
                    Clinics live on Clinex as of 2026
                  </p>
                </div>

                <div className="border-l border-gray-300 pl-6">
                  <div className="text-4xl font-semibold text-green-dark-primary">
                    ICT
                  </div>

                  <p className="mt-3 text-[#3a4347] leading-7">
                    Primary focus sector — Malaysia & ASEAN
                  </p>
                </div>

                <div className="border-l border-gray-300 pl-6">
                  <div className="text-4xl font-semibold text-green-dark-primary">
                    2024
                  </div>

                  <p className="mt-3 text-[#3a4347] leading-7">
                    Clinex development launched in-house
                  </p>
                </div>

                {/* Mission Statement */}
                <div className="border-l border-black pl-6 mt-4">
                  <p className="italic text-[#1d2b2f] leading-8">
                    "Equistone's purpose is to become one of Malaysia's leading
                    platforms for purpose-driven investments, strategic
                    advisory, and technology-backed value creation — supporting
                    partners, clients, and ecosystems throughout their growth
                    journeys."
                  </p>

                  <p className="mt-4 text-sm font-semibold text-[#3a4347]">
                    Equistone Sdn Bhd — Corporate Mission Statement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="flex z-2 relative w-full flex-col px-[clamp(2rem,3vw,4rem)] font-sans bg-primary-light py-20">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between text-center">
            <h1 className="text-lg font-normal leading-[1.2] tracking-tight text-[#00330f] flex gap-4">
              <span>•</span>
              Technology Ventures
            </h1>

            <p className="text-lg lg:text-2xl text-[#3a4347]">-2</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
            <div className="lg:col-span-2">
              <h3 className="text-[clamp(2rem,2vw,4.2rem)] text-green-dark-primary font-medium leading-[1.2]">
                Ventures We've Built and Backed
              </h3>

              <p className="mt-6 text-[#3a4347] leading-8">
                Equistone builds and supports scalable ICT ventures through a
                unique combination of strategic investment, operational
                execution, and in-house technology development.
              </p>

              {/* Venture Card */}
              {/* Header */}
              <div className="border-b border-gray-300 px-6 py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-2xl font-semibold text-green-dark-primary">
                      Clinex
                    </h4>

                    <span className="text-xs px-3 py-1 bg-primary-dark text-white uppercase tracking-wide">
                      Flagship Venture · Live
                    </span>
                  </div>

                  <p className="mt-3 text-[#3a4347] text-lg">
                    Malaysia's Leading Cloud-Based Clinic Management System
                  </p>
                </div>

                <div className="text-sm text-[#3a4347]">
                  Healthcare Technology
                </div>
              </div>

              {/* Body */}
              <div className="p-6 lg:p-8">
                <p className="text-[#3a4347] leading-8">
                  Built entirely in-house by Equistone from 2024, Clinex is a
                  fully integrated clinic management platform for Malaysian GP
                  clinics and multi-branch healthcare groups. Covering smart
                  queue management, electronic medical records (EMR),
                  appointment scheduling, inventory management, real-time
                  analytics, and LHDN e-invoicing — Clinex is trusted by 50+
                  clinics with 1,500+ daily patient visits across Malaysia.
                </p>

                <p className="mt-6 text-[#3a4347] leading-8">
                  Klinik Utama Sdn Bhd is one of Equistone's flagship healthcare
                  operator clients running on the Clinex platform.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-10">
                  {[
                    "Healthcare Technology",
                    "Cloud SaaS",
                    "EMR & Queue Management",
                    "LHDN e-Invoice",
                    "GP Clinics",
                  ].map((tag, index) => (
                    <div
                      key={index}
                      className="text-sm px-4 py-2 border border-gray-300 text-[#3a4347]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="grid grid-cols-3 lg:items-center lg:justify-between gap-6 mt-10 pt-8 border-t border-gray-300">
                  <div className="col-span-2">
                    <h5 className="font-semibold text-green-dark-primary">
                      About This Venture
                    </h5>

                    <p className="mt-2 text-sm text-[#3a4347] leading-7">
                      Clinex represents Equistone's long-term commitment to
                      building scalable healthcare infrastructure for Malaysia's
                      digital future.
                    </p>
                  </div>
                  <div className=" col-span-1 flex items-center justify-center">
                    <div className="text-sm px-4 py-2 bg-primary-dark font-semibold text-white w-fit">
                      <Link href="/ventures/clinex">Visit Clinex ↗</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-8">
              {/* Right Column */}
              <div className="flex flex-col gap-8">
                <div className="border-l border-gray-300 pl-6">
                  <div className="text-4xl font-semibold text-green-dark-primary">
                    50+
                  </div>

                  <p className="mt-3 text-[#3a4347] leading-7">
                    Active clinics
                  </p>
                </div>

                <div className="border-l border-gray-300 pl-6">
                  <div className="text-4xl font-semibold text-green-dark-primary">
                    350k+
                  </div>

                  <p className="mt-3 text-[#3a4347] leading-7">
                    Patient records
                  </p>
                </div>

                <div className="border-l border-gray-300 pl-6">
                  <div className="text-4xl font-semibold text-green-dark-primary">
                    1,500+
                  </div>

                  <p className="mt-3 text-[#3a4347] leading-7">
                    Daily patient visits
                  </p>
                </div>

                <div className="border-l border-gray-300 pl-6">
                  <div className="text-4xl font-semibold text-green-dark-primary">
                    2024
                  </div>

                  <p className="mt-3 text-[#3a4347] leading-7">
                    Development began
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:col-span-2">
              <div className="border border-gray-300 bg-white px-12 py-8">
                <div className="flex flex-col gap-8">
                  <div className="border-l border-gray-300 pl-6">
                    <h4 className="text-2xl font-semibold text-green-dark-primary">
                      Next Venture — Actively Evaluating
                    </h4>

                    <p className="mt-3 text-[#3a4347] leading-7">
                      Equistone continuously evaluates high-potential ICT
                      opportunities. Since incorporation in 2019, the company
                      has been actively identifying businesses for strategic
                      investment. Our next venture follows the same model:
                      identify a structural market gap, build or co-build the
                      solution, deploy with partners, then scale across ASEAN.
                    </p>
                  </div>

                  {/* Focus Areas */}
                  <div className="border-l border-gray-300 pl-6">
                    <h4 className="text-lg font-semibold text-green-dark-primary">
                      Focus Areas
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {[
                        "Financial Technology",
                        "Enterprise ICT",
                        "Digital Infrastructure",
                        "Sustainable Technology",
                        "Healthcare Technology",
                      ].map((item, index) => (
                        <span
                          key={index}
                          className="text-sm px-4 py-2 border border-gray-300 text-[#3a4347]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-4">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary-dark px-4 py-2 w-fit">
                      Submit a Venture <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="flex z-2 relative w-full flex-col px-[clamp(2rem,3vw,4rem)] font-sans bg-primary-dark py-20 text-white">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between text-center ">
            <h1 className="text-lg font-normal leading-[1.2] tracking-tight text-white flex gap-4">
              <span>•</span>
              Investment Philosophy
            </h1>
            <p className="text-lg lg:text-2xl text-white">-3</p>
          </div>
          <h3 className="text-[clamp(2rem,2vw,4.2rem)] text-white font-medium leading-[1.2]">
            Four Pillars of Value Creation
          </h3>
          <p className="mt-6 text-white/70 leading-8 lg:w-[70%]">
            Equistone doesn't fund and forget. Every investment is backed by
            operational expertise, strategic advisory, and the willingness to
            build alongside our partners.
          </p>
          {/* Pillars - 4 GRID */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-l border-white/20 pl-6">
              <div className="text-sm text-white/60 font-semibold">01</div>
              <h4 className="mt-2 text-lg font-semibold text-white">
                Strategic Asset Transformation
              </h4>
              <p className="mt-3 text-sm text-white/70 leading-7">
                We target businesses and sectors where disciplined application
                of technology and capital structure improvement unlocks
                disproportionate value.
              </p>
            </div>

            <div className="border-l border-white/20 pl-6">
              <div className="text-sm text-white/60 font-semibold">02</div>
              <h4 className="mt-2 text-lg font-semibold text-white">
                Venture Building Over Passive Holding
              </h4>
              <p className="mt-3 text-sm text-white/70 leading-7">
                We deploy operational capability alongside capital. Clinex
                proves this model through in-house design, build, and deployment
                since 2024.
              </p>
            </div>

            <div className="border-l border-white/20 pl-6">
              <div className="text-sm text-white/60 font-semibold">03</div>
              <h4 className="mt-2 text-lg font-semibold text-white">
                ICT-Enabled Sector Focus
              </h4>
              <p className="mt-3 text-sm text-white/70 leading-7">
                Focus on healthcare, fintech, communications, and enterprise
                digitisation where technology creates defensible long-term
                advantage.
              </p>
            </div>

            <div className="border-l border-white/20 pl-6">
              <div className="text-sm text-white/60 font-semibold">04</div>
              <h4 className="mt-2 text-lg font-semibold text-white">
                Sustainable Development Orientation
              </h4>
              <p className="mt-3 text-sm text-white/70 leading-7">
                Aligning every venture with Malaysia’s NIMP 2030, Digital
                Economy Blueprint, and ESG principles for long-term value
                creation.
              </p>
            </div>
          </div>
          {/* CTA */}
          <div className="mt-10 border-t border-white/20 pt-6">
            <button className="text-sm px-5 py-2 bg-white text-green-dark-primary font-semibold">
              Explore Our Investment Strategy →
            </button>
          </div>
        </div>
      </main>
      <main className="flex z-2 relative w-full flex-col px-[clamp(2rem,3vw,4rem)] font-sans bg-primary-dark">
        <div className="container mx-auto border-t border-gray-600 py-20">
          {/* Header */}
          {/* <div className="border-b border-white/20 pb-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-white">
              Business Sectors
            </h3>

            <p className="mt-3 text-sm uppercase tracking-widest text-white/60">
              ICT Sectors We Operate In
            </p>
          </div> */}
          <div className="flex flex-row justify-between text-center ">
            <h1 className="text-lg font-normal leading-[1.2] tracking-tight text-white flex gap-4">
              <span>•</span>
              Business Sectors
            </h1>
            <p className="text-lg lg:text-2xl text-white">-4</p>
          </div>
          <h3 className="text-[clamp(2rem,2vw,4.2rem)] text-white font-medium leading-[1.2]">
            ICT Sectors We Operate In
          </h3>
          {/* Intro */}
          <p className="mt-6 text-white/70 leading-8 lg:w-[75%]">
            Equistone focuses on industries where digital technology creates
            durable structural advantages — fully aligned with Malaysia's
            national digital transformation priorities.
          </p>

          {/* 3 GRID */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="border-l border-white/20 pl-6">
              <h4 className="text-lg font-semibold text-white">
                Healthcare Technology
              </h4>

              <p className="mt-3 text-sm text-white/70 leading-7">
                Digitising Malaysia's private healthcare sector — from clinic
                management systems to patient data platforms. Our flagship
                venture Clinex is deployed and actively growing in this sector,
                with Klinik Utama as a key operator client.
              </p>

              <button className="mt-6 text-sm font-semibold text-white underline">
                Explore sector →
              </button>
            </div>

            {/* Fintech */}
            <div className="border-l border-white/20 pl-6">
              <h4 className="text-lg font-semibold text-white">
                Financial Technology
              </h4>

              <p className="mt-3 text-sm text-white/70 leading-7">
                Strategic investment in payment technology, digital financial
                infrastructure, and financial services digitisation. Strategic
                partner: Payhalal Sdn Bhd, operating in the Malaysian Islamic
                fintech ecosystem.
              </p>

              <button className="mt-6 text-sm font-semibold text-white underline">
                Explore sector →
              </button>
            </div>

            {/* Enterprise ICT */}
            <div className="border-l border-white/20 pl-6">
              <h4 className="text-lg font-semibold text-white">
                Enterprise ICT & Digital Transformation
              </h4>

              <p className="mt-3 text-sm text-white/70 leading-7">
                Advisory, investment, and platform development for Malaysian
                enterprises undergoing digital transformation — modernising
                operations and unlocking technology-driven growth. Supports
                IntelliLabs AI and JomChat partnerships.
              </p>

              <button className="mt-6 text-sm font-semibold text-white underline">
                Explore sector →
              </button>
            </div>
          </div>
        </div>
      </main>
      <main className="flex z-2 relative w-full bg-primary-light px-[clamp(2rem,3vw,4rem)] py-20 font-sans text-green-dark-primary">
        <div className="container mx-auto">
          {/* Header */}
          {/* <div className="border-b border-gray-300 pb-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-green-dark-primary">
              Our Journey
            </h3>

            <p className="mt-3 text-sm uppercase tracking-widest text-[#3a4347]">
              Key Milestones
            </p>
          </div> */}
          <div className="flex flex-row justify-between text-center ">
            <h1 className="text-lg font-normal leading-[1.2] tracking-tighttext-green-dark-primary flex gap-4">
              <span>•</span>
              Our Journey
            </h1>
            <p className="text-lg lg:text-2xl text-green-dark-primary">-5</p>
          </div>
          <h3 className="text-[clamp(2rem,2vw,4.2rem)] text-green-dark-primary font-medium leading-[1.2]">
            Key Milestones
          </h3>
          {/* Timeline */}
          <div className="mt-12 overflow-x-auto scrollbar-hide">
            <JourneyTimeline />
          </div>
        </div>
      </main>
      <main className="flex z-2 relative w-full flex-col px-[clamp(2rem,3vw,4rem)] font-sans bg-primary-light text-green-dark-primary">
        <div className="container mx-auto border-t border-gray-200 py-20">
          {/* Header */}
          {/* <div className="border-b border-gray-300 pb-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-green-dark-primary">
              Partners & Clients
            </h3>

            <p className="mt-3 text-sm uppercase tracking-widest text-[#3a4347]">
              Building an Ecosystem of Value
            </p>
          </div> */}
          <div className="flex flex-row justify-between text-center ">
            <h1 className="text-lg font-normal leading-[1.2] tracking-tighttext-green-dark-primary flex gap-4">
              <span>•</span>
              Partners & Clients
            </h1>
            <p className="text-lg lg:text-2xl text-green-dark-primary">-5</p>
          </div>
          <h3 className="text-[clamp(2rem,2vw,4.2rem)] text-green-dark-primary font-medium leading-[1.2]">
            Building an Ecosystem of Value
          </h3>
          {/* Intro */}
          <p className="mt-6 text-[#3a4347] leading-8 lg:w-[75%]">
            Equistone works with strategic partners who bring domain expertise
            and market access — and deploys technology ventures like Clinex to
            operators who use them to transform their businesses.
          </p>

          {/* 4 GRID */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Payhalal */}
            <div className="border-l border-gray-300 pl-6">
              <h4 className="text-lg font-semibold text-green-dark-primary">
                Payhalal Sdn Bhd
              </h4>

              <p className="mt-2 text-sm text-[#3a4347]">
                Financial Technology
              </p>

              <span className="inline-block mt-4 text-xs px-3 py-1 border border-gray-300 text-[#3a4347]">
                Strategic Partner
              </span>
            </div>

            {/* IntelliLabs */}
            <div className="border-l border-gray-300 pl-6">
              <h4 className="text-lg font-semibold text-green-dark-primary">
                IntelliLabs AI
              </h4>

              <p className="mt-2 text-sm text-[#3a4347]">
                Artificial Intelligence
              </p>

              <span className="inline-block mt-4 text-xs px-3 py-1 border border-gray-300 text-[#3a4347]">
                Strategic Partner
              </span>
            </div>

            {/* JomChat */}
            <div className="border-l border-gray-300 pl-6">
              <h4 className="text-lg font-semibold text-green-dark-primary">
                JomChat
              </h4>

              <p className="mt-2 text-sm text-[#3a4347]">
                Communications Technology
              </p>

              <span className="inline-block mt-4 text-xs px-3 py-1 border border-gray-300 text-[#3a4347]">
                Strategic Partner
              </span>
            </div>

            {/* Klinik Utama */}
            <div className="border-l border-gray-300 pl-6">
              <h4 className="text-lg font-semibold text-green-dark-primary">
                Klinik Utama Sdn Bhd
              </h4>

              <p className="mt-2 text-sm text-[#3a4347]">
                Multi-Branch GP Clinics · Malaysia
              </p>

              <span className="inline-block mt-4 text-xs px-3 py-1 border border-gray-300 text-[#3a4347]">
                Clinex Healthcare Client
              </span>
            </div>
          </div>
        </div>
      </main>
      <main className="flex z-2 relative w-full bg-primary-light px-[clamp(2rem,3vw,4rem)] font-sans text-green-dark-primary">
        <div className="container mx-auto border-t border-gray-200 py-20">
          {/* Header */}
          {/* <div className="border-b border-gray-300 pb-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-green-dark-primary">
              Thought Leadership
            </h3>

            <p className="mt-3 text-sm uppercase tracking-widest text-[#3a4347]">
              Latest Insights
            </p>

            <div className="mt-4 text-sm text-green-dark-primary font-semibold underline cursor-pointer w-fit">
              View All Insights →
            </div>
          </div> */}
          <div className="flex flex-row justify-between text-center ">
            <h1 className="text-lg font-normal leading-[1.2] tracking-tighttext-green-dark-primary flex gap-4">
              <span>•</span>
              Thought Leadership
            </h1>
            <p className="text-lg lg:text-2xl text-green-dark-primary">-6</p>
          </div>
          <h3 className="text-[clamp(2rem,2vw,4.2rem)] text-green-dark-primary font-medium leading-[1.2]">
            Latest Insights
          </h3>{" "}
          <div className="mt-4 text-sm text-green-dark-primary font-semibold underline cursor-pointer w-fit">
            View All Insights →
          </div>
          {/* GRID */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="border-l border-gray-300 pl-6">
              <p className="text-sm text-[#3a4347]">Healthcare Technology</p>

              <h4 className="mt-3 text-lg font-semibold text-green-dark-primary leading-snug">
                How Clinex Was Built: From a Clinic Floor Problem to 50 Deployed
                Clinics
              </h4>

              <p className="mt-4 text-sm text-[#3a4347] leading-7">
                The journey from identifying a structural gap in Malaysian
                healthcare IT in 2024 to a fully deployed system trusted by 50+
                GP clinics — and what we learned about venture building along
                the way.
              </p>

              <div className="mt-6 text-sm text-[#3a4347] flex gap-3">
                <span>8 min</span>
                <span>·</span>
                <span>June 2026</span>
              </div>

              <div className="mt-4 text-sm font-semibold text-green-dark-primary underline cursor-pointer">
                Read →
              </div>
            </div>

            {/* Article 2 */}
            <div className="border-l border-gray-300 pl-6">
              <p className="text-sm text-[#3a4347]">Investment & Strategy</p>

              <h4 className="mt-3 text-lg font-semibold text-green-dark-primary leading-snug">
                Venture Building vs Venture Capital: Why Equistone Chose to
                Build First
              </h4>

              <p className="mt-4 text-sm text-[#3a4347] leading-7">
                Most holding companies stop at capital allocation. Equistone's
                model — incorporating in 2019 and actively building since —
                deploys operational expertise alongside capital.
              </p>

              <div className="mt-6 text-sm text-[#3a4347] flex gap-3">
                <span>6 min</span>
                <span>·</span>
                <span>May 2026</span>
              </div>

              <div className="mt-4 text-sm font-semibold text-green-dark-primary underline cursor-pointer">
                Read →
              </div>
            </div>

            {/* Article 3 */}
            <div className="border-l border-gray-300 pl-6">
              <p className="text-sm text-[#3a4347]">Digital Economy</p>

              <h4 className="mt-3 text-lg font-semibold text-green-dark-primary leading-snug">
                Malaysia's NIMP 2030: ICT Investment Opportunities for Private
                Companies
              </h4>

              <p className="mt-4 text-sm text-[#3a4347] leading-7">
                Malaysia's National Investment Master Plan identifies the ICT
                sector as a primary driver of economic growth. What this means
                for private investment holding companies in 2026 and beyond.
              </p>

              <div className="mt-6 text-sm text-[#3a4347] flex gap-3">
                <span>5 min</span>
                <span>·</span>
                <span>April 2026</span>
              </div>

              <div className="mt-4 text-sm font-semibold text-green-dark-primary underline cursor-pointer">
                Read →
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="flex z-2 relative w-full bg-primary-light px-[clamp(2rem,3vw,4rem)] py-20 font-sans text-green-dark-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
            {/* Investors */}
            <div className="border border-gray-300 bg-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-green-dark-primary">
                  For Investors & Co-Investors
                </h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-[#3a4347]">
                  Invest Alongside Equistone
                </p>

                <p className="mt-6 text-[#3a4347] leading-7">
                  We are building Malaysia's next generation of ICT ventures. If
                  you are a strategic investor or co-investor seeking ICT sector
                  exposure backed by a team that builds operationally — let's
                  talk.
                </p>

                <ul className="mt-6 space-y-2 text-sm text-[#3a4347]">
                  <li>• ICT sector focus — healthcare, fintech, enterprise</li>
                  <li>
                    • Venture-building model — operational expertise included
                  </li>
                  <li>
                    • Incorporated 2019 · KL-based · Active ASEAN expansion
                  </li>
                </ul>
              </div>

              <button className="mt-8 w-fit px-5 py-2 bg-black text-white text-sm font-semibold">
                Partner With Us →
              </button>
            </div>

            {/* Founders */}
            <div className="border border-gray-300 bg-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-green-dark-primary">
                  For Founders & Operators
                </h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-[#3a4347]">
                  Build Your Venture With Equistone
                </p>

                <p className="mt-6 text-[#3a4347] leading-7">
                  Have a high-potential ICT venture that needs smart capital,
                  strategic advisory, or technology execution support? Equistone
                  brings more than funding — we bring the team that built Clinex
                  from the ground up since 2024.
                </p>

                <ul className="mt-6 space-y-2 text-sm text-[#3a4347]">
                  <li>• Corporate finance and capital structuring expertise</li>
                  <li>• In-house technology development capability</li>
                  <li>
                    • Strategic partner network — fintech, AI, communications
                  </li>
                </ul>
              </div>

              <button className="mt-8 w-fit px-5 py-2 bg-black text-white text-sm font-semibold">
                Submit Your Venture →
              </button>
            </div>
          </div>{" "}
        </div>{" "}
      </main>
      <FooterLight />
    </div>
  );
}

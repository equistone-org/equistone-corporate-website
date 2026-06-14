"use client";
import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Sidebar from "@/components/Sidebar";

import HeaderLight from "@/components/HeaderLight";
import FooterLight from "@/components/FooterLight";
import JourneyTimeline from "@/components/JourneyTimeline";
import PartnerSlider from "@/components/PartnerSlider";
import LineAnimatedLink from "@/components/LineAnimatedLink";

import useStatsBarAnimation from "@/hooks/useStatsBarAnimation";
import useOrbGradientAnimation from "@/hooks/useOrbGradientAnimation";

export default function Home() {
  ///nanti asing/////
  const underlineRef = useRef(null);
  const [open, setOpen] = useState(false);

  const onEnter = () => {
    gsap.to(underlineRef.current, {
      scaleX: 1,
      transformOrigin: "left",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    gsap.to(underlineRef.current, {
      scaleX: 0,
      transformOrigin: "right",
      duration: 0.3,
      ease: "power2.in",
    });
  };
  ///nanti asing/////

  const orbGradient1 = useRef(null);
  const orbGradient2 = useRef(null);
  const orbGradient3 = useRef(null);
  const barRef = useRef(null);

  useStatsBarAnimation(barRef);
  useOrbGradientAnimation(orbGradient1, orbGradient2, orbGradient3);

  return (
    <div className="flex-1 flex-col items-start justify-center bg-light-primary font-sans">
      <Sidebar open={open} setOpen={setOpen} theme="light" />
      <HeaderLight withBorder onMenu={() => setOpen(true)} />{" "}
      <main className="relative h-[100dvh] lg:h-[calc(100dvh-80px)] w-full overflow-hidden font-sans z-[99]">
        {/* BACKGROUND ORBS */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-light-secondary">
          <div
            ref={orbGradient1}
            className="absolute w-[clamp(280px,40vw,600px)] h-[clamp(280px,40vw,600px)] rounded-full blur-[20px] opacity-90"
            style={{
              background:
                "radial-gradient(circle, #e7c8a0 0%, transparent 70%)",
              top: "15%",
              left: "5%",
            }}
          />

          <div
            ref={orbGradient2}
            className="absolute w-[clamp(260px,35vw,500px)] h-[clamp(400px,55vw,800px)] rounded-full blur-[40px] opacity-90"
            style={{
              background:
                "radial-gradient(circle, #deb68a 0%, transparent 70%)",
              top: "55%",
              left: "45%",
            }}
          />

          <div
            ref={orbGradient3}
            className="absolute w-[clamp(300px,50vw,800px)] h-[clamp(500px,70vw,1200px)] rounded-full blur-[60px] opacity-90"
            style={{
              background:
                "radial-gradient(circle, #d4a373 0%, transparent 70%)",
              top: "10%",
              left: "65%",
            }}
          />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-20 flex flex-col h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full flex-1 container mx-auto items-center">
            {/* LEFT */}
            <div className="col-span-2 flex items-center py-[clamp(2rem,5vw,4rem)] px-[clamp(1.5rem,3vw,4rem)]">
              <div className="w-full px-2 sm:px-6 lg:px-0">
                {/* TAGS */}
                <div className="mb-[clamp(1rem,2vw,1.5rem)] flex flex-wrap gap-3">
                  <div className="text-xs lg:text-sm px-3 lg:px-4 py-1 border border-black font-semibold text-dark-primary uppercase rounded-full">
                    ICT Investment Holding
                  </div>
                  <div className="text-xs lg:text-sm px-3 lg:px-4 py-1 border border-black font-semibold text-dark-primary uppercase rounded-full">
                    Integra Tower · Kuala Lumpur
                  </div>
                </div>

                {/* TITLE */}
                <h1 className="mb-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-[1.05] text-[clamp(2.2rem,5vw,6rem)] lg:text-[clamp(3.5rem,4vw,6rem)] text-dark-primary">
                  We Build What <br />
                  <span className="text-dark-orange">Others Only Fund.</span>
                </h1>

                {/* PARAGRAPH */}
                <p className="mb-[clamp(2rem,4vw,3rem)] font-medium text-dark-primary text-[clamp(0.95rem,1.2vw,1.1rem)] leading-[1.6] lg:w-[90%]">
                  Equistone Sdn Bhd is Malaysia's purpose-driven investment
                  holding and venture-building company — combining strategic
                  capital, corporate advisory, and in-house technology execution
                  to create scalable ICT ventures.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  {/* <LineAnimatedLink href="/contact">
                    Explore Our Ventures
                  </LineAnimatedLink> */}
                  <LineAnimatedLink href="/contact" arrowVariant="light">
                    Explore Our Ventures
                  </LineAnimatedLink>
                  <LineAnimatedLink href="/contact" arrowVariant="light">
                    Partner With Us
                  </LineAnimatedLink>
                </div>

                {/* STATS */}
                <div className="mt-[clamp(2rem,4vw,3rem)] grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-300">
                  <div className="p-[clamp(0.75rem,2vw,1.25rem)]">
                    <div className="text-[clamp(1.2rem,2vw,1.8rem)] font-bold text-dark-primary">
                      2019
                    </div>
                    <div className="text-[clamp(0.7rem,1vw,0.85rem)] text-black/80">
                      Year incorporated
                    </div>
                  </div>
                  <div className="p-[clamp(0.75rem,2vw,1.25rem)]">
                    <div className="text-[clamp(1.2rem,2vw,1.8rem)] font-bold text-dark-primary">
                      50+
                    </div>
                    <div className="text-[clamp(0.7rem,1vw,0.85rem)] text-black/80">
                      Live clinics
                    </div>
                  </div>

                  <div className="p-[clamp(0.75rem,2vw,1.25rem)]">
                    <div className="text-[clamp(1.2rem,2vw,1.8rem)] font-bold text-dark-primary">
                      350k+
                    </div>
                    <div className="text-[clamp(0.7rem,1vw,0.85rem)] text-black/80">
                      Patient records
                    </div>
                  </div>

                  <div className="p-[clamp(0.75rem,2vw,1.25rem)] border-r sm:border-none border-gray-300">
                    <div className="text-[clamp(1.2rem,2vw,1.8rem)] font-bold text-dark-primary">
                      ICT
                    </div>
                    <div className="text-[clamp(0.7rem,1vw,0.85rem)] text-black/80">
                      Core sector
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:flex justify-end px-[clamp(1.5rem,3vw,4rem)]">
              <Image
                src="/shared/equistone-halflogo-logo.svg"
                alt="Equistone Logo"
                width={162}
                height={162}
                className="h-[clamp(18rem,40vh,34rem)] w-auto"
              />
            </div>
          </div>
        </div>
      </main>
      <main className="flex z-2 relative w-full flex-col font-sans bg-light-primary ">
        <PartnerSlider />
      </main>
      <main className="relative z-2 flex w-full flex-col bg-light-primary font-sans px-[clamp(1rem,3vw,4rem)] py-[clamp(4rem,8vw,8rem)]">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between text-center">
            <h1 className="flex gap-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.875rem,1.2vw,1.125rem)] font-normal leading-[1.2] tracking-tight text-dark-primary">
              <span>•</span>
              About Equistone
            </h1>

            <p className="text-[clamp(1rem,2vw,1.5rem)] text-[#3a4347]">-1</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(2rem,2vw,5rem)] mt-[clamp(0.2rem,2vw,0.4rem)]">
            {/* LEFT */}
            <div className="lg:col-span-2">
              <h3 className="text-[clamp(2rem,5vw,4rem)] text-dark-primary font-medium leading-[1.1]">
                Capital, Strategy, and Technology — Under One Roof
              </h3>

              <p className="mt-[clamp(1.5rem,3vw,2rem)] text-[clamp(0.95rem,1.1vw,1.125rem)] text-[#3a4347] leading-[1.8]">
                Equistone Sdn Bhd is a Malaysian investment holding and digital
                solutions company that builds long-term value through a model no
                traditional holding company uses — we invest, advise, and build
                simultaneously. Incorporated in 2019 and headquartered in Kuala
                Lumpur, Equistone is focused on developing scalable ICT ventures
                across Malaysia and the ASEAN region.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(1.5rem,2vw,2rem)] mt-[clamp(2rem,4vw,4rem)]">
                {/* CARD 1 */}
                <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                  <div className="flex space-x-[clamp(0.75rem,1vw,1rem)]">
                    <div className="bg-dark-secondary p-[clamp(0.75rem,1vw,1rem)]">
                      <Image
                        src="/icons/equistone-strategic-icon.svg"
                        alt="strategic investment"
                        width={22}
                        height={22}
                        className="h-[clamp(1rem,40vh,2rem)] w-auto"
                      />
                    </div>

                    <h4 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-dark-primary">
                      Strategic Investment
                    </h4>
                  </div>

                  <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-black/60 leading-[1.8]">
                    We identify high-potential opportunities in ICT sectors and
                    provide smart capital with hands-on strategic guidance — not
                    just a cheque.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                  <div className="flex space-x-[clamp(0.75rem,1vw,1rem)]">
                    <div className="bg-dark-secondary p-[clamp(0.75rem,1vw,1rem)]">
                      <Image
                        src="/icons/equistone-venture-icon.svg"
                        alt="venture building"
                        width={22}
                        height={22}
                        className="h-[clamp(1rem,40vh,2rem)] w-auto"
                      />
                    </div>

                    <h4 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-dark-primary">
                      Venture Building
                    </h4>
                  </div>

                  <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-black/60 leading-[1.8]">
                    We don't just fund — we build. Clinex is the proof:
                    designed, developed, and deployed in-house to 50+ Malaysian
                    clinics since 2024.
                  </p>
                </div>

                {/* CARD 3 */}
                <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                  <div className="flex space-x-[clamp(0.75rem,1vw,1rem)]">
                    <div className="bg-dark-secondary p-[clamp(0.75rem,1vw,1rem)]">
                      <Image
                        src="/icons/equistone-sustainable-icon.svg"
                        alt="sustainable value creation"
                        width={22}
                        height={22}
                        className="h-[clamp(1rem,40vh,2rem)] w-auto"
                      />
                    </div>

                    <h4 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-dark-primary">
                      Sustainable Value Creation
                    </h4>
                  </div>

                  <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-black/60 leading-[1.8]">
                    We specialise in strategic asset transformation and
                    sustainable development initiatives — aligning every venture
                    with Malaysia's NIMP 2030 and digital economy agenda.
                  </p>
                </div>
              </div>

              <div className="mt-[clamp(2rem,3vw,3rem)] w-fit">
                {/* <LineAnimatedLink
                  href="https://clinexmy.com/"
                  variant="green"
                  img
                  for
                  arrow
                >
                  Read more
                </LineAnimatedLink> */}
                <LineAnimatedLink
                  href="/contact"
                  arrowVariant="light"
                  variant="green"
                >
                  Read more
                </LineAnimatedLink>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-[clamp(1.5rem,2vw,2rem)]">
              <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                <div className="text-[clamp(2rem,4vw,3rem)] font-black text-dark-orange">
                  2019
                </div>

                <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.9rem,1vw,1rem)] text-black/60 leading-[1.8]">
                  Year incorporated — Kuala Lumpur, Malaysia
                </p>
              </div>

              <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                <div className="text-[clamp(2rem,4vw,3rem)] font-black text-dark-orange">
                  50+
                </div>

                <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.9rem,1vw,1rem)] text-black/60 leading-[1.8]">
                  Clinics live on Clinex as of 2026
                </p>
              </div>

              <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                <div className="text-[clamp(2rem,4vw,3rem)] font-black text-dark-orange">
                  ICT
                </div>

                <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.9rem,1vw,1rem)] text-black/60 leading-[1.8]">
                  Primary focus sector — Malaysia & ASEAN
                </p>
              </div>

              <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                <div className="text-[clamp(2rem,4vw,3rem)] font-black text-dark-orange">
                  2024
                </div>

                <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.9rem,1vw,1rem)] text-black/60 leading-[1.8]">
                  Clinex development launched in-house
                </p>
              </div>

              <div className="border-l border-black pl-[clamp(1rem,1.5vw,1.5rem)] mt-[clamp(1.5rem,2vw,2rem)]">
                <p className="italic text-[#1d2b2f] leading-[1.9] text-[clamp(0.95rem,1.1vw,1.125rem)]">
                  "Equistone's purpose is to become one of Malaysia's leading
                  platforms for purpose-driven investments, strategic advisory,
                  and technology-backed value creation — supporting partners,
                  clients, and ecosystems throughout their growth journeys."
                </p>

                <p className="mt-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.75rem,0.9vw,0.875rem)] font-semibold text-[#3a4347]">
                  Equistone Sdn Bhd — Corporate Mission Statement
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="relative z-2 flex w-full flex-col bg-light-primary font-sans px-[clamp(1rem,3vw,4rem)]">
        {" "}
        <div className="container mx-auto max-w-[1600px] py-[clamp(4rem,8vw,8rem)] border-t border-black/80">
          {" "}
          <div className="flex flex-row justify-between text-center">
            <h1 className="text-lg font-normal leading-[1.2] tracking-tight text-[#00330f] flex gap-4">
              <span>•</span>
              Technology Ventures
            </h1>
            <p className="text-lg lg:text-2xl text-[#3a4347]">-2</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-[clamp(0.2rem,2vw,0.4rem)]">
            <div className="lg:col-span-2">
              <h3 className="text-[clamp(2rem,5vw,4rem)] text-[#3a4347] text-dark-primary font-medium leading-[1.2]">
                Ventures We've Built and Backed
              </h3>
              <p className="mt-[clamp(1.5rem,3vw,2rem)] text-[clamp(0.95rem,1.1vw,1.125rem)] text-[#3a4347] leading-[1.8]">
                Equistone builds and supports scalable ICT ventures through a
                unique combination of strategic investment, operational
                execution, and in-house technology development.
              </p>
              <div className="border-b border-gray-300 px-[clamp(1rem,2vw,1.5rem)] py-[clamp(1rem,2vw,1.5rem)] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-2xl font-semibold text-dark-primary">
                      Clinex
                    </h4>
                    <span className="ml-2 text-xs px-3 py-1 bg-dark-primary text-light-primary uppercase tracking-wide live-pulse rounded-full">
                      Flagship Venture · Live
                    </span>
                  </div>
                  <div className="col-span-1 lg:block flex items-start py-4 mt-3">
                    <Image
                      src="/shared/clinex-dark-logo.svg"
                      alt="Clinex Logo"
                      width={162}
                      height={162}
                      className="h-[clamp(2.5rem,4vw,3.5rem)] w-auto"
                    />
                  </div>
                  <p className="text-[#3a4347] text-lg">
                    Malaysia's Leading Cloud-Based Clinic Management System
                  </p>
                </div>
                <div className="text-sm text-[#3a4347] ">
                  Healthcare Technology
                </div>
              </div>
              <div className="p-[clamp(1.5rem,3vw,2.5rem)]">
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
                      className="text-[clamp(0.75rem,1vw,0.875rem)] px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.5rem,0.8vw,0.75rem)] border border-gray-300 text-[#3a4347] rounded-full"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 lg:items-center lg:justify-between gap-6 mt-10 pt-8 border-t border-gray-300">
                  <div className="col-span-3">
                    <h5 className="font-semibold text-dark-primary">
                      About This Venture
                    </h5>
                    <p className="mt-2 text-sm text-[#3a4347] leading-7">
                      Clinex represents Equistone's long-term commitment to
                      building scalable healthcare infrastructure for Malaysia's
                      digital future.
                    </p>
                    <div className="flex items-start justify-start mt-4">
                      <div className="mt-8 w-fit">
                        <LineAnimatedLink
                          href="https://clinexmy.com/"
                          arrowVariant="light"
                          variant="green"
                        >
                          Visit Clinex
                        </LineAnimatedLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={barRef}
              className="md:sticky md:top-0  z-20 bg-light-primary"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8">
                  <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                    <div className="text-[clamp(2rem,4vw,3rem)] font-black text-dark-orange">
                      50+
                    </div>
                    <p className="mt-3 text-black/60 leading-7">
                      Active clinics
                    </p>
                  </div>
                  <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                    <div className="text-[clamp(2rem,4vw,3rem)] font-black text-dark-orange">
                      350k+
                    </div>
                    <p className="mt-3 text-black/60 leading-7">
                      Patient records
                    </p>
                  </div>
                  <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                    <div className="text-[clamp(2rem,4vw,3rem)] font-black text-dark-orange">
                      1,500+
                    </div>
                    <p className="mt-3 text-black/60 leading-7">
                      Daily patient visits
                    </p>
                  </div>
                  <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                    <div className="text-[clamp(2rem,4vw,3rem)] font-black text-dark-orange">
                      2024
                    </div>
                    <p className="mt-3 text-black/60 leading-7">
                      Development began
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:col-span-2">
              <div className="border border-gray-300 bg-white px-[clamp(1.5rem,4vw,3rem)] py-[clamp(1.5rem,3vw,2.5rem)]">
                <div className="flex flex-col gap-8">
                  <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                    <h4 className="text-[clamp(1.5rem,2vw,2rem)] font-semibold text-dark-primary">
                      Next Venture — Actively Evaluating
                    </h4>
                    <p className="mt-3 text-black/60 leading-7">
                      Equistone continuously evaluates high-potential ICT
                      opportunities. Since incorporation in 2019, the company
                      has been actively identifying businesses for strategic
                      investment. Our next venture follows the same model:
                      identify a structural market gap, build or co-build the
                      solution, deploy with partners, then scale across ASEAN.
                    </p>
                  </div>
                  <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
                    <h4 className="text-lg font-semibold text-dark-primary">
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
                          className="text-sm px-4 py-2 border border-gray-300 text-[#3a4347] rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mt-8 w-fit">
                      <LineAnimatedLink
                        href="https://clinexmy.com/"
                        arrowVariant="light"
                        variant="green"
                      >
                        Submit a Venture
                      </LineAnimatedLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="relative z-2 flex w-full flex-col bg-dark-primary font-sans px-[clamp(1rem,3vw,4rem)] py-[clamp(4rem,8vw,8rem)] text-light-primary">
        <div className="container mx-auto max-w-[1600px]">
          {/* HEADER */}
          <div className="flex flex-row justify-between text-center">
            <h1 className="flex gap-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.875rem,1.2vw,1.125rem)] font-normal leading-[1.2] tracking-tight text-light-primary">
              <span>•</span>
              Investment Philosophy
            </h1>

            <p className="text-[clamp(1rem,2vw,1.5rem)] text-light-primary">
              -3
            </p>
          </div>

          {/* TITLE */}
          <h3 className="text-[clamp(2.4rem,5vw,5.2rem)] mt-[clamp(0.2rem,2vw,0.4rem)] text-light-primary font-medium leading-[1.1]">
            Four Pillars of Value Creation
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-[clamp(1.5rem,3vw,2rem)] text-[clamp(0.95rem,1.1vw,1.125rem)] text-white/60 leading-[1.8] lg:w-[70%]">
            Equistone doesn't fund and forget. Every investment is backed by
            operational expertise, strategic advisory, and the willingness to
            build alongside our partners.
          </p>

          {/* GRID */}
          <div className="mt-[clamp(2rem,4vw,4rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(1.5rem,2vw,2rem)]">
            {/* CARD 1 */}
            <div className="border-l border-white/20">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="/home/equistone-strategic-img.svg"
                  alt="Strategic Asset Transformation"
                  width={162}
                  height={46}
                  className="w-full h-[clamp(10rem,20vw,14rem)] object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-none px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.5rem,0.75vw,0.75rem)]">
                  <h4 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-light-primary">
                    Strategic Asset Transformation
                  </h4>
                </div>
              </div>

              <div className="pl-[clamp(1rem,1.5vw,1.5rem)]">
                <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-white/60 leading-[1.8]">
                  We target businesses and sectors where disciplined application
                  of technology and capital structure improvement unlocks
                  disproportionate value.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border-l border-white/20">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="/home/equistone-venture-img.svg"
                  alt="Venture Building Over Passive Holding"
                  width={162}
                  height={46}
                  className="w-full h-[clamp(10rem,20vw,14rem)] object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-none px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.5rem,0.75vw,0.75rem)]">
                  <h4 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-light-primary">
                    Venture Building Over Passive Holding
                  </h4>
                </div>
              </div>

              <div className="pl-[clamp(1rem,1.5vw,1.5rem)]">
                <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-white/60 leading-[1.8]">
                  We deploy operational capability alongside capital. Clinex
                  proves this model through in-house design, build, and
                  deployment since 2024.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="border-l border-white/20">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="/home/equistone-ict-img.svg"
                  alt="ICT-Enabled Sector Focus"
                  width={162}
                  height={46}
                  className="w-full h-[clamp(10rem,20vw,14rem)] object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-none px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.5rem,0.75vw,0.75rem)]">
                  <h4 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-light-primary">
                    ICT-Enabled Sector Focus
                  </h4>
                </div>
              </div>

              <div className="pl-[clamp(1rem,1.5vw,1.5rem)]">
                <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-white/60 leading-[1.8]">
                  Focus on healthcare, fintech, communications, and enterprise
                  digitisation where technology creates defensible long-term
                  advantage.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="border-l border-white/20">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="/home/equistone-sustainable-img.svg"
                  alt="Sustainable Development Orientation"
                  width={162}
                  height={46}
                  className="w-full h-[clamp(10rem,20vw,14rem)] object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-none px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.5rem,0.75vw,0.75rem)]">
                  <h4 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-light-primary">
                    Sustainable Development Orientation
                  </h4>
                </div>
              </div>

              <div className="pl-[clamp(1rem,1.5vw,1.5rem)]">
                <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-white/60 leading-[1.8]">
                  Aligning every venture with Malaysia’s NIMP 2030, Digital
                  Economy Blueprint, and ESG principles for long-term value
                  creation.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-[clamp(2rem,4vw,3rem)] w-fit">
            <LineAnimatedLink
              href="https://clinexmy.com/"
              arrowVariant="dark"
              variant="white"
            >
              Explore Our Investment Strategy
            </LineAnimatedLink>
          </div>
        </div>
      </main>
      <main className="relative z-2 flex w-full flex-col bg-dark-primary font-sans px-[clamp(1rem,3vw,4rem)]">
        <div className="container mx-auto max-w-[1600px] border-t border-white/80 py-[clamp(4rem,8vw,8rem)]">
          {/* HEADER */}
          <div className="flex flex-row justify-between text-center">
            <h1 className="flex gap-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.875rem,1.2vw,1.125rem)] font-normal leading-[1.2] tracking-tight text-light-primary">
              <span>•</span>
              Business Sectors
            </h1>

            <p className="text-[clamp(1rem,2vw,1.5rem)] text-light-primary">
              -4
            </p>
          </div>

          {/* TITLE */}
          <h3 className="text-[clamp(2.4rem,5vw,5.2rem)]  mt-[clamp(0.2rem,2vw,0.4rem)] text-light-primary font-medium leading-[1.1] ">
            ICT Sectors We Operate In
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-[clamp(1.5rem,3vw,2rem)] text-[clamp(0.95rem,1.1vw,1.125rem)] text-white/60 leading-[1.8] lg:w-[75%]">
            Equistone focuses on industries where digital technology creates
            durable structural advantages — fully aligned with Malaysia's
            national digital transformation priorities.
          </p>

          {/* GRID */}
          <div className="mt-[clamp(2rem,4vw,4rem)] grid grid-cols-1 lg:grid-cols-3 gap-[clamp(1.5rem,2vw,2rem)]">
            {/* CARD 1 */}
            <div className="border-l border-white/20">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="/home/equistone-healthcare-img.svg"
                  alt="Healthcare Technology"
                  width={162}
                  height={46}
                  className="w-full h-[clamp(12rem,28vh,18rem)] object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-none px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.5rem,0.75vw,0.75rem)]">
                  <h4 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-light-primary">
                    Healthcare Technology
                  </h4>
                </div>
              </div>

              <div className="pl-[clamp(1rem,1.5vw,1.5rem)] flex flex-col justify-between items-start h-auto md:h-[clamp(8rem,18vw,12rem)]">
                {" "}
                <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-white/60 leading-[1.8]">
                  Digitising Malaysia's private healthcare sector — from clinic
                  management systems to patient data platforms. Our flagship
                  venture Clinex is deployed and actively growing in this
                  sector, with Klinik Utama as a key operator client.
                </p>
                <button className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold text-light-primary underline">
                  Explore sector →
                </button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border-l border-white/20">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="/home/equistone-financial-img.svg"
                  alt="Financial Technology"
                  width={162}
                  height={46}
                  className="w-full h-[clamp(12rem,28vh,18rem)] object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-none px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.5rem,0.75vw,0.75rem)]">
                  <h4 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-light-primary">
                    Financial Technology
                  </h4>
                </div>
              </div>

              <div className="pl-[clamp(1rem,1.5vw,1.5rem)] flex flex-col justify-between items-start h-auto md:h-[clamp(8rem,18vw,12rem)]">
                {" "}
                <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-white/60 leading-[1.8]">
                  Strategic investment in payment technology, digital financial
                  infrastructure, and financial services digitisation. Strategic
                  partner: Payhalal Sdn Bhd, operating in the Malaysian Islamic
                  fintech ecosystem.
                </p>
                <button className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold text-light-primary underline">
                  Explore sector →
                </button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="border-l border-white/20">
              <div className="relative w-full overflow-hidden">
                <Image
                  src="/home/equistone-enterpriseict-img.svg"
                  alt="Enterprise ICT & Digital Transformation"
                  width={162}
                  height={46}
                  className="w-full h-[clamp(12rem,28vh,18rem)] object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-none px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.5rem,0.75vw,0.75rem)]">
                  <h4 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-light-primary">
                    Enterprise ICT & Digital Transformation
                  </h4>
                </div>
              </div>

              <div className="pl-[clamp(1rem,1.5vw,1.5rem)] flex flex-col justify-between items-start h-auto md:h-[clamp(8rem,18vw,12rem)]">
                {" "}
                <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-white/60 leading-[1.8]">
                  Advisory, investment, and platform development for Malaysian
                  enterprises undergoing digital transformation — modernising
                  operations and unlocking technology-driven growth. Supports
                  IntelliLabs AI and JomChat partnerships.
                </p>
                <button className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold text-light-primary underline">
                  Explore sector →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="relative z-2 flex w-full bg-light-primary px-[clamp(1rem,3vw,4rem)] py-[clamp(4rem,8vw,6rem)] font-sans text-dark-primary">
        <div className="container mx-auto">
          {/* HEADER */}
          <div className="flex flex-row justify-between text-center">
            <h1 className="flex gap-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.875rem,1.2vw,1.125rem)] font-normal leading-[1.2] tracking-tight text-dark-primary">
              <span>•</span>
              Our Journey
            </h1>

            <p className="text-[clamp(1rem,2vw,1.5rem)] text-dark-primary">
              -5
            </p>
          </div>

          {/* TITLE */}
          <h3 className="mt-[clamp(1rem,2vw,2rem)] text-[clamp(2rem,4vw,4.2rem)] font-medium leading-[1.1] text-dark-primary">
            Key Milestones
          </h3>

          {/* TIMELINE WRAPPER */}
          <div className="mt-[clamp(2rem,4vw,3rem)] overflow-x-auto scrollbar-hide">
            <JourneyTimeline />
          </div>
        </div>
      </main>
      <main className="relative z-2 flex w-full flex-col bg-light-primary font-sans text-dark-primary px-[clamp(1rem,3vw,4rem)]">
        <div className="container mx-auto border-t border-black/80 py-[clamp(4rem,8vw,6rem)]">
          {/* HEADER */}
          <div className="flex flex-row justify-between text-center">
            <h1 className="flex gap-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.875rem,1.2vw,1.125rem)] font-normal leading-[1.2] tracking-tight text-dark-primary">
              <span>•</span>
              Partners & Clients
            </h1>

            <p className="text-[clamp(1rem,2vw,1.5rem)] text-dark-primary">
              -6
            </p>
          </div>

          {/* TITLE */}
          <h3 className="mt-[clamp(1rem,2vw,2rem)] text-[clamp(2rem,4vw,4.2rem)] font-medium leading-[1.1] text-dark-primary">
            Building an Ecosystem of Value
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.95rem,1.1vw,1.125rem)] text-[#3a4347] leading-[1.8] lg:w-[75%]">
            Equistone works with strategic partners who bring domain expertise
            and market access — and deploys technology ventures like Clinex to
            operators who use them to transform their businesses.
          </p>

          {/* GRID */}
          <div className="mt-[clamp(2rem,4vw,4rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(1.5rem,2vw,2rem)]">
            {/* CARD 1 */}
            <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
              <div className="flex justify-start h-[clamp(2.5rem,4vw,3rem)]">
                <Image
                  src="../collaborations/equistone-payhalal-dark-logo.svg"
                  alt="Payhalal"
                  width={162}
                  height={46}
                  className="w-auto h-[clamp(1.25rem,2vw,2rem)]"
                />
              </div>

              <h4 className="text-[clamp(1rem,1.2vw,1.125rem)] mt-[clamp(1rem,1.5vw,1.5rem)] font-semibold text-dark-primary">
                Payhalal Sdn Bhd
              </h4>

              <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] text-[#3a4347]">
                Financial Technology
              </p>

              <span className="inline-block mt-[clamp(1rem,1.5vw,1.25rem)] text-[clamp(0.65rem,0.8vw,0.75rem)] px-3 py-1 border border-gray-300 text-[#3a4347] rounded-full">
                Strategic Partner
              </span>
            </div>

            {/* CARD 2 */}
            <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
              <div className="flex justify-start h-[clamp(2.5rem,4vw,3rem)]">
                <Image
                  src="../collaborations/equistone-intellilabs-dark-logo.svg"
                  alt="IntelliLabs AI"
                  width={162}
                  height={46}
                  className="w-auto h-[clamp(1.25rem,2vw,2rem)]"
                />
              </div>

              <h4 className="text-[clamp(1rem,1.2vw,1.125rem)] mt-[clamp(1rem,1.5vw,1.5rem)] font-semibold text-dark-primary">
                IntelliLabs AI
              </h4>

              <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] text-[#3a4347]">
                Artificial Intelligence
              </p>

              <span className="inline-block mt-[clamp(1rem,1.5vw,1.25rem)] text-[clamp(0.65rem,0.8vw,0.75rem)] px-3 py-1 border border-gray-300 text-[#3a4347] rounded-full">
                Strategic Partner
              </span>
            </div>

            {/* CARD 3 */}
            <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
              <div className="flex justify-start h-[clamp(2.5rem,4vw,3rem)]">
                <Image
                  src="../collaborations/equistone-jomchat-dark-logo.svg"
                  alt="JomChat"
                  width={162}
                  height={46}
                  className="w-auto h-[clamp(1.25rem,2vw,2rem)]"
                />
              </div>

              <h4 className="text-[clamp(1rem,1.2vw,1.125rem)] mt-[clamp(1rem,1.5vw,1.5rem)] font-semibold text-dark-primary">
                JomChat
              </h4>

              <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] text-[#3a4347]">
                Communications Technology
              </p>

              <span className="inline-block mt-[clamp(1rem,1.5vw,1.25rem)] text-[clamp(0.65rem,0.8vw,0.75rem)] px-3 py-1 border border-gray-300 text-[#3a4347] rounded-full">
                Strategic Partner
              </span>
            </div>

            {/* CARD 4 */}
            <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
              <div className="flex justify-start h-[clamp(2.5rem,4vw,3rem)]">
                <Image
                  src="../collaborations/equistone-klinikutama-dark-logo.svg"
                  alt="Klinik Utama"
                  width={162}
                  height={46}
                  className="w-auto h-[clamp(1.5rem,2.5vw,2.5rem)]"
                />
              </div>

              <h4 className="text-[clamp(1rem,1.2vw,1.125rem)] mt-[clamp(1rem,1.5vw,1.5rem)] font-semibold text-dark-primary">
                Klinik Utama Sdn Bhd
              </h4>

              <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] text-[#3a4347]">
                Multi-Branch GP Clinics · Malaysia
              </p>

              <span className="inline-block mt-[clamp(1rem,1.5vw,1.25rem)] text-[clamp(0.65rem,0.8vw,0.75rem)] px-3 py-1 border border-gray-300 text-[#3a4347] rounded-full">
                Clinex Healthcare Client
              </span>
            </div>
          </div>
        </div>
      </main>
      <main className="relative z-2 flex w-full bg-light-primary px-[clamp(1rem,3vw,4rem)] font-sans text-dark-primary">
        <div className="container mx-auto border-t border-black/80 py-[clamp(4rem,8vw,6rem)]">
          {/* HEADER */}
          <div className="flex flex-row justify-between text-center">
            <h1 className="flex gap-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.875rem,1.2vw,1.125rem)] font-normal leading-[1.2] tracking-tight text-dark-primary">
              <span>•</span>
              Thought Leadership
            </h1>

            <p className="text-[clamp(1rem,2vw,1.5rem)] text-dark-primary">
              -7
            </p>
          </div>

          {/* TITLE */}
          <h3 className="mt-[clamp(1rem,2vw,2rem)] text-[clamp(2rem,4vw,4.2rem)] font-medium leading-[1.1] text-dark-primary">
            Latest Insights
          </h3>

          {/* VIEW ALL */}
          <div className="mt-[clamp(0.5rem,1vw,1rem)] text-[clamp(0.8rem,1vw,0.95rem)] font-semibold underline cursor-pointer w-fit">
            View All Insights →
          </div>

          {/* GRID */}
          <div className="mt-[clamp(2rem,4vw,4rem)] grid grid-cols-1 lg:grid-cols-3 gap-[clamp(1.5rem,2.5vw,2rem)]">
            {/* CARD 1 */}
            <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
              <p className="text-[clamp(0.75rem,1vw,0.875rem)] text-[#3a4347]">
                Healthcare Technology
              </p>

              <h4 className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(1rem,1.2vw,1.125rem)] font-semibold text-dark-primary leading-[1.4]">
                How Clinex Was Built: From a Clinic Floor Problem to 50 Deployed
                Clinics
              </h4>

              <p className="mt-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-[#3a4347] leading-[1.8]">
                The journey from identifying a structural gap in Malaysian
                healthcare IT in 2024 to a fully deployed system trusted by 50+
                GP clinics — and what we learned about venture building along
                the way.
              </p>

              <div className="mt-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.75rem,1vw,0.875rem)] text-[#3a4347] flex gap-3">
                <span>8 min</span>
                <span>·</span>
                <span>June 2026</span>
              </div>

              <div className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] font-semibold text-dark-primary underline cursor-pointer">
                Read →
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
              <p className="text-[clamp(0.75rem,1vw,0.875rem)] text-[#3a4347]">
                Investment & Strategy
              </p>

              <h4 className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(1rem,1.2vw,1.125rem)] font-semibold text-dark-primary leading-[1.4]">
                Venture Building vs Venture Capital: Why Equistone Chose to
                Build First
              </h4>

              <p className="mt-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-[#3a4347] leading-[1.8]">
                Most holding companies stop at capital allocation. Equistone's
                model — incorporating in 2019 and actively building since —
                deploys operational expertise alongside capital.
              </p>

              <div className="mt-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.75rem,1vw,0.875rem)] text-[#3a4347] flex gap-3">
                <span>6 min</span>
                <span>·</span>
                <span>May 2026</span>
              </div>

              <div className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] font-semibold text-dark-primary underline cursor-pointer">
                Read →
              </div>
            </div>

            {/* CARD 3 */}
            <div className="border-l border-gray-300 pl-[clamp(1rem,1.5vw,1.5rem)]">
              <p className="text-[clamp(0.75rem,1vw,0.875rem)] text-[#3a4347]">
                Digital Economy
              </p>

              <h4 className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(1rem,1.2vw,1.125rem)] font-semibold text-dark-primary leading-[1.4]">
                Malaysia's NIMP 2030: ICT Investment Opportunities for Private
                Companies
              </h4>

              <p className="mt-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-[#3a4347] leading-[1.8]">
                Malaysia's National Investment Master Plan identifies the ICT
                sector as a primary driver of economic growth. What this means
                for private investment holding companies in 2026 and beyond.
              </p>

              <div className="mt-[clamp(1rem,1.5vw,1.5rem)] text-[clamp(0.75rem,1vw,0.875rem)] text-[#3a4347] flex gap-3">
                <span>5 min</span>
                <span>·</span>
                <span>April 2026</span>
              </div>

              <div className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.85rem,1vw,0.95rem)] font-semibold text-dark-primary underline cursor-pointer">
                Read →
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="relative z-2 flex w-full bg-light-primary px-[clamp(1rem,3vw,4rem)] py-[clamp(4rem,8vw,6rem)] font-sans text-dark-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,4vw,3rem)] mt-[clamp(2rem,5vw,4rem)]">
            {/* CARD 1 */}
            <div className="border border-gray-300 bg-white p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col justify-between">
              <div>
                <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-dark-primary">
                  For Investors & Co-Investors
                </h3>

                <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-widest text-[#3a4347]">
                  Invest Alongside Equistone
                </p>

                <p className="mt-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.9rem,1.1vw,1rem)] text-[#3a4347] leading-[1.8]">
                  We are building Malaysia's next generation of ICT ventures. If
                  you are a strategic investor or co-investor seeking ICT sector
                  exposure backed by a team that builds operationally — let's
                  talk.
                </p>

                <ul className="mt-[clamp(1rem,2vw,1.5rem)] space-y-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] text-[#3a4347]">
                  <li>• ICT sector focus — healthcare, fintech, enterprise</li>
                  <li>
                    • Venture-building model — operational expertise included
                  </li>
                  <li>
                    • Incorporated 2019 · KL-based · Active ASEAN expansion
                  </li>
                </ul>
              </div>

              <div className="mt-[clamp(1.5rem,3vw,2rem)] w-fit">
                <LineAnimatedLink href="/contact">
                  Partner With Us
                </LineAnimatedLink>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border border-gray-300 bg-white p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col justify-between">
              <div>
                <h3 className="text-[clamp(1.25rem,2vw,1.75rem)] font-semibold text-dark-primary">
                  For Founders & Operators
                </h3>

                <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-widest text-[#3a4347]">
                  Build Your Venture With Equistone
                </p>

                <p className="mt-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.9rem,1.1vw,1rem)] text-[#3a4347] leading-[1.8]">
                  Have a high-potential ICT venture that needs smart capital,
                  strategic advisory, or technology execution support? Equistone
                  brings more than funding — we bring the team that built Clinex
                  from the ground up since 2024.
                </p>

                <ul className="mt-[clamp(1rem,2vw,1.5rem)] space-y-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] text-[#3a4347]">
                  <li>• Corporate finance and capital structuring expertise</li>
                  <li>• In-house technology development capability</li>
                  <li>
                    • Strategic partner network — fintech, AI, communications
                  </li>
                </ul>
              </div>

              <div className="mt-[clamp(1.5rem,3vw,2rem)] w-fit">
                <LineAnimatedLink href="/submit">
                  Submit Your Venture
                </LineAnimatedLink>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterLight />
    </div>
  );
}

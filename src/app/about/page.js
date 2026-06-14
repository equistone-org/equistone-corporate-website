"use client";

import { useState, useEffect } from "react";

import HeaderLight from "@/components/HeaderLight";
import Sidebar from "@/components/Sidebar";
import FooterLight from "@/components/FooterLight";

export default function AboutPage(sidebarColor = "#000000") {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="flex flex-col bg-light-primary font-sans text-dark-primary">
      <HeaderLight withBorder onMenu={() => setOpen(true)} />
      <Sidebar color={sidebarColor} open={open} setOpen={setOpen} />
      {/* HERO */}
      <main className="flex z-2 relative w-full px-[clamp(1.25rem,3vw,4rem)] py-[clamp(3.5rem,6vw,6rem)] bg-light-primary">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-[clamp(1.5rem,3vw,3rem)]">
            {/* LEFT */}
            <div className="w-full lg:w-[65%]">
              <h1
                className="mt-[clamp(1.2rem,2vw,2.5rem)]
              text-[clamp(2rem,5vw,4.8rem)]
              leading-[1.05]
              font-semibold text-dark-primary"
              >
                Building Long-Term
                <br />
                Value Through
                <span className="text-dark-orange"> ICT Ventures.</span>
              </h1>

              <p
                className="mt-[clamp(1rem,2vw,2.5rem)]
              text-[clamp(0.9rem,1.2vw,1.125rem)]
              leading-[clamp(1.5,1.8vw,2)]
              text-[#3a4347]
              lg:w-[90%]"
              >
                Equistone Sdn Bhd is a Malaysian investment holding and digital
                solutions company focused on strategic investments, advisory,
                and technology-backed value creation.
              </p>
            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-[25%] flex flex-col justify-end gap-[clamp(1.25rem,2vw,2rem)]">
              <div className="border-l border-gray-300 pl-6">
                <div className="text-[clamp(1.6rem,2.2vw,2.5rem)] font-semibold">
                  2019
                </div>
                <p className="mt-2 text-black/60 text-[clamp(0.8rem,1vw,1rem)] leading-[1.5]">
                  Incorporated in Kuala Lumpur, Malaysia
                </p>
              </div>

              <div className="border-l border-gray-300 pl-6">
                <div className="text-[clamp(1.6rem,2.2vw,2.5rem)] font-semibold">
                  50+
                </div>
                <p className="mt-2 text-black/60 text-[clamp(0.8rem,1vw,1rem)] leading-[1.5]">
                  Clinics operating on Clinex
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* COMPANY OVERVIEW */}
      <main className="flex z-2 relative w-full px-[clamp(1.25rem,3vw,4rem)] py-[clamp(3.5rem,6vw,6rem)] bg-light-primary">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[clamp(1.5rem,3vw,3rem)]">
          <div className="lg:col-span-2">
            <h3 className="text-[clamp(1.5rem,2.5vw,3rem)] leading-[1.2] font-medium">
              Capital, Strategy, and Technology — Under One Roof
            </h3>

            <p
              className="mt-[clamp(0.9rem,1.5vw,2rem)]
            text-[clamp(0.9rem,1.1vw,1.05rem)]
            leading-[clamp(1.5,1.8vw,2)]
            text-[#3a4347]"
            >
              Equistone Sdn. Bhd. (“ESB”) is a Malaysian-based investment
              holding and digital solutions company focused on building
              long-term value through strategic investments, advisory services,
              and technology enablement.
            </p>

            <p
              className="mt-[clamp(0.9rem,1.2vw,1.5rem)]
            text-[clamp(0.9rem,1.1vw,1.05rem)]
            leading-[clamp(1.5,1.8vw,2)]
            text-[#3a4347]"
            >
              With a multidisciplinary team experienced in corporate finance,
              investment structuring, project development, and digital
              transformation, ESB serves as both an investor and a strategic
              advisor to high-impact ventures across Malaysia.
            </p>

            <p
              className="mt-[clamp(0.9rem,1.2vw,1.5rem)]
            text-[clamp(0.9rem,1.1vw,1.05rem)]
            leading-[clamp(1.5,1.8vw,2)]
            text-[#3a4347]"
            >
              Our track record includes the development of Clinex — an in-house
              cloud-based Clinic Management System currently deployed across
              clinics in Malaysia — demonstrating our ability to turn concepts
              into scalable, commercially viable digital solutions.
            </p>
          </div>

          <div className="flex flex-col gap-[clamp(1.2rem,2vw,2rem)]">
            <div className="border-l border-gray-300 pl-6">
              <div className="text-[clamp(1.5rem,2vw,2.5rem)] font-black text-dark-orange">
                ICT
              </div>
              <p className="mt-2 text-black/60 text-[clamp(0.8rem,1vw,1rem)]">
                Primary focus sector — healthcare, fintech, enterprise
              </p>
            </div>

            <div className="border-l border-gray-300 pl-6">
              <div className="text-[clamp(1.5rem,2vw,2.5rem)] font-black text-dark-orange">
                ASEAN
              </div>
              <p className="mt-2 text-black/60 text-[clamp(0.8rem,1vw,1rem)]">
                Long-term regional expansion strategy
              </p>
            </div>
            <div className="border-l border-black pl-6 mt-4">
              <p className="italic text-[#1d2b2f] leading-8 text-[clamp(0.8rem,1vw,1rem)]">
                "Equistone's purpose is to become one of Malaysia's leading
                platforms for purpose-driven investments, strategic advisory,
                and technology-backed value creation."
              </p>

              <p className="mt-4 font-semibold text-[#3a4347] text-[clamp(0.8rem,1vw,1rem)]">
                Equistone Sdn Bhd — Corporate Mission Statement
              </p>
            </div>
          </div>
        </div>
      </main>
      <main className="flex z-2 relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-[clamp(3rem,5vw,5rem)] bg-dark-primary text-light-primary">
        <div className="container mx-auto">
          <div className="border-b border-white/20 pb-5 sm:pb-6">
            <h3 className="text-[clamp(1.4rem,2vw,2rem)] sm:text-3xl font-semibold">
              Problem & Solution
            </h3>

            <p className="mt-2 sm:mt-3 text-xs sm:text-sm uppercase tracking-widest text-white/60">
              The Gap Equistone Solves
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-10 lg:mt-12">
            {/* Problem */}
            <div className="border border-white/10 p-6 sm:p-8 lg:p-10">
              <div className="text-xs sm:text-sm text-white/50 font-semibold">
                01
              </div>

              <h4 className="mt-3 sm:mt-4 text-[clamp(1.2rem,1.6vw,1.5rem)] sm:text-2xl font-semibold">
                The Problem
              </h4>

              <p className="mt-4 sm:mt-6 text-white/60 leading-7 sm:leading-8 text-sm sm:text-base">
                Many high-potential businesses struggle to scale due to limited
                access to strategic capital, operational expertise, and digital
                infrastructure.
              </p>

              <p className="mt-4 sm:mt-6 text-white/60 leading-7 sm:leading-8 text-sm sm:text-base">
                Fragmented advisory ecosystems and outdated systems create
                inefficiencies that prevent businesses from becoming scalable,
                future-ready ventures.
              </p>
            </div>

            {/* Solution */}
            <div className="border border-white/10 p-6 sm:p-8 lg:p-10 bg-white/[0.03]">
              <div className="text-xs sm:text-sm text-white/60 font-semibold">
                02
              </div>

              <h4 className="mt-3 sm:mt-4 text-[clamp(1.2rem,1.6vw,1.5rem)] sm:text-2xl font-semibold">
                The Solution
              </h4>

              <p className="mt-4 sm:mt-6 text-white/60 leading-7 sm:leading-8 text-sm sm:text-base">
                Equistone bridges this gap by combining strategic investment,
                advisory expertise, and technology execution into one integrated
                value-creation platform.
              </p>

              <p className="mt-4 sm:mt-6 text-white/60 leading-7 sm:leading-8 text-sm sm:text-base">
                We enable organisations to modernise operations, unlock growth,
                and build commercially successful ventures through hands-on
                execution and scalable digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* CTA */}
      <main className="flex z-2 relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-[clamp(3rem,5vw,5rem)] bg-light-primary">
        <div className="container mx-auto">
          <div className="border border-gray-300 p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 items-start lg:items-center">
            <div>
              <h3 className="text-[clamp(1.4rem,2vw,2rem)] sm:text-3xl font-semibold text-dark-primary">
                Build Alongside Equistone
              </h3>

              <p className="mt-3 sm:mt-4 text-[#3a4347] leading-7 sm:leading-8 max-w-2xl text-sm sm:text-base">
                We partner with founders, operators, investors, and enterprises
                seeking long-term strategic value through ICT-enabled ventures.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
              <button className="px-5 py-3 bg-black text-light-primary text-sm font-semibold w-full sm:w-auto">
                Partner With Us →
              </button>

              <button className="px-5 py-3 border border-black text-dark-primary text-sm font-semibold w-full sm:w-auto">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>

      <FooterLight />
    </div>
  );
}

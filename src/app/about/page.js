"use client";

import Link from "next/link";
import HeaderLight from "@/components/HeaderLight";
import FooterLight from "@/components/FooterLight";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-primary-light font-sans text-black">
      <HeaderLight withBorder />

      {/* HERO */}
      <main className="flex z-2 relative w-full px-[clamp(2rem,3vw,4rem)] py-20 bg-primary-light">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* LEFT */}
            <div className="lg:w-[65%]">    
              <h1 className="mt-8 text-[clamp(3rem,7vw,6rem)] leading-[1] font-semibold text-black">
                Building Long-Term
                <br />
                Value Through
                <span className="text-[#7f4f24]"> ICT Ventures.</span>
              </h1>

              <p className="mt-10 text-[#3a4347] leading-8 text-lg lg:w-[90%]">
                Equistone Sdn Bhd is a Malaysian investment holding and digital
                solutions company focused on strategic investments, advisory,
                and technology-backed value creation.
              </p>
            </div>

            {/* RIGHT */}
            <div className="lg:w-[25%] flex flex-col justify-end">
              <div className="border-l border-gray-300 pl-6">
                <div className="text-4xl font-semibold">2019</div>

                <p className="mt-3 text-[#3a4347] leading-7">
                  Incorporated in Kuala Lumpur, Malaysia
                </p>
              </div>

              <div className="border-l border-gray-300 pl-6 mt-10">
                <div className="text-4xl font-semibold">50+</div>

                <p className="mt-3 text-[#3a4347] leading-7">
                  Clinics operating on Clinex
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* COMPANY OVERVIEW */}
      <main className="flex z-2 relative w-full px-[clamp(2rem,3vw,4rem)] py-20 bg-primary-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2">
              <h3 className="text-[clamp(2rem,2vw,4rem)] leading-[1.2] font-medium text-black">
                Capital, Strategy, and Technology — Under One Roof
              </h3>

              <p className="mt-8 text-[#3a4347] leading-8">
                Equistone Sdn. Bhd. (“ESB”) is a Malaysian-based investment
                holding and digital solutions company focused on building
                long-term value through strategic investments, advisory
                services, and technology enablement.
              </p>

              <p className="mt-6 text-[#3a4347] leading-8">
                With a multidisciplinary team experienced in corporate finance,
                investment structuring, project development, and digital
                transformation, ESB serves as both an investor and a strategic
                advisor to high-impact ventures across Malaysia.
              </p>

              <p className="mt-6 text-[#3a4347] leading-8">
                Our track record includes the development of Clinex — an
                in-house cloud-based Clinic Management System currently deployed
                across clinics in Malaysia — demonstrating our ability to turn
                concepts into scalable, commercially viable digital solutions.
              </p>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="flex flex-col gap-8">
              <div className="border-l border-gray-300 pl-6">
                <div className="text-4xl font-semibold text-black">ICT</div>

                <p className="mt-3 text-[#3a4347] leading-7">
                  Primary focus sector — healthcare, fintech, enterprise
                </p>
              </div>

              <div className="border-l border-gray-300 pl-6">
                <div className="text-4xl font-semibold text-black">ASEAN</div>

                <p className="mt-3 text-[#3a4347] leading-7">
                  Long-term regional expansion strategy
                </p>
              </div>

              <div className="border-l border-black pl-6 mt-4">
                <p className="italic text-[#1d2b2f] leading-8">
                  "Equistone's purpose is to become one of Malaysia's leading
                  platforms for purpose-driven investments, strategic advisory,
                  and technology-backed value creation."
                </p>

                <p className="mt-4 text-sm font-semibold text-[#3a4347]">
                  Equistone Sdn Bhd — Corporate Mission Statement
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* PROBLEM & SOLUTION */}
      <main className="flex z-2 relative w-full px-[clamp(2rem,3vw,4rem)] py-20 bg-primary-dark text-white">
        <div className="container mx-auto">
          <div className="border-b border-white/20 pb-6">
            <h3 className="text-3xl font-semibold">Problem & Solution</h3>

            <p className="mt-3 text-sm uppercase tracking-widest text-white/60">
              The Gap Equistone Solves
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            {/* Problem */}
            <div className="border border-white/10 p-10">
              <div className="text-sm text-white/50 font-semibold">01</div>

              <h4 className="mt-4 text-2xl font-semibold">The Problem</h4>

              <p className="mt-6 text-white/70 leading-8">
                Many high-potential businesses struggle to scale due to limited
                access to strategic capital, operational expertise, and digital
                infrastructure.
              </p>

              <p className="mt-6 text-white/70 leading-8">
                Fragmented advisory ecosystems and outdated systems create
                inefficiencies that prevent businesses from becoming scalable,
                future-ready ventures.
              </p>
            </div>

            {/* Solution */}
            <div className="border border-white/10 p-10 bg-white/[0.03]">
              <div className="text-sm text-white/50 font-semibold">02</div>

              <h4 className="mt-4 text-2xl font-semibold">The Solution</h4>

              <p className="mt-6 text-white/70 leading-8">
                Equistone bridges this gap by combining strategic investment,
                advisory expertise, and technology execution into one integrated
                value-creation platform.
              </p>

              <p className="mt-6 text-white/70 leading-8">
                We enable organisations to modernise operations, unlock growth,
                and build commercially successful ventures through hands-on
                execution and scalable digital infrastructure.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* CTA */}
      <main className="flex z-2 relative w-full px-[clamp(2rem,3vw,4rem)] py-20 bg-primary-light">
        <div className="container mx-auto">
          <div className="border border-gray-300 p-12 flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold text-black">
                Build Alongside Equistone
              </h3>

              <p className="mt-4 text-[#3a4347] leading-8 max-w-2xl">
                We partner with founders, operators, investors, and enterprises
                seeking long-term strategic value through ICT-enabled ventures.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-5 py-3 bg-black text-white text-sm font-semibold">
                Partner With Us →
              </button>

              <button className="px-5 py-3 border border-black text-black text-sm font-semibold">
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

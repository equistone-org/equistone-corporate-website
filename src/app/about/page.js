"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import HeaderLight from "@/components/HeaderLight";
import Sidebar from "@/components/Sidebar";
import FooterLight from "@/components/FooterLight";
import LineAnimatedLink from "@/components/LineAnimatedLink";
import {
  PAD,
  LINE_LIGHT,
  ArrowUpRight,
  CornerFlag,
  Tag,
  Band,
  SectionHead,
  StatTile,
} from "@/components/GridLayout";

const HERO_STATS = [
  { value: "2019", label: "Year incorporated — Kuala Lumpur, Malaysia" },
  { value: "50+", label: "Clinics live on Clinex as of 2026" },
  { value: "ICT", label: "Primary focus sector — healthcare, fintech, enterprise" },
  { value: "ASEAN", label: "Long-term regional expansion strategy" },
];

/* Image strip cut into 4 cells, one left open. */
const STRIP_CELLS = [true, true, false, true];

const PROBLEM_SOLUTION = [
  {
    title: "The Problem",
    tag: "The Gap",
    paras: [
      "Many high-potential businesses struggle to scale due to limited access to strategic capital, operational expertise, and digital infrastructure.",
      "Fragmented advisory ecosystems and outdated systems create inefficiencies that prevent businesses from becoming scalable, future-ready ventures.",
    ],
  },
  {
    title: "The Solution",
    tag: "Equistone",
    paras: [
      "Equistone bridges this gap by combining strategic investment, advisory expertise, and technology execution into one integrated value-creation platform.",
      "We enable organisations to modernise operations, unlock growth, and build commercially successful ventures through hands-on execution and scalable digital infrastructure.",
    ],
  },
];

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="flex flex-col bg-light-primary font-sans text-dark-primary">
      <HeaderLight withBorder onMenu={() => setOpen(true)} />
      <Sidebar open={open} setOpen={setOpen} theme="light" />

      {/* ============================ HERO ============================ */}
      <Band>
        <div className={`grid grid-cols-1 lg:grid-cols-4 border-b ${LINE_LIGHT}`}>
          <div
            className={`${PAD} flex flex-row lg:flex-col justify-between items-start gap-6 border-b lg:border-b-0 lg:border-r ${LINE_LIGHT}`}
          >
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest leading-[1.6] opacity-80">
              About
              <br />
              Equistone Sdn Bhd
            </p>
            <span className="text-[clamp(0.6rem,0.75vw,0.7rem)] px-3 py-1 border border-black/60 font-semibold uppercase rounded-full">
              Est. 2019 · Kuala Lumpur
            </span>
          </div>

          <div
            className={`lg:col-span-3 ${PAD} flex flex-col justify-end gap-[clamp(1rem,2vw,1.5rem)] lg:min-h-[clamp(20rem,30vw,28rem)]`}
          >
            <h1 className="font-semibold leading-[1.02] tracking-tight text-[clamp(2.4rem,5.4vw,5.6rem)]">
              Building Long-Term Value Through
              <span className="text-dark-orange"> ICT Ventures.</span>
            </h1>
            <p className="lg:w-[70%] text-[clamp(0.95rem,1.1vw,1.1rem)] text-[#3a4347] leading-[1.8]">
              Equistone Sdn Bhd is a Malaysian investment holding and digital
              solutions company focused on strategic investments, advisory, and
              technology-backed value creation.
            </p>
          </div>
        </div>

        {/* Image strip */}
        <div className={`${PAD} border-b ${LINE_LIGHT}`}>
          <div className="grid grid-cols-4 gap-[3px] h-[clamp(10rem,22vw,20rem)]">
            {STRIP_CELLS.map((show, i) =>
              show ? (
                <div
                  key={i}
                  className="bg-dark-primary"
                  style={{
                    backgroundImage: "url(/home/equistone-sustainable-img.jpg)",
                    backgroundSize: "400% 100%",
                    backgroundPosition: `${(i / 3) * 100}% 50%`,
                  }}
                />
              ) : (
                <div key={i} />
              ),
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/15">
          {HERO_STATS.map((s) => (
            <StatTile key={s.value} value={s.value} label={s.label} />
          ))}
        </div>
      </Band>

      {/* ============================ 01 WHO WE ARE ============================ */}
      <Band>
        <SectionHead
          index={1}
          label="Who We Are"
          title={
            <>
              Capital, Strategy
              <br className="hidden lg:block" /> & Technology
            </>
          }
          intro="Under one roof — investor, advisor, and builder."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/15">
          {/* Overview */}
          <div
            className={`md:col-span-2 bg-light-primary ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)] min-h-[clamp(18rem,24vw,22rem)]`}
          >
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
              Overview
            </p>
            <p className="text-[clamp(0.95rem,1.05vw,1.05rem)] text-[#3a4347] leading-[1.8]">
              Equistone Sdn. Bhd. (“ESB”) is a Malaysian-based investment holding
              and digital solutions company focused on building long-term value
              through strategic investments, advisory services, and technology
              enablement.
            </p>
            <p className="text-[clamp(0.95rem,1.05vw,1.05rem)] text-[#3a4347] leading-[1.8]">
              With a multidisciplinary team experienced in corporate finance,
              investment structuring, project development, and digital
              transformation, ESB serves as both an investor and a strategic
              advisor to high-impact ventures across Malaysia.
            </p>
          </div>

          {/* Image */}
          <div className="relative bg-dark-primary min-h-[clamp(14rem,22vw,20rem)]">
            <Image
              src="/home/equistone-strategic-img.jpg"
              alt="Equistone strategic investment"
              fill
              sizes="(min-width:1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>

          <StatTile value="2024" label="Clinex development launched in-house" />

          {/* Track record */}
          <div
            className={`group relative md:col-span-2 bg-light-primary ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)] min-h-[clamp(18rem,24vw,22rem)]`}
          >
            <CornerFlag />
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
              Track Record
            </p>
            <Image
              src="/shared/equistone-clinex-logo.svg"
              alt="Clinex Logo"
              width={162}
              height={162}
              className="h-[clamp(2.25rem,3.5vw,3rem)] w-auto self-start"
            />
            <p className="text-[clamp(0.95rem,1.05vw,1.05rem)] text-[#3a4347] leading-[1.8]">
              Our track record includes the development of Clinex — an in-house
              cloud-based Clinic Management System currently deployed across
              clinics in Malaysia — demonstrating our ability to turn concepts
              into scalable, commercially viable digital solutions.
            </p>
            <div className="mt-auto flex items-end justify-between">
              <Tag>Healthcare Technology</Tag>
              <ArrowUpRight />
            </div>
          </div>

          {/* Mission */}
          <div
            className={`md:col-span-2 bg-light-primary ${PAD} flex flex-col justify-between gap-6`}
          >
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
              Corporate Mission Statement
            </p>
            <p className="italic text-[#1d2b2f] leading-[1.7] text-[clamp(1rem,1.3vw,1.3rem)]">
              &ldquo;Equistone&apos;s purpose is to become one of Malaysia&apos;s
              leading platforms for purpose-driven investments, strategic
              advisory, and technology-backed value creation — supporting
              partners, clients, and ecosystems throughout their growth
              journeys.&rdquo;
            </p>
            <p className="text-[clamp(0.75rem,0.9vw,0.875rem)] font-semibold text-[#3a4347]">
              Equistone Sdn Bhd
            </p>
          </div>
        </div>
      </Band>

      {/* ============================ 02 PROBLEM & SOLUTION ============================ */}
      <Band dark>
        <SectionHead
          dark
          index={2}
          label="Problem & Solution"
          kicker="The Gap Equistone Solves"
          title="Problem & Solution"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/15">
          {PROBLEM_SOLUTION.map((item, i) => (
            <div
              key={item.title}
              className={`bg-dark-primary ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)] min-h-[clamp(20rem,26vw,24rem)]`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[clamp(0.85rem,1vw,1rem)] font-semibold opacity-80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Tag dark>{item.tag}</Tag>
              </div>
              <h3 className="mt-[clamp(0.5rem,1vw,1rem)] uppercase font-semibold text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.05]">
                {item.title}
              </h3>
              {item.paras.map((p) => (
                <p
                  key={p}
                  className="text-[clamp(0.9rem,1vw,1rem)] text-white/60 leading-[1.8]"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Band>

      {/* ============================ CTA ============================ */}
      <Band sectionClassName="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div
            className={`${PAD} flex flex-row lg:flex-col justify-between items-start gap-6 border-b lg:border-b-0 lg:border-r ${LINE_LIGHT}`}
          >
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest leading-[1.6] opacity-80">
              Work With Us
            </p>
          </div>

          <div
            className={`relative lg:col-span-3 ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.5rem)] lg:min-h-[clamp(16rem,22vw,20rem)]`}
          >
            <CornerFlag />
            <h2 className="mt-auto uppercase font-semibold leading-[1.02] tracking-tight text-[clamp(2rem,4.4vw,4.4rem)]">
              Build Alongside Equistone
            </h2>
            <p className="lg:w-[70%] text-[clamp(0.95rem,1.1vw,1.1rem)] text-[#3a4347] leading-[1.8]">
              We partner with founders, operators, investors, and enterprises
              seeking long-term strategic value through ICT-enabled ventures.
            </p>
            <div className="flex flex-wrap gap-3">
              <LineAnimatedLink href="/contact" arrowVariant="light">
                Partner With Us
              </LineAnimatedLink>
              <LineAnimatedLink href="/contact" arrowVariant="light" variant="green">
                Contact Us
              </LineAnimatedLink>
            </div>
          </div>
        </div>
      </Band>

      <FooterLight />
    </div>
  );
}

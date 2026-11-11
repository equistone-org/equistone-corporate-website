"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import HeaderLight from "@/components/HeaderLight";
import FooterLight from "@/components/FooterLight";
import JourneyTimeline from "@/components/JourneyTimeline";
// import PartnerSlider from "@/components/PartnerSlider";
import LineAnimatedLink from "@/components/LineAnimatedLink";

import {
  PAD,
  LINE_LIGHT,
  ArrowUpRight,
  CornerFlag,
  Tag,
  Band,
  SectionHead,
  PillLink,
  StatTile,
} from "@/components/GridLayout";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const HERO_STATS = [
  { value: "2019", label: "Year incorporated" },
  { value: "50+", label: "Live clinics" },
  { value: "350k+", label: "Patient records" },
  { value: "ICT", label: "Core sector" },
];

const ABOUT_PILLARS = [
  {
    icon: "/icons/equistone-strategic-icon.svg",
    title: "Strategic Investment",
    tag: "Capital",
    desc: "We identify high-potential opportunities in ICT sectors and provide smart capital with hands-on strategic guidance — not just a cheque.",
  },
  {
    icon: "/icons/equistone-venture-icon.svg",
    title: "Venture Building",
    tag: "Execution",
    desc: "We don't just fund — we build. Clinex is the proof: designed, developed, and deployed in-house to 50+ Malaysian clinics since 2024.",
  },
  {
    icon: "/icons/equistone-sustainable-icon.svg",
    title: "Sustainable Value Creation",
    tag: "Impact",
    desc: "We specialise in strategic asset transformation and sustainable development initiatives — aligning every venture with Malaysia's NIMP 2030 and digital economy agenda.",
  },
];

const PHILOSOPHY = [
  {
    title: "Strategic Asset Transformation",
    img: "/home/equistone-strategic-img.svg",
    desc: "We target businesses and sectors where disciplined application of technology and capital structure improvement unlocks disproportionate value.",
  },
  {
    title: "Venture Building Over Passive Holding",
    img: "/home/equistone-venture-img.svg",
    desc: "We deploy operational capability alongside capital. Clinex proves this model through in-house design, build, and deployment since 2024.",
  },
  {
    title: "ICT-Enabled Sector Focus",
    img: "/home/equistone-ict-img.svg",
    desc: "Focus on healthcare, fintech, communications, and enterprise digitisation where technology creates defensible long-term advantage.",
  },
  {
    title: "Sustainable Development Orientation",
    img: "/home/equistone-sustainable-img.svg",
    desc: "Aligning every venture with Malaysia's NIMP 2030, Digital Economy Blueprint, and ESG principles for long-term value creation.",
  },
];

const SECTORS = [
  {
    title: "Healthcare Technology",
    img: "/home/equistone-healthcare-img.svg",
    desc: "Digitising Malaysia's private healthcare sector — from clinic management systems to patient data platforms. Our flagship venture Clinex is deployed and actively growing in this sector, with Klinik Utama as a key operator client.",
  },
  {
    title: "Financial Technology",
    img: "/home/equistone-financial-img.svg",
    desc: "Strategic investment in payment technology, digital financial infrastructure, and financial services digitisation. Strategic partner: Payhalal Sdn Bhd, operating in the Malaysian Islamic fintech ecosystem.",
  },
  {
    title: "Enterprise ICT & Digital Transformation",
    img: "/home/equistone-enterpriseict-img.svg",
    desc: "Advisory, investment, and platform development for Malaysian enterprises undergoing digital transformation — modernising operations and unlocking technology-driven growth. Supports JomChat partnerships.",
  },
];

const PARTNERS = [
  {
    name: "Payhalal Sdn Bhd",
    logo: "/collaborations/equistone-payhalal-dark-logo.svg",
    sector: "Financial Technology",
    role: "Strategic Partner",
  },
  // {
  //   name: "IntelliLabs AI",
  //   logo: "/collaborations/equistone-intellilabs-dark-logo.svg",
  //   sector: "Artificial Intelligence",
  //   role: "Strategic Partner",
  // },
  {
    name: "JomChat",
    logo: "/collaborations/equistone-jomchat-dark-logo.svg",
    sector: "Communications Technology",
    role: "Strategic Partner",
  },
  {
    name: "Klinik Utama Sdn Bhd",
    logo: "/collaborations/equistone-klinikutama-dark-logo.svg",
    sector: "Multi-Branch GP Clinics · Malaysia",
    role: "Clinex Healthcare Client",
  },
];

const INSIGHTS = [
  {
    category: "Healthcare Technology",
    title:
      "How Clinex Was Built: From a Clinic Floor Problem to 50 Deployed Clinics",
    desc: "The journey from identifying a structural gap in Malaysian healthcare IT in 2024 to a fully deployed system trusted by 50+ GP clinics — and what we learned about venture building along the way.",
    read: "8 min",
    date: "June 2026",
  },
  {
    category: "Investment & Strategy",
    title:
      "Venture Building vs Venture Capital: Why Equistone Chose to Build First",
    desc: "Most holding companies stop at capital allocation. Equistone's model — incorporating in 2019 and actively building since — deploys operational expertise alongside capital.",
    read: "6 min",
    date: "May 2026",
  },
  {
    category: "Digital Economy",
    title:
      "Malaysia's NIMP 2030: ICT Investment Opportunities for Private Companies",
    desc: "Malaysia's National Investment Master Plan identifies the ICT sector as a primary driver of economic growth. What this means for private investment holding companies in 2026 and beyond.",
    read: "5 min",
    date: "April 2026",
  },
];

const CTAS = [
  {
    title: "For Investors & Co-Investors",
    kicker: "Invest Alongside Equistone",
    desc: "We are building Malaysia's next generation of ICT ventures. If you are a strategic investor or co-investor seeking ICT sector exposure backed by a team that builds operationally — let's talk.",
    points: [
      "ICT sector focus — healthcare, fintech, enterprise",
      "Venture-building model — operational expertise included",
      "Incorporated 2019 · KL-based · Active ASEAN expansion",
    ],
    cta: "Partner With Us",
  },
  {
    title: "For Founders & Operators",
    kicker: "Build Your Venture With Equistone",
    desc: "Have a high-potential ICT venture that needs smart capital, strategic advisory, or technology execution support? Equistone brings more than funding — we bring the team that built Clinex from the ground up since 2024.",
    points: [
      "Corporate finance and capital structuring expertise",
      "In-house technology development capability",
      "Strategic partner network — fintech, AI, communications",
    ],
    cta: "Submit Your Venture",
  },
];

/* Hero mosaic: 3 × 2 cells cut from one image, two cells left open. */
const MOSAIC_CELLS = [
  { col: 0, row: 0, show: false },
  { col: 1, row: 0, show: true },
  { col: 2, row: 0, show: true },
  { col: 0, row: 1, show: true },
  { col: 1, row: 1, show: true },
  { col: 2, row: 1, show: false },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-1 flex-col items-start justify-center bg-light-primary font-sans">
      <Sidebar open={open} setOpen={setOpen} />
      <HeaderLight withBorder onMenu={() => setOpen(true)} />

      {/* ============================ HERO ============================ */}
      <main
        className={`relative w-full overflow-hidden font-sans z-99 text-dark-primary bg-light-secondary border-b ${LINE_LIGHT}`}
      >
        <div className="relative z-20 px-[clamp(0.02rem,3vw,4rem)]">
          <div className="container mx-auto">
            <div
              className={`border-x  ${LINE_LIGHT} flex flex-col lg:min-h-[calc(100dvh-80px)]`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 flex-1">
                <div
                  className={`lg:col-span-2 ${PAD} flex flex-col justify-between gap-[clamp(2rem,5vw,5rem)]  border-b lg:border-b-0 lg:border-r ${LINE_LIGHT}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest leading-[1.6] opacity-80">
                      Equistone Sdn Bhd
                      <br />
                      Est. 2019
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[clamp(0.6rem,0.75vw,0.7rem)] px-3 py-1 border border-black/60 font-semibold uppercase rounded-full">
                        ICT Investment Holding
                      </span>
                      <span className="text-[clamp(0.6rem,0.75vw,0.7rem)] px-3 py-1 border border-black/60 font-semibold uppercase rounded-full">
                        Integra Tower · Kuala Lumpur
                      </span>
                    </div>
                  </div>

                  <h1 className="font-semibold leading-[1.02] tracking-tight text-[clamp(2.6rem,5.4vw,6rem)]">
                    We Build What
                    <span className="text-dark-orange"> Others Only Fund.</span>
                  </h1>
                </div>

                <div className={`lg:col-span-2 relative ${PAD}`}>
                  <div className="grid grid-cols-3 grid-rows-2 gap-[3px] h-full min-h-[clamp(16rem,38vw,34rem)]">
                    {MOSAIC_CELLS.map((c, i) =>
                      c.show ? (
                        <div
                          key={i}
                          className="bg-light-primary"
                          style={{
                            backgroundImage:
                              "url(/home/equistone-strategic-img.jpg)",
                            backgroundSize: "300% 200%",
                            backgroundPosition: `${c.col * 50}% ${c.row * 100}%`,
                          }}
                        />
                      ) : (
                        <div key={i} />
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`grid grid-cols-2 lg:grid-cols-6 border-t ${LINE_LIGHT}`}
              >
                <div
                  className={`col-span-2 ${PAD} flex flex-col gap-[clamp(1.25rem,2vw,2rem)] border-b lg:border-b-0 lg:border-r ${LINE_LIGHT}`}
                >
                  <p className="font-medium text-[clamp(0.9rem,1.05vw,1rem)] leading-[1.7]">
                    Equistone Sdn Bhd is Malaysia&apos;s purpose-driven
                    investment holding and venture-building company — combining
                    strategic capital, corporate advisory, and in-house
                    technology execution to create scalable ICT ventures.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <LineAnimatedLink href="/contact" arrowVariant="light">
                      Explore Our Ventures
                    </LineAnimatedLink>
                    <LineAnimatedLink href="/contact" arrowVariant="light">
                      Partner With Us
                    </LineAnimatedLink>
                  </div>
                </div>

                {HERO_STATS.map((s) => (
                  <div
                    key={s.label}
                    className={`${PAD} flex flex-col justify-end`}
                  >
                    <div className="text-[clamp(2rem,3.4vw,3.2rem)] font-semibold leading-none">
                      {s.value}
                    </div>
                    <div className="mt-[clamp(0.75rem,1vw,1rem)] pt-[clamp(0.75rem,1vw,1rem)] border-t border-black/40 text-[clamp(0.7rem,0.85vw,0.85rem)]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <PartnerSlider /> */}

      {/* ============================ 01 ABOUT ============================ */}
      <Band className="border-t">
        <SectionHead
          index={1}
          label="About Equistone"
          title={
            <>
              Capital, Strategy
              <br className="hidden lg:block" /> & Technology
            </>
          }
          action={<PillLink href="/about">Read more</PillLink>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/15">
          {/* Intro */}
          <div
            className={`md:col-span-2 bg-light-primary ${PAD} flex flex-col justify-between gap-8 min-h-[clamp(16rem,22vw,20rem)]`}
          >
            <h3 className="uppercase font-semibold text-[clamp(1rem,1.3vw,1.25rem)] leading-[1.3]">
              Under one roof
            </h3>
            <p className="text-[clamp(0.95rem,1.1vw,1.1rem)] text-[#3a4347] leading-[1.8]">
              Equistone Sdn Bhd is a Malaysian investment holding and digital
              solutions company that builds long-term value through a model no
              traditional holding company uses — we invest, advise, and build
              simultaneously. Incorporated in 2019 and headquartered in Kuala
              Lumpur, Equistone is focused on developing scalable ICT ventures
              across Malaysia and the ASEAN region.
            </p>
          </div>

          {/* Image */}
          <div className="relative bg-light-primary min-h-[clamp(14rem,22vw,20rem)]">
            <Image
              src="/home/equistone-venture-img.jpg"
              alt="Equistone venture building"
              fill
              sizes="(min-width:1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>

          <StatTile value="2019" label="Year incorporated — Kuala Lumpur" />

          {/* Pillars */}
          {ABOUT_PILLARS.map((p) => (
            <div
              key={p.title}
              className={`group bg-light-primary ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)] min-h-[clamp(18rem,24vw,22rem)]`}
            >
              <div className="bg-dark-secondary p-[clamp(0.6rem,0.8vw,0.8rem)] w-fit">
                <Image
                  src={p.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="h-[clamp(1.1rem,1.5vw,1.5rem)] w-auto"
                />
              </div>
              <h4 className="uppercase font-semibold text-[clamp(0.95rem,1.15vw,1.1rem)] leading-[1.3]">
                {p.title}
              </h4>
              <p className="text-[clamp(0.85rem,0.95vw,0.92rem)] text-black/60 leading-[1.7]">
                {p.desc}
              </p>
              <div className="mt-auto flex items-end justify-between">
                <Tag>{p.tag}</Tag>
                <ArrowUpRight />
              </div>
            </div>
          ))}

          <StatTile value="50+" label="Clinics live on Clinex as of 2026" />
          <StatTile
            value="ICT"
            label="Primary focus sector — Malaysia & ASEAN"
          />
          <StatTile value="2024" label="Clinex development launched in-house" />

          {/* Mission quote */}
          <div
            className={`relative md:col-span-2 bg-light-primary ${PAD} flex flex-col justify-between gap-6`}
          >
            <CornerFlag />
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
              Corporate Mission Statement
            </p>
            <p className="italic text-[#1d2b2f] leading-[1.7] text-[clamp(1rem,1.3vw,1.3rem)]">
              &ldquo;Equistone&apos;s purpose is to become one of
              Malaysia&apos;s leading platforms for purpose-driven investments,
              strategic advisory, and technology-backed value creation —
              supporting partners, clients, and ecosystems throughout their
              growth journeys.&rdquo;
            </p>
          </div>
        </div>
      </Band>

      {/* ============================ 02 VENTURES ============================ */}
      <Band>
        <SectionHead
          index={2}
          label="Technology Ventures"
          title="Ventures We've Built and Backed"
          intro="Equistone builds and supports scalable ICT ventures through a unique combination of strategic investment, operational execution, and in-house technology development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/15">
          {/* Clinex feature */}
          <div
            className={`md:col-span-2 lg:row-span-2 bg-light-primary ${PAD} flex flex-col gap-[clamp(1.25rem,2vw,1.75rem)]`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
                Healthcare Technology
              </p>
              <span className="text-[clamp(0.6rem,0.75vw,0.7rem)] px-3 py-1 bg-dark-primary text-light-primary uppercase tracking-wide live-pulse rounded-full">
                Flagship Venture · Live
              </span>
            </div>

            <Image
              src="/shared/equistone-clinex-logo.svg"
              alt="Clinex Logo"
              width={162}
              height={162}
              className="h-[clamp(2.5rem,4vw,3.5rem)] w-auto self-start"
            />

            <h3 className="uppercase font-semibold text-[clamp(1.1rem,1.5vw,1.4rem)] leading-[1.3]">
              Malaysia&apos;s Leading Cloud-Based Clinic Management System
            </h3>

            <p className="text-[#3a4347] leading-[1.8] text-[clamp(0.9rem,1vw,1rem)]">
              Built entirely in-house by Equistone from 2024, Clinex is a fully
              integrated clinic management platform for Malaysian GP clinics and
              multi-branch healthcare groups. Covering smart queue management,
              electronic medical records (EMR), appointment scheduling,
              inventory management, real-time analytics, and LHDN e-invoicing —
              Clinex is trusted by 50+ clinics with 1,500+ daily patient visits
              across Malaysia.
            </p>
            <p className="text-[#3a4347] leading-[1.8] text-[clamp(0.9rem,1vw,1rem)]">
              Klinik Utama Sdn Bhd is one of Equistone&apos;s flagship
              healthcare operator clients running on the Clinex platform.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Healthcare Technology",
                "Cloud SaaS",
                "EMR & Queue Management",
                "LHDN e-Invoice",
                "GP Clinics",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[clamp(0.7rem,0.85vw,0.8rem)] px-3 py-1.5 border border-gray-300 text-[#3a4347] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-[clamp(1rem,1.5vw,1.5rem)] border-t border-gray-300 flex flex-wrap items-end justify-between gap-4">
              <p className="max-w-md text-sm text-[#3a4347] leading-7">
                Clinex represents Equistone&apos;s long-term commitment to
                building scalable healthcare infrastructure for Malaysia&apos;s
                digital future.
              </p>
              <LineAnimatedLink
                href="https://clinexmy.com/"
                arrowVariant="light"
                variant="green"
              >
                Visit Clinex
              </LineAnimatedLink>
            </div>
          </div>

          {/* Image */}
          <div className="relative md:col-span-2 bg-light-primary min-h-[clamp(14rem,22vw,20rem)]">
            <Image
              src="/home/equistone-healthcare-img.svg"
              alt="Healthcare technology"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <StatTile value="50+" label="Active clinics" />
          <StatTile value="350k+" label="Patient records" />
          <StatTile value="1,500+" label="Daily patient visits" />
          <StatTile value="2024" label="Development began" />

          {/* Next venture */}
          <div
            className={`relative md:col-span-2 bg-light-primary ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)]`}
          >
            <CornerFlag />
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
              Actively Evaluating
            </p>
            <h4 className="uppercase font-semibold text-[clamp(1.1rem,1.5vw,1.4rem)] leading-[1.3]">
              Next Venture
            </h4>
            <p className="text-black/60 leading-[1.7] text-[clamp(0.85rem,0.95vw,0.92rem)]">
              Equistone continuously evaluates high-potential ICT opportunities.
              Since incorporation in 2019, the company has been actively
              identifying businesses for strategic investment. Our next venture
              follows the same model: identify a structural market gap, build or
              co-build the solution, deploy with partners, then scale across
              ASEAN.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Financial Technology",
                "Enterprise ICT",
                "Digital Infrastructure",
                "Sustainable Technology",
                "Healthcare Technology",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[clamp(0.7rem,0.85vw,0.8rem)] px-3 py-1.5 border border-gray-300 text-[#3a4347] rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-2">
              <LineAnimatedLink
                href="/contact"
                arrowVariant="light"
                variant="green"
              >
                Submit a Venture
              </LineAnimatedLink>
            </div>
          </div>
        </div>
      </Band>

      {/* ============================ 03 PHILOSOPHY ============================ */}
      <Band dark>
        <SectionHead
          dark
          index={3}
          label="Investment Philosophy"
          title="Four Pillars of Value Creation"
          intro="Equistone doesn't fund and forget. Every investment is backed by operational expertise, strategic advisory, and the willingness to build alongside our partners."
          action={
            <PillLink dark href="/investment">
              Our Strategy
            </PillLink>
          }
        />

        <div className="divide-y divide-white/15">
          {PHILOSOPHY.map((p, i) => (
            <div
              key={p.title}
              className="group grid grid-cols-[auto_1fr] lg:grid-cols-4"
            >
              <div
                className={`${PAD} lg:border-r border-white/15 text-[clamp(0.85rem,1vw,1rem)] font-semibold opacity-80`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className={`lg:col-span-2 ${PAD} flex items-start justify-between gap-6`}
              >
                <div>
                  <h4 className="uppercase font-semibold text-[clamp(1rem,1.3vw,1.25rem)] leading-[1.3]">
                    {p.title}
                  </h4>
                  <p className="mt-[clamp(0.5rem,0.8vw,0.75rem)] text-[clamp(0.85rem,1vw,0.95rem)] text-white/60 leading-[1.8] max-w-xl">
                    {p.desc}
                  </p>
                </div>
                <ArrowUpRight className="lg:hidden" />
              </div>
              <div
                className={`hidden lg:flex ${PAD} items-start justify-between gap-6`}
              >
                <div className="relative w-full aspect-16/10 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <ArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </Band>

      {/* ============================ 04 SECTORS ============================ */}
      <Band dark>
        <SectionHead
          dark
          index={4}
          label="Business Sectors"
          title="ICT Sectors We Operate In"
          intro="Equistone focuses on industries where digital technology creates durable structural advantages — fully aligned with Malaysia's national digital transformation priorities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/15">
          {SECTORS.map((s, i) => (
            <div key={s.title} className="group bg-dark-primary flex flex-col">
              <div className="relative w-full h-[clamp(12rem,20vw,18rem)] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div
                className={`${PAD} flex flex-col gap-[clamp(0.75rem,1vw,1rem)] flex-1`}
              >
                <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
                  Sector {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="uppercase font-semibold text-[clamp(1rem,1.25vw,1.2rem)] leading-[1.3]">
                  {s.title}
                </h4>
                <p className="text-[clamp(0.85rem,0.95vw,0.92rem)] text-white/60 leading-[1.8]">
                  {s.desc}
                </p>
                <div className="mt-auto pt-4 flex items-end justify-between">
                  <LineAnimatedLink
                    href="/sectors"
                    variant="underlineBlack"
                    arrowVariant="light"
                  >
                    Explore sector
                  </LineAnimatedLink>
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Band>

      {/* ============================ 05 JOURNEY ============================ */}
      <Band>
        <SectionHead index={5} label="Our Journey" title="Key Milestones" />
        <div className={`${PAD} overflow-x-auto scrollbar-hide`}>
          <JourneyTimeline />
        </div>
      </Band>

      {/* ============================ 06 PARTNERS ============================ */}
      <Band>
        <SectionHead
          index={6}
          label="Partners & Clients"
          title="Building an Ecosystem of Value"
          intro="Equistone works with strategic partners who bring domain expertise and market access — and deploys technology ventures like Clinex to operators who use them to transform their businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
          {/* {PARTNERS.map((p) => (
            <div
              key={p.name}
              className={`bg-light-primary ${PAD} flex flex-col justify-between gap-8 min-h-[clamp(14rem,18vw,17rem)]`}
            >
              <div className="h-[clamp(2.5rem,4vw,3rem)] flex items-center">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={162}
                  height={46}
                  className="w-auto max-h-full h-[clamp(1.25rem,2.2vw,2.25rem)]"
                />
              </div>
              <div>
                <h4 className="uppercase font-semibold text-[clamp(0.95rem,1.1vw,1.05rem)]">
                  {p.name}
                </h4>
                <p className="mt-1 text-[clamp(0.8rem,0.9vw,0.875rem)] text-[#3a4347]">
                  {p.sector}
                </p>
                <div className="mt-[clamp(1rem,1.5vw,1.25rem)]">
                  <Tag>{p.role}</Tag>
                </div>
              </div>
            </div>
          ))} */}

          <Link
            href="/contact"
            className={`group border-r relative bg-light-primary ${LINE_LIGHT} ${PAD} flex flex-col justify-between gap-8 min-h-[clamp(14rem,18vw,17rem)]`}
          >
            <CornerFlag />
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
              Open Invitation
            </p>
            <div className="flex items-end justify-between gap-4">
              <h4 className="uppercase font-semibold text-[clamp(1.1rem,1.5vw,1.4rem)] leading-[1.2] underline underline-offset-4 decoration-1">
                Become a Partner
              </h4>
              <ArrowUpRight />
            </div>
          </Link>
        </div>
      </Band>

      {/* ============================ 07 INSIGHTS ============================ */}
      <Band>
        <SectionHead
          index={7}
          label="Thought Leadership"
          kicker="Latest from Equistone"
          title="Insights"
          action={<PillLink href="/insights">View All Insights</PillLink>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/15">
          {INSIGHTS.map((a) => (
            <Link
              key={a.title}
              href="/insights"
              className={`group bg-light-primary ${PAD} flex flex-col gap-[clamp(0.75rem,1vw,1rem)] min-h-[clamp(20rem,26vw,24rem)]`}
            >
              <div className="flex items-center justify-between text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
                <span>{a.date}</span>
                <span>{a.read}</span>
              </div>
              <h4 className="mt-[clamp(0.5rem,1vw,1rem)] uppercase font-semibold text-[clamp(0.95rem,1.15vw,1.1rem)] leading-[1.35]">
                {a.title}
              </h4>
              <p className="text-[clamp(0.85rem,0.95vw,0.92rem)] text-[#3a4347] leading-[1.7]">
                {a.desc}
              </p>
              <div className="mt-auto pt-4 flex items-end justify-between">
                <Tag>{a.category}</Tag>
                <ArrowUpRight />
              </div>
            </Link>
          ))}
        </div>
      </Band>

      {/* ============================ CTA ============================ */}
      <Band sectionClassName="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/15">
          {CTAS.map((c) => (
            <div
              key={c.title}
              className={`relative bg-light-primary ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)] min-h-[clamp(22rem,30vw,28rem)]`}
            >
              <CornerFlag />
              <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
                {c.kicker}
              </p>
              <h3 className="uppercase font-semibold text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[1.05]">
                {c.title}
              </h3>
              <p className="text-[clamp(0.9rem,1.05vw,1rem)] text-[#3a4347] leading-[1.8]">
                {c.desc}
              </p>
              <ul
                className={`border-t ${LINE_LIGHT} text-[clamp(0.8rem,0.95vw,0.9rem)] text-[#3a4347]`}
              >
                {c.points.map((pt, i) => (
                  <li
                    key={pt}
                    className={`flex gap-4 py-2.5 border-b ${LINE_LIGHT}`}
                  >
                    <span className="font-semibold text-dark-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2 w-fit">
                <LineAnimatedLink href="/contact" arrowVariant="light">
                  {c.cta}
                </LineAnimatedLink>
              </div>
            </div>
          ))}
        </div>
      </Band>

      <FooterLight />
    </div>
  );
}

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

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const PRODUCTS = [
  {
    id: "clinex-gp",
    name: "Clinex GP",
    logo: "/products/list-product-clinex-gp.svg",
    status: "Rebranding",
    category: "Clinic Management System",
    summary:
      "The Clinex you already know, now Clinex GP — our cloud clinic management system for general practice.",
    points: [
      "Patient registration, EMR & consultation notes",
      "Dispensary, inventory & billing in one flow",
      "Panel / TPA claims and reporting",
      "Live across 50+ clinics in Malaysia",
    ],
    href: "https://clinexmy.com",
  },
  {
    id: "clinex-dent",
    name: "Clinex Dent",
    logo: "/products/list-product-clinex-dent.svg",
    status: "Upcoming",
    category: "Dental Practice System",
    summary:
      "A Clinex built for dentists — charting, treatment plans and chair scheduling for dental practices.",
    points: [
      "Interactive odontogram & dental charting",
      "Multi-visit treatment plans with costing",
      "Chair & dentist scheduling",
      "Shares the Clinex patient record and billing core",
    ],
  },
  {
    id: "clinex-flow",
    name: "Clinex Flow",
    logo: "/products/list-product-clinex-flow.svg",
    status: "Upcoming",
    category: "Queue Management System",
    summary:
      "Queue management that moves patients from arrival to pharmacy without the crowded waiting room.",
    points: [
      "Walk-in and appointment ticketing",
      "Live queue display & SMS / WhatsApp calls",
      "Counter, room and pharmacy routing",
      "Wait-time analytics per clinic",
    ],
  },
  {
    id: "clinex-sync",
    name: "Clinex Sync",
    logo: "/products/list-product-clinex-sync.svg",
    status: "Upcoming",
    category: "Pharmacy Inventory System",
    summary:
      "Pharmacy inventory tracking that keeps every shelf, batch and expiry date in sync with the dispensary.",
    points: [
      "Real-time stock levels across outlets",
      "Batch, lot & expiry date tracking",
      "Low-stock alerts and purchase orders",
      "Auto stock deduction from Clinex dispensing",
    ],
  },
  {
    id: "qaseh-platform",
    name: "Qaseh Platform",
    logo: "/products/list-product-qaseh-platform.svg",
    status: "Upcoming",
    category: "Healthcare Funding Platform",
    summary:
      "One system that channels corporate funds — CSR, zakat and welfare budgets — into healthcare for the people who need it.",
    points: [
      "Corporate fund setup & eligibility rules",
      "Direct disbursement to partner clinics",
      "Beneficiary verification and usage tracking",
      "Impact reports for every ringgit spent",
    ],
  },
];

const HERO_STATS = [
  { value: "05", label: "Healthcare products in the portfolio" },
  { value: "01", label: "Rebrand — Clinex becomes Clinex GP" },
  { value: "04", label: "New products launching next" },
  { value: "50+", label: "Clinics already running on Clinex" },
];

const QASEH_STEPS = [
  {
    who: "Corporates",
    title: "Allocate a fund",
    text: "Companies set aside CSR, zakat or employee-welfare budgets and define who it should help.",
  },
  {
    who: "Qaseh",
    title: "Govern the fund",
    text: "Eligibility rules, beneficiary verification and approvals run in one place — no spreadsheets.",
  },
  {
    who: "Clinics",
    title: "Deliver the care",
    text: "Partner clinics on Clinex treat beneficiaries and claim directly against the fund.",
  },
  {
    who: "Impact",
    title: "Report back",
    text: "Every visit and every ringgit is traced, giving funders a clear, auditable impact report.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function StatusTag({ status }) {
  return status === "Rebranding" ? (
    <Tag>{status}</Tag>
  ) : (
    <span className="inline-block w-fit px-2 py-[3px] text-[clamp(0.6rem,0.7vw,0.7rem)] font-semibold uppercase tracking-wider border border-[#344e41] text-[#344e41]">
      {status}
    </span>
  );
}

export default function ProductsPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const [gp, ...upcoming] = PRODUCTS;
  const qaseh = PRODUCTS.find((p) => p.id === "qaseh-platform");

  return (
    <div className="flex flex-col bg-light-primary font-sans text-dark-primary">
      <HeaderLight withBorder onMenu={() => setOpen(true)} />
      <Sidebar open={open} setOpen={setOpen} theme="light" />

      {/* ============================ HERO ============================ */}
      <Band>
        <div
          className={`grid grid-cols-1 lg:grid-cols-4 border-b ${LINE_LIGHT}`}
        >
          <div
            className={`${PAD} flex flex-row lg:flex-col justify-between items-start gap-6 border-b lg:border-b-0 lg:border-r ${LINE_LIGHT}`}
          >
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest leading-[1.6] opacity-80">
              Products
              <br />
              Healthcare Technology
            </p>
            <span className="text-[clamp(0.6rem,0.75vw,0.7rem)] px-3 py-1 border border-black/60 font-semibold uppercase rounded-full">
              Built in-house · 2026
            </span>
          </div>

          <div
            className={`lg:col-span-3 ${PAD} flex flex-col justify-end gap-[clamp(1rem,2vw,1.5rem)] lg:min-h-[clamp(20rem,30vw,28rem)]`}
          >
            <h1 className="font-semibold leading-[1.02] tracking-tight text-[clamp(2.4rem,5.4vw,5.6rem)]">
              One Family of Products for
              <span className="text-dark-orange"> Better Care.</span>
            </h1>
            <p className="lg:w-[70%] text-[clamp(0.95rem,1.1vw,1.1rem)] text-[#3a4347] leading-[1.8]">
              From the clinic front desk to the dental chair to the funds that
              pay for care — Equistone builds the systems that keep Malaysian
              healthcare running.
            </p>
          </div>
        </div>

        {/* Logo strip */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-black/15 border-b border-black/15">
          {PRODUCTS.map((p, i) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className={`group relative bg-light-primary flex items-center justify-center h-[clamp(6rem,10vw,9rem)] px-6 transition-colors hover:bg-white ${
                i === PRODUCTS.length - 1 && PRODUCTS.length % 2
                  ? "col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={240}
                height={40}
                className="h-[clamp(1.25rem,2vw,1.75rem)] w-auto max-w-full"
              />
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/15">
          {HERO_STATS.map((s) => (
            <StatTile key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Band>

      {/* ============================ 01 PRODUCT LIST ============================ */}
      <Band>
        <SectionHead
          index={1}
          label="Product List"
          title="The Portfolio"
          intro="Five products, one shared core — patient records, billing and reporting that work the same everywhere."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/15">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className={`group relative scroll-mt-24 bg-light-primary ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)] min-h-[clamp(22rem,28vw,26rem)]`}
            >
              {p.status === "Rebranding" && <CornerFlag />}
              <div className="flex items-center justify-between">
                <span className="text-[clamp(0.85rem,1vw,1rem)] font-semibold opacity-80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <StatusTag status={p.status} />
              </div>

              <Image
                src={p.logo}
                alt={p.name}
                width={240}
                height={40}
                className="mt-[clamp(0.5rem,1vw,1rem)] h-[clamp(1.75rem,2.6vw,2.4rem)] w-auto self-start"
              />

              <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
                {p.category}
              </p>
              <p className="text-[clamp(0.95rem,1.05vw,1.05rem)] text-[#3a4347] leading-[1.8]">
                {p.summary}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[clamp(0.8rem,0.95vw,0.9rem)] text-[#3a4347]">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 leading-[1.6]">
                    <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-dark-orange" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2 flex items-end justify-between">
                <Tag>Healthcare Technology</Tag>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${p.name}`}
                  >
                    <ArrowUpRight />
                  </a>
                ) : (
                  <span className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-60">
                    Coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
          {PRODUCTS.length % 2 === 1 && (
            <div aria-hidden className="hidden md:block bg-light-primary" />
          )}
        </div>
      </Band>

      {/* ============================ 02 REBRANDING ============================ */}
      <Band>
        <SectionHead
          index={2}
          label="Rebranding"
          kicker="Clinex → Clinex GP"
          title={
            <>
              Same Clinex,
              <br className="hidden lg:block" /> Sharper Name
            </>
          }
          intro="As the family grows, our flagship clinic system takes the name Clinex GP — making room for Clinex Dent, Clinex Flow and Clinex Sync alongside it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-black/15">
          <div
            className={`bg-light-primary ${PAD} flex flex-col justify-between gap-8 min-h-[clamp(12rem,16vw,15rem)]`}
          >
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
              Before
            </p>
            <Image
              src="/shared/equistone-clinex-logo.svg"
              alt="Clinex logo"
              width={162}
              height={162}
              className="h-[clamp(2.25rem,3.5vw,3rem)] w-auto self-start opacity-60"
            />
          </div>

          <div
            className={`group relative bg-light-primary ${PAD} flex flex-col justify-between gap-8 min-h-[clamp(12rem,16vw,15rem)]`}
          >
            <CornerFlag />
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
              After
            </p>
            <Image
              src={gp.logo}
              alt="Clinex GP logo"
              width={240}
              height={40}
              className="h-[clamp(1.75rem,2.6vw,2.4rem)] w-auto self-start"
            />
          </div>

          <div
            className={`lg:col-span-2 bg-light-primary ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)]`}
          >
            <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
              What changes for clinics
            </p>
            <p className="text-[clamp(0.95rem,1.05vw,1.05rem)] text-[#3a4347] leading-[1.8]">
              Nothing you rely on. Your login, data, workflows and support stay
              exactly as they are — only the name and logo update. Clinex GP
              becomes the general-practice member of a wider Clinex family that
              shares one patient record and billing core.
            </p>
            <div className="mt-auto">
              <LineAnimatedLink
                href="https://clinexmy.com"
                arrowVariant="light"
              >
                Visit clinexmy.com
              </LineAnimatedLink>
            </div>
          </div>
        </div>
      </Band>

      {/* ============================ 03 UPCOMING ============================ */}
      <Band>
        <SectionHead
          index={3}
          label="Upcoming"
          title="What's Next"
          intro="Four new products extending Clinex into dentistry, patient flow, pharmacy inventory and healthcare funding."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/15">
          {upcoming.map((p, i) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className={`group bg-light-primary ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)] min-h-[clamp(16rem,20vw,19rem)] transition-colors hover:bg-white`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
                  Launch {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight />
              </div>
              <Image
                src={p.logo}
                alt={p.name}
                width={240}
                height={40}
                className="mt-auto h-[clamp(1.5rem,2.2vw,2rem)] w-auto self-start"
              />
              <p className="text-[clamp(0.85rem,1vw,0.95rem)] text-[#3a4347] leading-[1.7]">
                {p.category}
              </p>
            </a>
          ))}
        </div>
      </Band>

      {/* ============================ 04 QASEH ============================ */}
      <Band dark>
        <SectionHead
          dark
          index={4}
          label="Spotlight"
          logo={
            <Image
              src={qaseh.logo}
              alt="Qaseh Platform logo"
              width={240}
              height={26}
              className="h-[clamp(1.5rem,2.8vw,2.6rem)] w-auto brightness-0 invert"
            />
          }
          kicker="Qaseh Platform"
          title={
            <>
              Corporate Funds,
              <br className="hidden lg:block" /> Real Care
            </>
          }
          intro={qaseh.summary}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15">
          {QASEH_STEPS.map((s, i) => (
            <div
              key={s.who}
              className={`bg-dark-primary ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)] min-h-[clamp(16rem,20vw,19rem)]`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[clamp(0.85rem,1vw,1rem)] font-semibold opacity-80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Tag dark>{s.who}</Tag>
              </div>
              <h3 className="mt-auto uppercase font-semibold text-[clamp(1.3rem,2vw,1.8rem)] leading-[1.05]">
                {s.title}
              </h3>
              <p className="text-[clamp(0.9rem,1vw,1rem)] text-white/60 leading-[1.8]">
                {s.text}
              </p>
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
              Early Access
            </p>
          </div>

          <div
            className={`relative lg:col-span-3 ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.5rem)] lg:min-h-[clamp(16rem,22vw,20rem)]`}
          >
            <CornerFlag />
            <h2 className="mt-auto uppercase font-semibold leading-[1.02] tracking-tight text-[clamp(2rem,4.4vw,4.4rem)]">
              Be First on the New Products
            </h2>
            <p className="lg:w-[70%] text-[clamp(0.95rem,1.1vw,1.1rem)] text-[#3a4347] leading-[1.8]">
              Running a dental practice, a busy clinic, a pharmacy, or a
              corporate healthcare fund? Talk to us about piloting Clinex Dent,
              Clinex Flow, Clinex Sync or Qaseh Platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <LineAnimatedLink href="/contact" arrowVariant="light">
                Request a Demo
              </LineAnimatedLink>
              <LineAnimatedLink
                href="/contact"
                arrowVariant="light"
                variant="green"
              >
                Partner With Us
              </LineAnimatedLink>
            </div>
          </div>
        </div>
      </Band>

      <FooterLight />
    </div>
  );
}

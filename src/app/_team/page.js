"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";

import HeaderLight from "@/components/HeaderLight";
import FooterLight from "@/components/FooterLight";
import Sidebar from "@/components/Sidebar";
import {
  PAD,
  LINE_LIGHT,
  CornerFlag,
  Tag,
  Band,
  SectionHead,
  StatTile,
} from "@/components/GridLayout";

const TEAM = [
  {
    name: "Muhamad Afiq bin Idris",
    role: "Chief Executive Officer",
    image: "/team/img_1.png",
    description:
      "Leads the overall corporate vision and strategic direction of the organization, focusing on sustainable growth, governance excellence, and long-term value creation.",
    education:
      "Bachelor of Business Administration (BBA), Universiti Malaya. Executive Leadership Program, INSEAD.",
  },
  {
    name: "Syed Mohd Zahir bin Syed Ahmad Zabidi",
    role: "Chief Strategic Officer",
    image: "/team/img_2.png",
    description:
      "Provides executive oversight across business operations with a focus on strategic expansion, operational discipline, and organizational performance.",
    education:
      "MBA, Universiti Kebangsaan Malaysia. Certified Strategic Management Professional, London Business School.",
  },
  {
    name: "Amirul Rashid bin Azmee",
    role: "Chief Financial Officer",
    image: "/team/img_3.png",
    description:
      "Oversees financial planning, capital management, and regulatory compliance, ensuring financial stability and reporting integrity.",
    education:
      "Bachelor of Accounting (Hons), Universiti Teknologi MARA (UiTM). Chartered Accountant (CA Malaysia).",
  },
  {
    name: "Mohd Danial Ariff bin Mohd Zamri",
    role: "Chief Operation Officer",
    image: "/team/img_4.png",
    description:
      "Manages operational execution across all divisions, ensuring efficiency, scalability, and consistent service delivery standards.",
    education:
      "Bachelor of Operations Management, Universiti Putra Malaysia. Lean Six Sigma Black Belt Certification.",
  },
  {
    name: "Khairulanwar bin Idris",
    role: "Chief Technology Officer",
    image: "/team/img_5.png",
    description:
      "Leads technology strategy, system architecture, and digital transformation initiatives to support scalable innovation.",
    education:
      "Bachelor of Computer Science, Universiti Sains Malaysia (USM). AWS Certified Solutions Architect.",
  },
  {
    name: "Mohamad Aidil Maula Abd. Rahim",
    role: "Chief Technical Officer",
    image: "/team/img_6.png",
    description:
      "Responsible for engineering execution, infrastructure stability, and technical delivery across enterprise systems.",
    education:
      "Bachelor of Software Engineering, Multimedia University (MMU). Microsoft Certified Azure Engineer.",
  },
  {
    name: "Wan Aqmarur Razin bin Wan Azlan",
    role: "Chief Audit Officer",
    image: "/team/img_7.png",
    description:
      "Provides independent oversight of governance, compliance, and internal control frameworks to ensure organizational integrity.",
    education:
      "Bachelor of Accounting, International Islamic University Malaysia (IIUM). Certified Internal Auditor (CIA).",
  },
];

/* Reporting hierarchy — each tier lists indexes into TEAM. */
const TIERS = [
  {
    label: "Executive Leadership",
    note: "Sets the corporate vision and strategic direction.",
    members: [0],
  },
  {
    label: "C-Suite Officers",
    note: "Report to the Chief Executive Officer.",
    members: [1, 2, 3, 4, 5, 6],
  },
];

function MemberDetail({ member }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-10 h-1 bg-dark-orange" />
      <p className="text-[clamp(0.85rem,0.95vw,0.92rem)] text-[#3a4347] leading-[1.7]">
        {member.description}
      </p>
      <div>
        <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
          Education & Certification
        </p>
        <p className="mt-1 text-[clamp(0.8rem,0.9vw,0.875rem)] text-[#3a4347] leading-[1.6]">
          {member.education}
        </p>
      </div>
    </div>
  );
}

/** Tier label cell — first column of each hierarchy row. */
function TierLabel({ tier, index }) {
  return (
    <div
      className={`md:col-span-3 lg:col-span-1 ${
        tier.members.length > 3 ? "lg:row-span-2" : ""
      } bg-light-primary ${PAD} flex flex-row lg:flex-col justify-between items-start gap-4`}
    >
      <div>
        <h3 className="mt-2 uppercase font-semibold text-[clamp(1rem,1.3vw,1.25rem)] leading-[1.25]">
          {tier.label}
        </h3>
      </div>
      <p className="max-w-[14rem] text-[clamp(0.75rem,0.85vw,0.85rem)] text-black/60 leading-[1.6] text-right lg:text-left">
        {tier.note}
      </p>
    </div>
  );
}

/** Top-of-hierarchy tile: wide, details always visible. */
function LeadTile({ member }) {
  return (
    <div className="relative md:col-span-3 bg-light-primary grid grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <CornerFlag />
      <div className="relative aspect-4/5 sm:aspect-auto sm:min-h-[clamp(20rem,28vw,26rem)] m-[clamp(1.25rem,2vw,2rem)] sm:mr-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width:1024px) 25vw, 40vw"
          className="object-contain object-bottom"
        />
      </div>
      <div
        className={`${PAD} flex flex-col justify-end gap-[clamp(1rem,1.5vw,1.5rem)]`}
      >
        <Tag>{member.role}</Tag>
        <h3 className="uppercase font-semibold leading-[1.1] text-[clamp(1.5rem,2.6vw,2.4rem)]">
          {member.name}
        </h3>
        <MemberDetail member={member} />
      </div>
    </div>
  );
}

/** Expandable member tile. */
function MemberTile({ member, isOpen, onToggle }) {
  return (
    <div className="bg-light-primary flex flex-col">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`group text-left ${PAD} flex flex-col gap-[clamp(1rem,1.5vw,1.25rem)] flex-1 cursor-pointer`}
      >
        <div className="relative w-full overflow-hidden aspect-4/5">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 100vw"
            className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-auto flex items-end justify-between gap-4">
          <div>
            <h3 className="uppercase font-semibold leading-[1.25] text-[clamp(0.9rem,1.05vw,1rem)]">
              {member.name}
            </h3>
            <p className="mt-1 text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest text-black/70">
              {member.role}
            </p>
          </div>
          <span
            aria-hidden="true"
            className={`shrink-0 flex items-center justify-center w-[clamp(1.75rem,2.2vw,2.1rem)] aspect-square rounded-full border border-black/40 text-sm transition-transform duration-300 ${
              isOpen
                ? "rotate-45 bg-dark-primary text-light-primary border-transparent"
                : ""
            }`}
          >
            +
          </span>
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`mx-[clamp(1.25rem,2vw,2rem)] mb-[clamp(1.25rem,2vw,2rem)] pt-[clamp(1rem,1.5vw,1.25rem)] border-t ${LINE_LIGHT}`}
          >
            <MemberDetail member={member} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [open, setOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? null : i));

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
              Our Team
              <br />
              Equistone Sdn Bhd
            </p>
            <span className="text-[clamp(0.6rem,0.75vw,0.7rem)] px-3 py-1 border border-black/60 font-semibold uppercase rounded-full">
              {TEAM.length} Leaders
            </span>
          </div>

          <div
            className={`lg:col-span-3 ${PAD} flex flex-col justify-end gap-[clamp(1rem,2vw,1.5rem)] lg:min-h-[clamp(20rem,30vw,28rem)]`}
          >
            <h1 className="font-semibold leading-[1.02] tracking-tight text-[clamp(2.4rem,5.4vw,5.6rem)]">
              The Team Behind Equistone&apos;s Next Phase
              <span className="text-dark-orange"> Of Growth.</span>
            </h1>
            <p className="lg:w-[70%] text-[clamp(0.95rem,1.1vw,1.1rem)] text-[#3a4347] leading-[1.8]">
              A team built to execute, scale, and deliver venture growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/15">
          <StatTile value="07" label="Leadership team" />
          <StatTile value="2019" label="Building since" />
          <StatTile value="ICT" label="Core expertise" />
          <StatTile value="KL" label="Headquartered — Integra Tower" />
        </div>
      </Band>

      {/* ============================ 01 LEADERSHIP ============================ */}
      <Band sectionClassName="pb-16">
        <SectionHead
          index={1}
          label="Leadership"
          title="Meet the Team"
          intro="Our leadership structure, from executive leadership down. Select a profile to read about each leader's role, education, and certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-px bg-black/15">
          {TIERS.map((tier, t) => (
            <Fragment key={tier.label}>
              <TierLabel tier={tier} index={t} />
              {t === 0 ? (
                <LeadTile member={TEAM[tier.members[0]]} />
              ) : (
                tier.members.map((i) => (
                  <MemberTile
                    key={TEAM[i].name}
                    member={TEAM[i]}
                    isOpen={openIndex === i}
                    onToggle={() => toggle(i)}
                  />
                ))
              )}
            </Fragment>
          ))}
        </div>
      </Band>

      <FooterLight />
    </div>
  );
}

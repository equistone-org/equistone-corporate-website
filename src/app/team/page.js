"use client";

import Image from "next/image";
import HeaderDark from "@/components/HeaderDark";
import FooterDark from "@/components/FooterDark";
import Sidebar from "@/components/Sidebar";

import gsap from "gsap";
import { useState, useRef, useLayoutEffect } from "react";
const contentMap = {
  afiq: {
    title: "Chief Executive Officer",
    description:
      "Leads the overall corporate vision and strategic direction of the organization, focusing on sustainable growth, governance excellence, and long-term value creation.",
    education:
      "Bachelor of Business Administration (BBA), Universiti Malaya. Executive Leadership Program, INSEAD.",
  },

  syed: {
    title: "Chief Executive Officer",
    description:
      "Provides executive oversight across business operations with a focus on strategic expansion, operational discipline, and organizational performance.",
    education:
      "MBA, Universiti Kebangsaan Malaysia. Certified Strategic Management Professional, London Business School.",
  },

  amirul: {
    title: "Chief Financial Officer",
    description:
      "Oversees financial planning, capital management, and regulatory compliance, ensuring financial stability and reporting integrity.",
    education:
      "Bachelor of Accounting (Hons), Universiti Teknologi MARA (UiTM). Chartered Accountant (CA Malaysia).",
  },

  danial: {
    title: "Chief Operation Officer",
    description:
      "Manages operational execution across all divisions, ensuring efficiency, scalability, and consistent service delivery standards.",
    education:
      "Bachelor of Operations Management, Universiti Putra Malaysia. Lean Six Sigma Black Belt Certification.",
  },

  khairul: {
    title: "Chief Technology Officer",
    description:
      "Leads technology strategy, system architecture, and digital transformation initiatives to support scalable innovation.",
    education:
      "Bachelor of Computer Science, Universiti Sains Malaysia (USM). AWS Certified Solutions Architect.",
  },

  aidil: {
    title: "Chief Technical Officer",
    description:
      "Responsible for engineering execution, infrastructure stability, and technical delivery across enterprise systems.",
    education:
      "Bachelor of Software Engineering, Multimedia University (MMU). Microsoft Certified Azure Engineer.",
  },

  wan: {
    title: "Chief Audit Officer",
    description:
      "Provides independent oversight of governance, compliance, and internal control frameworks to ensure organizational integrity.",
    education:
      "Bachelor of Accounting, International Islamic University Malaysia (IIUM). Certified Internal Auditor (CIA).",
  },
};
function DesktopTeamDetail({ index, detailRef, type, image, name }) {
  return (
    <div
      ref={(el) => (detailRef.current[index] = el)}
      className="col-span-3 overflow-hidden h-0 opacity-0 hidden lg:block"
    >
      <div className="bg-light-secondary px-[clamp(2rem,3vw,4rem)] w-full py-12 items-center border-b border-gray-600">
        <div className="container mx-auto flex gap-12">
          <div className="shrink-0">
            <Image
              src={image}
              alt={name}
              width={180}
              height={180}
              className="object-cover"
            />
          </div>
          {/* CONTENT */}
          <div className="flex flex-col space-y-4 max-w-3xl">
            {/* NAME */}
            <div>
              <p className="uppercase font-semibold text-[#22333B] tracking-wide">
                {name}
              </p>

              <p className="text-xs uppercase tracking-widest text-black/80 mt-1">
                {contentMap[type].title}
              </p>
            </div>

            {/* DIVIDER */}
            <div className="w-12 h-[4px] bg-light-green"></div>

            <p className="text-black/40700 leading-relaxed text-sm">
              {contentMap[type].description}
            </p>

            {/* EDUCATION */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-black/60">
                Education & Certification
              </p>
              <p className="text-sm text-black/60 mt-1">
                {contentMap[type].education}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileTeamDetail({ open, type }) {
  const content = contentMap[type];

  if (!content) return null;

  return (
    <div className="lg:hidden overflow-hidden transition-all duration-300">
      <div
        className={`${
          open ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-light-secondary py-4 border-y border-gray-600 flex gap-6">
          <div className="flex flex-col">
            <div className="w-12 h-[4px] bg-light-green mb-2" />

            <p className="text-sm text-black/70 leading-relaxed mb-6">
              {content.description}
            </p>

            <div>
              <p className="text-xs uppercase tracking-widest text-black/60">
                Education & Certification
              </p>
              <p className="text-sm text-black/80 mt-1">{content.education}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= PAGE ================= */
export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const detailRef = useRef([]);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    detailRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.to(el, {
        height: openIndex === i ? "auto" : 0,
        opacity: openIndex === i ? 1 : 0,
        duration: 0.3,
      });
    });
  }, [openIndex]);

  return (
    <div className="flex-1 flex-col items-start justify-center bg-light-primary font-sans">
      <Sidebar open={open} setOpen={setOpen} theme="dark" />
      <HeaderDark withBorder onMenu={() => setOpen(true)} />
      <main className="flex z-2 w-full relative min-h-screen flex-col bg-light-primary font-sans">
        <section className="flex mt-[clamp(2rem,4vw,3rem)] lg:mt-[clamp(3rem,5vw,4rem)] flex-col items-start w-full">
          <div className="container mx-auto">
            <h1 className="my-[clamp(2rem,4vw,3rem)] text-[clamp(3rem,7vw,6rem)] leading-[1.1] font-semibold text-dark-primary">
              The Team Behind
              <br />
              Equistone’s Next Phase <br />
              <span className="text-dark-orange">Of Growth.</span>
            </h1>

            <p className="mt-[clamp(1.5rem,3vw,2rem)] max-w-2xl leading-[1.7] text-[clamp(1rem,1.2vw,1.125rem)] text-dark-primary">
              A team built to execute, scale, and deliver venture growth.
            </p>
          </div>

          {/* CEO BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-[clamp(2rem,4vw,3rem)] text-dark-primary w-full">
            <div
              onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
              className="col-span-1 lg:col-span-3 bg-light-primary border-y border-gray-400 px-[clamp(0.2rem,3vw,4rem)] pt-[clamp(1.5rem,3vw,2rem)] cursor-pointer"
            >
              <div className="container mx-auto flex justify-center">
                <div className="flex flex-col">
                  {/* CARD */}
                  <div
                    onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                    className="cursor-pointer flex justify-between"
                  >
                    <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-300 px-6 flex flex-col space-y-2 w-[80%]">
                      <p className="uppercase font-semibold text-[clamp(0.85rem,1vw,1rem)]">
                        MUHAMAD AFIQ BIN IDRIS
                      </p>
                      <p className="text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-widest text-black/80 mt-1">
                        Chief Executive Officer
                      </p>
                    </div>

                    <div className="w-[clamp(120px,15vw,180px)] flex items-end justify-end">
                      <Image
                        src="/team/img_1.png"
                        alt="Afiq"
                        width={162}
                        height={42}
                        className="w-42 h-auto"
                      />
                    </div>
                  </div>

                  {/* MOBILE DETAIL (INLINE UNDER CARD) */}
                  <div className="lg:hidden overflow-hidden transition-all duration-300">
                    <div
                      className={`${openIndex === 0 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                    >
                      <MobileTeamDetail open={openIndex === 0} type="afiq" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DesktopTeamDetail
              index={0}
              detailRef={detailRef}
              type="afiq"
              image="/team/img_1.png"
              name="MUHAMAD AFIQ BIN IDRIS"
            />

            {/* SECOND ROW (3 TEAM CARDS) */}
            <div className="col-span-1 lg:col-span-3 bg-light-secondary border-b border-gray-400 px-[clamp(0.2rem,3vw,4rem)] pt-[clamp(1.5rem,3vw,2rem)] pb-6 sm:pb-0">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,2vw,2rem)]">
                {/* ================= SYED ================= */}

                <div className="flex flex-col">
                  <div
                    onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                    className="cursor-pointer flex justify-between"
                  >
                    <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-300 px-6 flex flex-col space-y-2 w-[80%]">
                      <p className="uppercase font-semibold text-[clamp(0.85rem,1vw,1rem)]">
                        SYED MOHD ZAHIR BIN SYED AHMAD ZABIDI
                      </p>
                      <p className="text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-widest text-black/80 mt-1">
                        Chief Strategic Officer
                      </p>
                    </div>

                    <div className="w-[clamp(120px,15vw,180px)] flex items-end justify-end">
                      <Image
                        src="/team/img_2.png"
                        alt="Syed"
                        width={162}
                        height={42}
                        className="w-42 h-auto"
                      />
                    </div>
                  </div>

                  <div className="lg:hidden overflow-hidden transition-all duration-300">
                    <div
                      className={`${openIndex === 1 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                    >
                      <MobileTeamDetail open={openIndex === 1} type="syed" />
                    </div>
                  </div>
                </div>

                {/* ================= AMIRUL ================= */}
                <div className="flex flex-col">
                  <div
                    onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                    className="cursor-pointer flex justify-between"
                  >
                    <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-300 px-6 flex flex-col space-y-2 w-[80%]">
                      <p className="uppercase font-semibold text-[clamp(0.85rem,1vw,1rem)]">
                        AMIRUL RASHID BIN AZMEE
                      </p>
                      <p className="text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-widest text-black/80 mt-1">
                        Chief Financial Officer
                      </p>
                    </div>

                    <div className="w-[clamp(120px,15vw,180px)] flex items-end justify-end">
                      <Image
                        src="/team/img_3.png"
                        alt="Amirul"
                        width={162}
                        height={42}
                        className="w-42 h-auto"
                      />
                    </div>
                  </div>

                  <div className="lg:hidden overflow-hidden transition-all duration-300">
                    <div
                      className={`${openIndex === 2 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                    >
                      <MobileTeamDetail open={openIndex === 2} type="amirul" />
                    </div>
                  </div>
                </div>

                {/* ================= DANIAL ================= */}
                <div className="flex flex-col">
                  <div
                    onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
                    className="cursor-pointer flex justify-between"
                  >
                    <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-300 px-6 flex flex-col space-y-2 w-[80%]">
                      <p className="uppercase font-semibold text-[clamp(0.85rem,1vw,1rem)]">
                        MOHD DANIAL ARIFF BIN MOHD ZAMRI
                      </p>
                      <p className="text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-widest text-black/80 mt-1">
                        Chief Operation Officer
                      </p>
                    </div>

                    <div className="w-[clamp(120px,15vw,180px)] flex items-end justify-end">
                      <Image
                        src="/team/img_4.png"
                        alt="Danial"
                        width={162}
                        height={42}
                        className="w-42 h-auto"
                      />
                    </div>
                  </div>

                  <div className="lg:hidden overflow-hidden transition-all duration-300">
                    <div
                      className={`${openIndex === 3 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                    >
                      <MobileTeamDetail open={openIndex === 3} type="danial" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <DesktopTeamDetail
              index={1}
              detailRef={detailRef}
              type="syed"
              image="/team/img_2.png"
              name="SYED MOHD ZAHIR BIN SYED AHMAD ZABIDI"
            />
            <DesktopTeamDetail
              index={2}
              detailRef={detailRef}
              type="amirul"
              image="/team/img_3.png"
              name="AMIRUL RASHID BIN AZMEE"
            />
            <DesktopTeamDetail
              index={3}
              detailRef={detailRef}
              type="danial"
              image="/team/img_4.png"
              name="MOHD DANIAL ARIFF BIN MOHD ZAMRI"
            />

            <div className="col-span-1 lg:col-span-3 bg-light-primary border-b border-gray-400 px-[clamp(0.2rem,3vw,4rem)] pt-6 pb-6 sm:pb-0">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <div
                    onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
                    className="cursor-pointer flex justify-between"
                  >
                    <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-300 px-6 flex flex-col space-y-2 w-[80%]">
                      <p className="uppercase font-semibold text-[clamp(0.85rem,1vw,1rem)]">
                        KHAIRULANWAR BIN IDRIS
                      </p>
                      <p className="text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-widest text-black/80 mt-1">
                        Chief Technology Officer
                      </p>
                    </div>

                    <div className="w-[clamp(120px,15vw,180px)] flex items-end justify-end">
                      <Image
                        src="/team/img_5.png"
                        alt="Khairul"
                        width={162}
                        height={42}
                        className="w-42 h-auto"
                      />
                    </div>
                  </div>

                  <div className="lg:hidden overflow-hidden transition-all duration-300">
                    <div
                      className={`${openIndex === 4 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                    >
                      <MobileTeamDetail open={openIndex === 4} type="khairul" />
                    </div>
                  </div>
                </div>

                {/* ================= AMIRUL ================= */}
                <div className="flex flex-col">
                  <div
                    onClick={() => setOpenIndex(openIndex === 5 ? null : 5)}
                    className="cursor-pointer flex justify-between"
                  >
                    <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-300 px-6 flex flex-col space-y-2 w-[80%]">
                      <p className="uppercase font-semibold text-[clamp(0.85rem,1vw,1rem)]">
                        MOHAMAD AIDIL MAULA ABD. RAHIM
                      </p>
                      <p className="text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-widest text-black/80 mt-1">
                        Chief Technical Officer
                      </p>
                    </div>

                    <div className="w-[clamp(120px,15vw,180px)] flex items-end justify-end">
                      <Image
                        src="/team/img_6.png"
                        alt="Aidil"
                        width={162}
                        height={42}
                        className="w-42 h-auto"
                      />
                    </div>
                  </div>

                  <div className="lg:hidden overflow-hidden transition-all duration-300">
                    <div
                      className={`${openIndex === 5 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                    >
                      <MobileTeamDetail open={openIndex === 5} type="aidil" />
                    </div>
                  </div>
                </div>

                {/* ================= DANIAL ================= */}
                <div className="flex flex-col">
                  <div
                    onClick={() => setOpenIndex(openIndex === 6 ? null : 6)}
                    className="cursor-pointer flex justify-between"
                  >
                    <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-300 px-6 flex flex-col space-y-2 w-[80%]">
                      <p className="uppercase font-semibold text-[clamp(0.85rem,1vw,1rem)]">
                        WAN AQMARUR RAZIN BIN WAN AZLAN
                      </p>
                      <p className="text-[clamp(0.75rem,1vw,0.875rem)] uppercase tracking-widest text-black/80 mt-1">
                        Chief Audit Officer
                      </p>
                    </div>

                    <div className="w-[clamp(120px,15vw,180px)] flex items-end justify-end">
                      <Image
                        src="/team/img_7.png"
                        alt="Wan"
                        width={162}
                        height={42}
                        className="w-42 h-auto"
                      />
                    </div>
                  </div>

                  <div className="lg:hidden overflow-hidden transition-all duration-300">
                    <div
                      className={`${openIndex === 6 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                    >
                      <MobileTeamDetail open={openIndex === 6} type="wan" />
                    </div>
                  </div>
                </div>

                {/* <div
                  onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
                  className="cursor-pointer flex justify-between"
                >
                  <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-300 px-6 flex flex-col space-y-2 w-[60%]">
                    <p className="uppercase font-semibold text-sm lg:text-base">
                      KHAIRULANWAR BIN IDRIS
                    </p>
                    <p className="text-sm uppercase tracking-widest text-black/80 mt-1">
                      Chief Technology Officer
                    </p>
                  </div>

                  <div className="w-[120px] sm:w-[150px] lg:w-[180px] flex items-end justify-end">
                    <Image
                      src="/team/img_5.png"
                      alt="Khairul"
                      width={162}
                      height={42}
                      className="w-42 h-auto"
                    />
                  </div>
                </div>

                <div
                  onClick={() => setOpenIndex(openIndex === 5 ? null : 5)}
                  className="cursor-pointer flex justify-between"
                >
                  <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-300 px-6 flex flex-col space-y-2 w-[60%]">
                    <p className="uppercase font-semibold text-sm lg:text-base">
                      MOHAMAD AIDIL MAULA ABD. RAHIM
                    </p>
                    <p className="text-sm uppercase tracking-widest text-black/80 mt-1">
                      Chief Technical Officer
                    </p>
                  </div>

                  <div className="w-[120px] sm:w-[150px] lg:w-[180px] flex items-end justify-end">
                    <Image
                      src="/team/img_6.png"
                      alt="Aidil"
                      width={162}
                      height={42}
                      className="w-42 h-auto"
                    />
                  </div>
                </div>

                <div
                  onClick={() => setOpenIndex(openIndex === 6 ? null : 6)}
                  className="cursor-pointer flex justify-between"
                >
                  <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-300 px-6 flex flex-col space-y-2 w-[60%]">
                    <p className="uppercase font-semibold text-sm lg:text-base">
                      WAN AQMARUR RAZIN BIN WAN AZLAN
                    </p>
                    <p className="text-sm uppercase tracking-widest text-black/80 mt-1">
                      Chief Audit Officer
                    </p>
                  </div>

                  <div className="w-[120px] sm:w-[150px] lg:w-[180px] flex items-end justify-end">
                    <Image
                      src="/team/img_7.png"
                      alt="Wan"
                      width={162}
                      height={42}
                      className="w-42 h-auto"
                    />
                  </div>
                </div> */}
              </div>
            </div>

            <DesktopTeamDetail
              index={4}
              detailRef={detailRef}
              type="khairul"
              image="/team/img_5.png"
              name="KHAIRULANWAR BIN IDRIS"
            />
            <DesktopTeamDetail
              index={5}
              detailRef={detailRef}
              type="aidil"
              image="/team/img_6.png"
              name="MOHAMAD AIDIL MAULA ABD. RAHIM"
            />
            <DesktopTeamDetail
              index={6}
              detailRef={detailRef}
              type="wan"
              image="/team/img_7.png"
              name="WAN AQMARUR RAZIN BIN WAN AZLAN"
            />
          </div>
        </section>
      </main>
      <FooterDark />
    </div>
  );
}

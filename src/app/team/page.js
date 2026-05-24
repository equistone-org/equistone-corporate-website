"use client";

import Image from "next/image";
import HeaderDark from "@/components/HeaderDark";
import FooterDark from "@/components/FooterDark";
import gsap from "gsap";
import { useState, useRef, useLayoutEffect } from "react";

function TeamDetail({ index, detailRef, type, image, name }) {
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
  return (
    <div
      ref={(el) => (detailRef.current[index] = el)}
      className="col-span-3 overflow-hidden h-0 opacity-0"
    >
      <div className="bg-secondary-light px-[clamp(2rem,3vw,4rem)] w-full py-12 items-center border-b border-gray-600">
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

              <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                {contentMap[type].title}
              </p>
            </div>

            {/* DIVIDER */}
            <div className="w-12 h-[2px] bg-gray-300"></div>

            <p className="text-gray-700 leading-relaxed text-sm">
              {contentMap[type].description}
            </p>

            {/* EDUCATION */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Education & Certification
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {contentMap[type].education}
              </p>
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
    <div className="flex-1 flex-col items-start justify-center bg-primary-light font-sans">
      <main className="flex z-2 w-full relative min-h-screen flex-col bg-primary-dark font-sans">
        <HeaderDark />

        {/* TITLE */}
        <section className="flex mt-10 lg:mt-12 flex-col items-start w-full">
          <div className="px-[clamp(2rem,3vw,4rem)] w-full">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] lg:text-6xl container mx-auto text-white font-medium">
              TEAM
            </h1>
          </div>
          <div className="px-[clamp(2rem,3vw,4rem)] w-full">
            <p className="container mx-auto text-base lg:text-xl text-white font-medium pt-4">
              A team of experienced leaders shaping strategy, innovation, and
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 text-black w-full">
            <div
              onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
              className="col-span-1 lg:col-span-3 bg-primary-light border-b border-gray-400 px-[clamp(2rem,3vw,4rem)] pt-6 cursor-pointer"
            >
              <div className="container mx-auto flex justify-center">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2">
                  <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-400 px-6 flex flex-col">
                    <p className="uppercase font-semibold text-sm lg:text-base">
                      MUHAMAD AFIQ BIN IDRIS
                    </p>

                    <p className="text-sm">Chief Executive Officer</p>
                  </div>

                  <div className="w-[120px] sm:w-[150px] lg:w-[180px] flex items-end">
                    <Image
                      src="/team/img_1.png"
                      alt="Afiq"
                      width={162}
                      height={46}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <TeamDetail
              index={0}
              detailRef={detailRef}
              type="afiq"
              image="/team/img_1.png"
              name="MUHAMAD AFIQ BIN IDRIS"
            />

            <div className="col-span-1 lg:col-span-3 bg-secondary-light border-b border-gray-400 px-[clamp(2rem,3vw,4rem)] pt-6">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                  className="cursor-pointer flex justify-between"
                >
                  <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-400 px-6 flex flex-col space-y-2">
                    <p className="uppercase font-semibold text-sm lg:text-base">
                      SYED MOHD ZAHIR BIN SYED AHMAD ZABIDI
                    </p>
                    <p className="text-sm">Chief Operation Officer</p>
                  </div>

                  <div className="w-[120px] sm:w-[150px] lg:w-[180px] flex flex-col items-start justify-end h-full">
                    <Image
                      src="/team/img_2.png"
                      alt="Syed"
                      width={162}
                      height={42}
                    />
                  </div>
                </div>

                <div
                  onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                  className="cursor-pointer flex justify-between"
                >
                  <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-400 px-6 flex flex-col space-y-2">
                    <p className="uppercase font-semibold text-sm lg:text-base">
                      AMIRUL RASHID BIN AZMEE
                    </p>
                    <p className="text-sm">Chief Financial Officer</p>
                  </div>

                  <div className="w-[120px] sm:w-[150px] lg:w-[180px] flex flex-col items-start justify-end h-full">
                    <Image
                      src="/team/img_3.png"
                      alt="Amirul"
                      width={182}
                      height={36}
                    />
                  </div>
                </div>

                <div
                  onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
                  className="cursor-pointer flex justify-between"
                >
                  <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-400 px-6 flex flex-col space-y-2">
                    <p className="uppercase font-semibold text-sm lg:text-base">
                      MOHD DANIAL ARIFF BIN MOHD ZAMRI
                    </p>
                    <p className="text-sm">Chief Operation Officer</p>
                  </div>

                  <div className="w-[120px] sm:w-[150px] lg:w-[180px] flex flex-col items-start justify-end h-full">
                    <Image
                      src="/team/img_4.png"
                      alt="Danial"
                      width={162}
                      height={46}
                    />
                  </div>
                </div>
              </div>
            </div>

            <TeamDetail
              index={1}
              detailRef={detailRef}
              type="syed"
              image="/team/img_2.png"
              name="SYED MOHD ZAHIR BIN SYED AHMAD ZABIDI"
            />
            <TeamDetail
              index={2}
              detailRef={detailRef}
              type="amirul"
              image="/team/img_3.png"
              name="AMIRUL RASHID BIN AZMEE"
            />
            <TeamDetail
              index={3}
              detailRef={detailRef}
              type="danial"
              image="/team/img_4.png"
              name="MOHD DANIAL ARIFF BIN MOHD ZAMRI"
            />

            <div className="col-span-1 lg:col-span-3 bg-primary-light border-b border-gray-400 px-[clamp(2rem,3vw,4rem)] pt-6">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div
                  onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
                  className="cursor-pointer flex justify-between"
                >
                  <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-400 px-6 flex flex-col space-y-2">
                    <p className="uppercase font-semibold text-sm lg:text-base">
                      KHAIRULANWAR BIN IDRIS
                    </p>
                    <p className="text-sm">Chief Technology Officer</p>
                  </div>

                  <div className="w-[120px] sm:w-[150px] lg:w-[180px] flex items-end justify-end">
                    <Image
                      src="/team/img_5.png"
                      alt="Khairul"
                      width={162}
                      height={46}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  onClick={() => setOpenIndex(openIndex === 5 ? null : 5)}
                  className="cursor-pointer flex justify-between"
                >
                  <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-400 px-6 flex flex-col space-y-2">
                    <p className="uppercase font-semibold text-sm lg:text-base">
                      MOHAMAD AIDIL MAULA ABD. RAHIM
                    </p>
                    <p className="text-sm">Chief Technical Officer</p>
                  </div>

                  <div className="w-[120px] sm:w-[150px] lg:w-[180px] flex items-end justify-end">
                    <Image
                      src="/team/img_6.png"
                      alt="Aidil"
                      width={162}
                      height={46}
                    />
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  onClick={() => setOpenIndex(openIndex === 6 ? null : 6)}
                  className="cursor-pointer flex justify-between"
                >
                  <div className="mt-[clamp(1rem,3vw,2rem)] border-l border-gray-400 px-6 flex flex-col space-y-2">
                    <p className="uppercase font-semibold text-sm lg:text-base">
                      WAN AQMARUR RAZIN BIN WAN AZLAN
                    </p>
                    <p className="text-sm">Chief Audit Officer</p>
                  </div>

                  <div className="w-[120px] sm:w-[150px] lg:w-[180px] flex items-end justify-end">
                    <Image
                      src="/team/img_7.png"
                      alt="Wan"
                      width={162}
                      height={46}
                    />
                  </div>
                </div>
              </div>
            </div>
            <TeamDetail
              index={4}
              detailRef={detailRef}
              type="khairul"
              image="/team/img_5.png"
              name="KHAIRULANWAR BIN IDRIS"
            />
            <TeamDetail
              index={5}
              detailRef={detailRef}
              type="aidil"
              image="/team/img_6.png"
              name="MOHAMAD AIDIL MAULA ABD. RAHIM"
            />
            <TeamDetail
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

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-start justify-center bg-[#EFF4F6] font-sans ">
      <main className="flex w-full min-h-screen flex-col bg-[#22333B] font-sans">
        <header className="w-full flex justify-between py-12 px-16">
          <Link href="/">
            <Image
              className="dark:invert"
              src="/equistone-logo.svg"
              alt="Equistone Logo"
              width={200}
              height={100}
              priority
            />
          </Link>
          <div className="flex flex-row space-x-26 items-center font-medium uppercase text-base">
            <div className="flex flex-row space-x-8">
              <div>ABOUT</div>
              <div>
                <Link href="/team">TEAM</Link>
              </div>
              <div>PRODUCT</div>
            </div>
            <div className="text-sm px-4 py-2 bg-white font-semibold text-[#22333B]">
              LET TALK
            </div>
          </div>
        </header>
        <section className="grid grid-cols-2 mt-12 bg-[#EFF4F6] py-12 text-black w-full">
          <div className="col-span-2">
            <p className="text-6xl text-black font-medium w-[80%] leading-14 px-16">
              ABOUT
            </p>
            <p className="flex mt-12 flex-col items-start text-base w-full px-62 text-justify mb-12">
              Equistone Sdn. Bhd. (“ESB”) is a Malaysian-based investment
              holding and digital solutions company focused on building
              long-term value through strategic investments, advisory services,
              and technology enablement. With a multidisciplinary team
              experienced in corporate finance, investment structuring, project
              development, and digital transformation, ESB serves as both an
              investor and a strategic advisor to high-impact ventures across
              Malaysia. As an investment and advisory platform, ESB identifies,
              finances, and develops opportunities with strong commercial
              potential while offering end-to-end advisory support across
              financial modelling, project structuring, capital optimisation,
              and execution planning. Our track record includes the development
              of ESB’s in-house cloud-based Clinic Management System (“Clinex”),
              currently deployed across 21 clinics in the Klang Valley,
              demonstrating our ability to turn concepts into scalable,
              commercially viable digital solutions. Equistone’s purpose is to
              become one of Malaysia’s leading platforms for purpose-driven
              investments, strategic advisory, and technology-backed value
              creation, supporting partners, clients, and ecosystems throughout
              their growth journeys
            </p>
          </div>
          <div className="col-span-1 border border-black ml-62 p-14">
            <p className="text-4xl text-black font-medium mb-6">PROBLEM</p>
            <p className="text-base">
              Many high-potential businesses in Malaysia struggle to scale due
              to limited access to smart capital, weak strategic and financial
              planning, and outdated operational systems. Industries remain
              hindered by fragmented advisory support and slow digital adoption,
              causing missed opportunities, inefficiencies, and an inability to
              convert strong ideas into viable, future-ready ventures.
            </p>
          </div>
          <div className="col-span-1 border border-black mr-62 p-14 bg-amber-500"></div>
          <div className="col-span-1 border border-black ml-62 p-14 bg-amber-500"></div>{" "}
          <div className="col-span-1 border border-black mr-62 p-14">
            <p className="text-4xl text-black font-medium mb-6">SOLUTION</p>
            <p className="text-base">
              ESB bridges this gap by combining strategic investment, advisory
              expertise, and digital innovation into a single value-creation
              platform. With deep expertise in corporate finance, capital
              structure, and project execution, we enable organisations to drive
              transformation, achieve sustainable growth, and build impactful,
              commercially successful ventures.
            </p>
          </div>{" "}
        </section>
        <footer className="w-full my-12">
          <div className="border-t border-white flex px-16 mt-26 justify-between items-end">
            <div className="flex flex-row space-x-12">
              <p>2025 Equistone Sdn Bhd</p> <p>Privacy Policy</p>
            </div>
            <div className="flex flex-col w-[12%] mt-6 space-y-4">
              <div className="flex font-normal text-base">
                20ug, Jalan Yong Shook Lin, Bandar Baru Petaling Jaya, 46200
                Petaling Jaya Selangor  Malaysia
              </div>
              <p className="flex font-normal text-base">admin@equistone.com</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

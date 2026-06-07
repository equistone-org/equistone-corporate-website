import Link from "next/link";
import EquistoneLogo from "@/components/LogoEquistone";

export default function HeaderDark({ withBorder = false }) {
  return (
    <header
      className={`${withBorder ? "border-b border-gray-400" : ""} sticky top-0 z-1000  bg-dark-secondary`}
    >
      <div className="px-[clamp(2rem,3vw,4rem)] w-full">
        <div className="container mx-auto flex justify-between py-2 lg:py-4">
          <Link href="/">
            <EquistoneLogo color="#FFFFFF" />
          </Link>
          <div className="flex flex-row space-x-10 lg:space-x-26 items-center font-medium uppercase text-sm lg:text-base text-white/80">
            <div className="flex flex-row space-x-6 lg:space-x-8">
              <div>
                <Link href="/about">ABOUT</Link>
              </div>

              <div>
                <Link href="/ventures">VENTURES</Link>
              </div>

              <div>
                <Link href="/investment">INVESTMENT</Link>
              </div>

              <div>
                <Link href="/sectors">SECTORS</Link>
              </div>

              <div>
                <Link href="/insights">INSIGHTS</Link>
              </div>

              <div>
                <Link href="/team">TEAM</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-2 lg:space-x-6 items-center font-medium uppercase text-sm lg:text-base text-light-primary">
            <div className="text-xs lg:text-sm px-3 lg:px-4 py-2 font-semibold text-light-primary border border-white uppercase">
              Contact
            </div>
            <div className="flex flex-row space-x-10 lg:space-x-26 items-center font-medium uppercase text-sm lg:text-base text-white/80">
              <div className="text-xs lg:text-sm px-3 lg:px-4 py-2 bg-white font-semibold text-[#22333B] uppercase">
                Partner With Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import EquistoneLogo from "@/components/LogoEquistone";
import Image from "next/image";

export default function HeaderLight({ withBorder = false, onMenu }) {
  return (
    <>
      <header
        className={`${withBorder ? "border-b border-gray-400" : ""} sticky top-0 z-100 bg-white  flex items-center justify-between`}
      >
        <button
          onClick={onMenu}
          className="lg:hidden text-xs px-3 py-2 border border-black text-black uppercase font-semibold"
        >
          =
        </button>
        <div className="px-[clamp(0.02rem,3vw,4rem)] w-full">
          <div className="container mx-auto flex items-center justify-between py-[clamp(0.5rem,1vw,1rem)]">
            <>
              {/* Desktop */}
              <div className="hidden lg:flex items-center gap-4">
                <Link href="/" className="shrink-0">
                  <EquistoneLogo color="#000000" secColor="#dda15e"/>
                </Link>
              </div>

              {/* Tablet & Mobile */}
              <div className="block lg:hidden">
                <Image
                  src="/shared/equistone-symbol-dark-logo.svg"
                  alt="Equistone Dark"
                  width={162}
                  height={46}
                  className="w-12 h-12"
                />
              </div>
            </>
            {/* NAV (desktop only) */}
            <div className="hidden lg:flex flex-row items-center font-medium uppercase text-sm text-black gap-8">
              <Link href="/about">ABOUT</Link>
              <Link href="/ventures">VENTURES</Link>
              <Link href="/investment">INVESTMENT</Link>
              <Link href="/sectors">SECTORS</Link>
              <Link href="/insights">INSIGHTS</Link>
              <Link href="/team">TEAM</Link>
            </div>
            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="text-xs lg:text-sm px-3 py-2 font-semibold text-black border border-black uppercase">
                Contact
              </div>

              <div className="text-xs lg:text-sm px-3 py-2 bg-black font-semibold text-white uppercase">
                Partner With Us
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

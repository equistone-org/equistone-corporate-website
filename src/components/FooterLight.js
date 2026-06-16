import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full lg:sticky lg:bottom-0 z-0 bg-light-primary">
      <div className="border-t-2 border-black/20 text-black/60 px-[clamp(1rem,3vw,3rem)] py-[clamp(2rem,5vw,4rem)]">
        <div className="container mx-auto">
          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row justify-between gap-[clamp(2rem,4vw,4rem)]">
            {/* LEFT - BRAND */}
            <div className="w-full lg:w-[35%]">
              <div className="w-full max-w-[clamp(160px,20vw,260px)]">
                <Image
                  src="/shared/equistone-dark-logo.svg"
                  alt="Equistone logo"
                  width={2000}
                  height={200}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <p className="mt-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.8rem,1vw,0.9rem)] text-[#3a4347] leading-[1.8]">
                Malaysia's purpose-driven investment holding and
                venture-building company operating in the ICT sector.
                Incorporated 2019 — building, funding, and scaling technology
                ventures that create lasting value.
              </p>

              <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.8rem,1vw,0.9rem)] text-[#3a4347] leading-[1.8]">
                Level 9, Integra Tower, 348 Jalan Tun Razak, 50400 Kuala Lumpur,
                Malaysia
              </p>

              <p className="mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.8rem,1vw,0.9rem)] text-[#3a4347]">
                admin@equistone.com
              </p>

              <a
                href="https://linkedin.com"
                className="mt-[clamp(1rem,1.5vw,1.5rem)] inline-block text-[clamp(0.8rem,1vw,0.9rem)] font-semibold text-black underline"
              >
                Follow on LinkedIn
              </a>
            </div>

            {/* CENTER - NAV */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,3vw,2.5rem)] text-[clamp(0.8rem,1vw,0.9rem)]">
              {/* COMPANY */}
              <div>
                <h4 className="font-semibold text-black mb-[clamp(0.75rem,1vw,1rem)]">
                  Company
                </h4>

                <ul className="space-y-[clamp(0.5rem,1vw,0.75rem)] text-[#3a4347]">
                  <li>
                    <Link href="#">About Equistone</Link>
                  </li>
                  <li>
                    <Link href="#">Leadership Team</Link>
                  </li>
                  <li>
                    <Link href="#">Our Ventures</Link>
                  </li>
                  <li>
                    <Link href="#">Business Sectors</Link>
                  </li>
                  <li>
                    <Link href="#">Insights</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* INVESTMENT */}
              <div>
                <h4 className="font-semibold text-black mb-[clamp(0.75rem,1vw,1rem)]">
                  Investment
                </h4>

                <ul className="space-y-[clamp(0.5rem,1vw,0.75rem)] text-[#3a4347]">
                  <li>
                    <Link href="#">Investment Overview</Link>
                  </li>
                  <li>
                    <Link href="#">Investment Philosophy</Link>
                  </li>
                  <li>
                    <Link href="#">Investment Criteria</Link>
                  </li>
                  <li>
                    <Link href="#">Partner With Us</Link>
                  </li>
                  <li>
                    <Link href="#">Submit a Venture</Link>
                  </li>
                </ul>
              </div>

              {/* VENTURES */}
              <div>
                <h4 className="font-semibold text-black mb-[clamp(0.75rem,1vw,1rem)]">
                  Ventures
                </h4>

                <ul className="space-y-[clamp(0.5rem,1vw,0.75rem)] text-[#3a4347]">
                  <li>
                    <Link href="#">Clinex — Healthcare Tech</Link>
                  </li>
                  <li>
                    <a
                      href="https://clinexmy.com"
                      target="_blank"
                      className="underline flex flex-row space-x-2 items-center"
                    >
                      <span>clinexmy.com</span>
                      <Image
                        src="/icons/equistone-arrow-dark-icon.svg"
                        alt="Arrow"
                        width={12}
                        height={12}
                        className="h-2 w-auto"
                      />
                    </a>
                  </li>
                </ul>

                <h4 className="font-semibold text-black mt-[clamp(1.5rem,3vw,2rem)] mb-[clamp(0.75rem,1vw,1rem)]">
                  Legal
                </h4>

                <ul className="space-y-[clamp(0.5rem,1vw,0.75rem)] text-[#3a4347]">
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Terms of Use</Link>
                  </li>
                  <li>
                    <Link href="#">Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-[clamp(2rem,4vw,3rem)] border-t border-gray-300 pt-[clamp(1rem,2vw,1.5rem)] flex flex-col lg:flex-row justify-between gap-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.75rem,1vw,0.875rem)] text-[#3a4347]">
            <p>
              © {new Date().getFullYear()} Equistone Sdn Bhd. All rights
              reserved.
            </p>

            <p>
              SSM Registration: 201901009537 (1318865-U) · Kuala Lumpur,
              Malaysia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full sticky bottom-0 h-fit z-0 bg-light-primary">
      <div className="border-t border-black text-black/60 px-[clamp(1rem,3vw,3rem)] py-[clamp(1rem,3vw,2rem)]">
        <div className="container mx-auto">
          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* LEFT - BRAND */}
            <div className="w-full lg:w-[35%]">
              <div className="w-full max-w-[200px] lg:max-w-[260px]">
                <Image
                  src="/shared/equistone-dark-logo.svg"
                  alt="Equistone logo"
                  width={2000}
                  height={200}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <p className="mt-6 text-sm text-[#3a4347] leading-7">
                Malaysia's purpose-driven investment holding and
                venture-building company operating in the ICT sector.
                Incorporated 2019 — building, funding, and scaling technology
                ventures that create lasting value.
              </p>

              <p className="mt-4 text-sm text-[#3a4347] leading-7">
                Level 9, Integra Tower, 348 Jalan Tun Razak, 50400 Kuala Lumpur,
                Malaysia
              </p>

              <p className="mt-2 text-sm text-[#3a4347]">admin@equistone.com</p>

              <a
                href="https://linkedin.com"
                className="mt-4 inline-block text-sm font-semibold text-black underline"
              >
                Follow on LinkedIn
              </a>
            </div>

            {/* CENTER - NAV */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
              <div>
                <h4 className="font-semibold text-black mb-3">Company</h4>
                <ul className="space-y-2 text-[#3a4347]">
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

              <div>
                <h4 className="font-semibold text-black mb-3">Investment</h4>
                <ul className="space-y-2 text-[#3a4347]">
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

              <div>
                <h4 className="font-semibold text-black mb-3">Ventures</h4>
                <ul className="space-y-2 text-[#3a4347]">
                  <li>
                    <Link href="#">Clinex — Healthcare Tech</Link>
                  </li>
                  <li>
                    <a
                      href="https://clinexmy.com"
                      target="_blank"
                      className="underline"
                    >
                      clinexmy.com ↗
                    </a>
                  </li>
                </ul>

                <h4 className="font-semibold text-black mt-6 mb-3">Legal</h4>
                <ul className="space-y-2 text-[#3a4347]">
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

          {/* SOCIAL */}
          {/* <div className="mt-10 flex justify-end gap-4">
            <Image
              src="/footer/equistone-light-telegram-icon.svg"
              alt="Telegram"
              width={22}
              height={22}
              className="invert"
            />
            <Image
              src="/footer/equistone-light-discord-icon.svg"
              alt="Discord"
              width={22}
              height={22}
              className="invert"
            />
          </div> */}

          {/* BOTTOM */}
          <div className="mt-10 border-t border-gray-300 pt-6 flex flex-col lg:flex-row justify-between gap-4 text-sm text-[#3a4347]">
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

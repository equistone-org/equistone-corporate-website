import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full lg:sticky lg:bottom-0 h-fit z-0 bg-dark-primary">
      <div className="mx-auto border-t-2 border-white/20 text-light-primary px-[clamp(1rem,3vw,3rem)] py-[clamp(1rem,3vw,2rem)]">
        <div className="container mx-auto">
          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* BRAND */}
            <div className="w-full lg:w-[35%]">
              <div className="w-full max-w-[180px] lg:max-w-[260px]">
                <Image
                  src="/shared/equistone-light-logo.svg"
                  alt="Equistone logo"
                  width={2000}
                  height={200}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <p className="mt-6 text-sm text-white/60 leading-7">
                Malaysia's purpose-driven investment holding and
                venture-building company operating in the ICT sector.
                Incorporated 2019 — building, funding, and scaling technology
                ventures that create lasting value.
              </p>

              <p className="mt-4 text-sm text-white/60 leading-7">
                Level 9, Integra Tower, 348 Jalan Tun Razak, 50400 Kuala Lumpur,
                Malaysia
              </p>

              <p className="mt-2 text-sm text-white/60">admin@equistone.com</p>

              <a
                href="https://linkedin.com"
                className="mt-4 inline-block text-sm font-semibold text-light-primary underline"
              >
                Follow on LinkedIn
              </a>
            </div>

            {/* NAVIGATION */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
              {/* Company */}
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-white/60">
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

              {/* Investment */}
              <div>
                <h4 className="font-semibold mb-4">Investment</h4>
                <ul className="space-y-2 text-white/60">
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

              {/* Ventures + Legal */}
              <div>
                <h4 className="font-semibold mb-4">Ventures</h4>
                <ul className="space-y-2 text-white/60">
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
                        src="/icons/equistone-arrow-light-icon.svg"
                        alt="Arrow"
                        width={12}
                        height={12}
                        className="h-2 w-auto"
                      />
                    </a>
                  </li>
                </ul>

                <h4 className="font-semibold mt-6 mb-4">Legal</h4>
                <ul className="space-y-2 text-white/60">
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
          {/* <div className="mt-12 flex justify-start lg:justify-end gap-4">
            <Image
              src="/footer/equistone-light-telegram-icon.svg"
              alt="Telegram"
              width={22}
              height={22}
              className="opacity-80 hover:opacity-100 transition"
            />

            <Image
              src="/footer/equistone-light-discord-icon.svg"
              alt="Discord"
              width={22}
              height={22}
              className="opacity-80 hover:opacity-100 transition"
            />
          </div> */}

          {/* BOTTOM */}
          <div className="mt-10 border-t border-white/20 pt-6 flex flex-col lg:flex-row justify-between gap-4 text-sm text-white/60">
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

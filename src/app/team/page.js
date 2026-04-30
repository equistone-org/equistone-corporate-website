import Image from "next/image";
import Link from "next/link";
import FooterDark from "@/components/FooterDark";

export default function AboutPage() {
  return (
    <div className="flex-1 flex-col  items-start justify-center bg-[#EFF4F6] font-sans ">
      <main className="flex z-2 w-full relative min-h-screen flex-col bg-[#22333B] font-sans">
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
        <section className="flex mt-12 flex-col items-start  w-full">
          <p className="text-6xl text-white font-medium w-[80%] leading-14 px-16">
            TEAM
          </p>
          <div className="grid grid-cols-3 mt-12 text-black w-full">
            <div className="col-span-3 bg-primary-light border-b border-gray-800 w-full px-24 flex flex-row justify-center pt-6">
              <div className="flex flex-row space-x-2">
                <div className="mt-4 border-l border-gray-900 px-8 flex flex-col space-y-2">
                  <p className="uppercase font-semibold text-black">
                    MUHAMAD AFIQ BIN IDRIS
                  </p>
                  <p className="font-normal text-black">
                    Chief Executive Officer
                  </p>
                </div>
                <Image
                  src="/team/img_1.png"
                  alt="team 1"
                  height={46}
                  width={162}
                  priority
                />
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-3 bg-secondary-light border-b border-gray-800 w-full px-28 pt-6 gap-x-6">
              <div className="flex flex-row justify-between space-x-2 col-span-1">
                <div className="mt-4 border-l border-gray-900 px-8 flex flex-col space-y-2">
                  <p className="uppercase font-semibold text-black w-[60%]">
                    SYED MOHD ZAHIR BIN SYED AHMAD ZABIDI
                  </p>
                  <p className="font-normal text-black">
                    Chief Executive Officer
                  </p>
                </div>
                <Image
                  src="/team/img_2.png"
                  alt="team 1"
                  height={42}
                  width={162}
                  priority
                />
              </div>
              <div className="flex flex-row justify-between space-x-2 col-span-1">
                <div className="mt-4 border-l border-gray-900 px-8 flex flex-col space-y-2">
                  <p className="uppercase font-semibold text-black w-[60%]">
                    AMIRUL RASHID BIN AZMEE
                  </p>
                  <p className="font-normal text-black">
                    Chief Financial Officer
                  </p>
                </div>
                <Image
                  src="/team/img_3.png"
                  alt="team 1"
                  height={36}
                  width={182}
                  priority
                />
              </div>
              <div className="flex flex-row justify-between space-x-2 col-span-1">
                <div className="mt-4 border-l border-gray-900 px-8 flex flex-col space-y-2">
                  <p className="uppercase font-semibold text-black w-[60%]">
                    MOHD DANIAL ARIFF BIN MOHD ZAMRI
                  </p>
                  <p className="font-normal text-black">
                    Chief Operation Officer
                  </p>
                </div>
                <Image
                  src="/team/img_4.png"
                  alt="team 1"
                  height={46}
                  width={162}
                  priority
                />
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-3 bg-primary-light border-b border-gray-800 w-full px-28 pt-6 gap-x-6">
              <div className="flex flex-row justify-between space-x-2 col-span-1">
                <div className="mt-4 border-l border-gray-900 px-8 flex flex-col space-y-2">
                  <p className="uppercase font-semibold text-black w-[60%]">
                    KHAIRULANWAR BIN IDRIS{" "}
                  </p>
                  <p className="font-normal text-black">
                    Chief Technology Officer
                  </p>
                </div>
                <Image
                  src="/team/img_5.png"
                  alt="team 1"
                  height={46}
                  width={162}
                  priority
                />
              </div>
              <div className="flex flex-row justify-between space-x-2 col-span-1">
                <div className="mt-4 border-l border-gray-900 px-8 flex flex-col space-y-2">
                  <p className="uppercase font-semibold text-black w-[60%]">
                    MOHAMAD AIDIL MAULA ABD. RAHIM{" "}
                  </p>
                  <p className="font-normal text-black">
                    Chief Technical Officer
                  </p>
                </div>
                <Image
                  src="/team/img_6.png"
                  alt="team 1"
                  height={46}
                  width={162}
                  priority
                />
              </div>
              <div className="flex flex-row justify-between space-x-2 col-span-1">
                <div className="mt-4 border-l border-gray-900 px-8 flex flex-col space-y-2">
                  <p className="uppercase font-semibold text-black w-[60%]">
                    WAN AQMARUR RAZIN BIN WAN AZLAN
                  </p>
                  <p className="font-normal text-black">Chief Audit Officer </p>
                </div>
                <Image
                  src="/team/img_7.png"
                  alt="team 1"
                  height={46}
                  width={162}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* <footer className="w-full my-12">
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
        </footer> */}
      </main>{" "}
      <FooterDark />
    </div>
  );
}

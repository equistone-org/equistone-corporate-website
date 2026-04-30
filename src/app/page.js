import Image from "next/image";
import Link from "next/link";
import FooterLight from "@/components/FooterLight";

export default function Home() {
  return (
    <div className="flex-1 flex-col items-start justify-center bg-primary-light font-sans ">
      <main
        className="relative  z-2 flex h-screen w-full flex-col font-sans bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,51,59,1.2), rgba(34,51,59,0.4)), url('/background/equistone-main-img.jpg')",
        }}
      >
        <header className="w-full flex justify-between py-12 px-16 border-b border-white">
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

        <main className="grid grid-cols-2 w-full h-full">
          <div className="bg-primary-dark col-span-1 pl-16 flex items-center justify-center">
            <h1 className="text-[6rem] font-medium leading-[1.6] tracking-tight text-white flex items-center justify-center gap-6">
              <span>•</span>
              Unlocking value through clarity, strategy, and purpose
            </h1>
          </div>
          <div className="col-span-1 pr-16"></div>
        </main>
      </main>
      <main className="flex z-2 relative h-sceen w-full flex-col px-16 font-sans bg-primary-light py-16">
        <div className="flex flex-row justify-between text-center">
          <h1 className="text-4xl font-normal leading-[1.2] tracking-tight text-[#00330f] flex gap-4">
            <span>•</span>
            About us
          </h1>
          <p className="text-2xl text-[#3a4347]">-1</p>
        </div>
        <div className="mt-6">
          <p className="text-6xl text-green-dark-primary font-medium w-[80%] leading-14">
            Equistone builds value where investment, strategy, and technology
            meet.
          </p>
          <div className="text-sm px-4 py-2 bg-[#22333B] font-semibold text-white w-fit mt-8">
            <Link href="/about">Read more</Link>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-x-2 my-42 text-black">
          <div className="col-span-1 bg-[#F8F8F8] shadow-sm p-12 text-2xl">
            <div className="flex flex-row space-x-6">
              <Image
                src="/equistone-mission.svg"
                alt="Equistone mission"
                width={36}
                height={36}
                priority
              />
              <p className="font-medium">Mission</p>
            </div>
            <h4 className="mt-6">
              To empower businesses through innovative technology solutions that
              drive growth and efficiency
            </h4>
          </div>
          <div className="col-span-1 bg-[#F8F8F8] shadow-sm p-12 text-2xl">
            <div className="flex flex-row space-x-6">
              <Image
                src="/equistone-vision.svg"
                alt="Equistone vision"
                width={40}
                height={40}
                priority
              />
              <p className="font-medium">Vision</p>
            </div>
            <h4 className="mt-6">Mara Corporation Sdn Bhd</h4>
          </div>
        </div> */}
      </main>
      <main className="flex z-2 relative h-sceen w-full flex-col px-16 font-sans bg-[#22333B] py-20">
        <div className="flex flex-row justify-between text-center">
          <h1 className="text-4xl font-normal leading-[1.2] tracking-tight text-white flex gap-4">
            <span>•</span>
            Our strategic partner
          </h1>
          <p className="text-2xl text-[#bec1c2]">-2</p>
        </div>
        <div className="mt-6">
          <p className="text-4xl text-white font-medium w-[60%] leading-12">
            We work hand-in-hand with our strategic partners, combining
            strengths and expertise to ensure project success and deliver
            greater value
          </p>
          <div className="text-sm px-4 py-2 bg-[#EFF4F6]  font-semibold text-black w-fit mt-8">
            <Link href="/about">Read more</Link>
          </div>
        </div>

        {/* <div className="grid grid-cols-3 gap-x-4 my-42 text-black">
          <div className="col-span-1 bg-secondary-light shadow-sm px-12 py-18 text-2xl flex flex-col justify-between">
            <div className="items-center flex justify-center py-4">
              <Image
                src="/equistone-maracorp-logo.svg"
                alt="Mara Corp"
                height={46}
                width={162}
                priority
              />
            </div>
            <h4 className="text-green-dark-primary flex justify-center font-semibold">
              Mara Corporation Sdn Bhd
            </h4>
          </div>
          <div className="col-span-1 bg-secondary-light shadow-sm px-12 py-18 text-2xl flex flex-col justify-between">
            <div className="items-center flex justify-center py-4">
              <Image
                src="/equistone-klinikutama-logo.svg"
                alt="Klinik Utama"
                height={46}
                width={162}
                priority
              />
            </div>
            <h4 className="text-green-dark-primary flex justify-center font-semibold">
              Klinik Utama Sdn Bhd
            </h4>
          </div>
          <div className="col-span-1 bg-secondary-light shadow-sm px-12 py-18 text-2xl flex flex-col justify-between">
            <div className="items-center flex justify-center py-4">
              <Image
                src="/equistone-intellilabs-logo.svg"
                alt="intellilabs"
                height={72}
                width={182}
                priority
              />
            </div>
            <h4 className="text-green-dark-primary flex justify-center font-semibold">
              IntelliLabs AI
            </h4>
          </div>
        </div> */}
      </main>
      <main className="flex z-2 relative h-sceen w-full flex-col px-16 font-sans bg-primary-light  py-20">
        <div className="flex flex-row justify-between text-center">
          <h1 className="text-4xl font-normal leading-[1.2] tracking-tight text-black flex gap-4">
            <span>•</span>
            Our product
          </h1>
          <p className="text-2xl text-[#3d494d]">-2</p>
        </div>
        <div className="mt-6">
          <p className="text-6xl text-green-dark-primary font-medium w-[80%] leading-14">
            A tiptop product that succesful, trust by clinic to use
          </p>
        </div>

        <div className="grid grid-cols-3 my-42 text-black">
          {/* Card 1 */}
          <div className="px-12 py-18 text-2xl flex flex-col justify-between border-r border-l border-t border-b border-gray-400">
            <div className="flex items-center justify-center py-4">
              <Image
                src="/equistone-maracorp-logo.svg"
                alt="Mara Corp"
                height={46}
                width={162}
                priority
              />
            </div>
            <h4 className="text-green-dark-primary flex justify-center font-semibold">
              Mara Corporation Sdn Bhd
            </h4>
          </div>

          {/* Card 2 */}
          <div className="px-12 py-18 text-2xl flex flex-col justify-between border-r border-b border-t border-gray-400">
            <div className="flex items-center justify-center py-4">
              <Image
                src="/equistone-klinikutama-logo.svg"
                alt="Klinik Utama"
                height={46}
                width={162}
                priority
              />
            </div>
            <h4 className="text-green-dark-primary flex justify-center font-semibold">
              Klinik Utama Sdn Bhd
            </h4>
          </div>

          {/* Card 3 */}
          <div className="px-12 py-18 text-2xl flex flex-col justify-between border-b border-r border-t border-gray-400">
            <div className="flex items-center justify-center py-4">
              <Image
                src="/equistone-intellilabs-logo.svg"
                alt="IntelliLabs"
                height={72}
                width={182}
                priority
              />
            </div>
            <h4 className="text-green-dark-primary flex justify-center font-semibold">
              IntelliLabs AI
            </h4>
          </div>

          {/* Card 4 */}
          <div className="px-12 py-18 text-2xl flex flex-col justify-between border-r border-l border-b border-gray-400">
            <div className="flex items-center justify-center py-4">
              <Image
                src="/equistone-threadstone-logo.svg"
                alt="Threadstone"
                height={72}
                width={182}
                priority
              />
            </div>
            <h4 className="text-green-dark-primary flex justify-center font-semibold">
              Threadstone Capital Sdn Bhd
            </h4>
          </div>
        </div>
      </main>
      <FooterLight />
    </div>
  );
}

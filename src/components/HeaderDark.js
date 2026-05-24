import Image from "next/image";
import Link from "next/link";

export default function HeaderDark({ withBorder = false }) {
  return (
    <header className={withBorder ? "border-b border-gray-400" : ""}>
      <div className="px-[clamp(2rem,3vw,4rem)] w-full">
        <div className="container mx-auto flex justify-between py-8 lg:py-12">
          <Link href="/">
            <Image
              src="/equistone-logo.svg"
              alt="Equistone Logo"
              width={200}
              height={100}
              priority
              className="w-[140px] lg:w-[200px] h-auto"
            />
          </Link>

          <div className="flex flex-row space-x-10 lg:space-x-26 items-center font-medium uppercase text-sm lg:text-base text-white">
            <div className="flex flex-row space-x-6 lg:space-x-8">
              <div>ABOUT</div>

              <div>
                <Link href="/team">TEAM</Link>
              </div>

              <div>PRODUCT</div>
            </div>

            <div className="text-xs lg:text-sm px-3 lg:px-4 py-2 bg-white font-semibold text-[#22333B]">
              LET TALK
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

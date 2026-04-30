import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full sticky bottom-0 h-fit z-0 bg-primary-dark">
      <div className="mx-auto border-t-2 border-white text-white px-[clamp(1rem,3vw,3rem)] py-[clamp(1rem,3vw,2rem)] flex flex-col gap-[clamp(1rem,2vw,2rem)]">
        {/* Top Info */}
        <section className="flex justify-end space-x-[clamp(1rem,3vw,3rem)] text-[clamp(0.9rem,1.2vw,1rem)]">
          <address className="not-italic flex flex-col">
            <h2 className="text-[clamp(0.75rem,1vw,0.9rem)]">Contact Us</h2>
            <a className="hover:underline font-semibold">support@XXXXXXXX</a>
            <a className="hover:underline font-semibold">+013-XXXXXXX</a>
          </address>

          <address className="not-italic flex flex-col">
            <h2 className="text-[clamp(0.75rem,1vw,0.9rem)]">
              Legal and Policies
            </h2>
            <a
              href="mailto:support@rytbank.my"
              className="hover:underline font-semibold"
            >
              Terms and Conditions
            </a>
          </address>
        </section>
        {/* Social Icons */}
        <section className="flex justify-end space-x-[clamp(0.5rem,1.5vw,1rem)]">
          <div className="p-[clamp(0.4rem,1vw,0.6rem)] rounded-lg flex justify-center">
            <Image
              src="footer/equistone-light-telegram-icon.svg"
              alt="Telegram"
              width={24}
              height={24}
              className="w-[clamp(14px,2vw,22px)] h-auto"
              priority
            />
          </div>

          <div className="p-[clamp(0.4rem,1vw,0.6rem)] rounded-lg flex justify-center">
            <Image
              src="footer/equistone-light-discord-icon.svg"
              alt="Discord"
              width={24}
              height={24}
              className="w-[clamp(14px,2vw,22px)] h-auto"
              priority
            />
          </div>
        </section>
        {/* Logo */}
        <section className="mt-[clamp(1rem,3vw,3rem)] flex justify-center">
          <div className="w-full">
            <Image
              src="footer/equistone-light-logo.svg"
              alt="Equistone logo"
              width={2000}
              height={200}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>
        {/* Copyright */}
        <section className="mt-[clamp(1rem,3vw,3rem)] flex justify-end">
          <p className="text-[clamp(0.8rem,1vw,1rem)] font-semibold">
            © {new Date().getFullYear()} Equistone. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}

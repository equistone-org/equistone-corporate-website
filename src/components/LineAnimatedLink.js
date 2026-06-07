"use client";

import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function LineAnimatedLink({
  href,
  children,
  variant = "default",
}) {
  const lineRef = useRef(null);

  const handleEnter = () => {
    gsap.to(lineRef.current, {
      scaleX: 1,
      transformOrigin: "left",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(lineRef.current, {
      scaleX: 0,
      transformOrigin: "right",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  const base =
    "relative inline-flex items-center gap-2 text-sm font-semibold overflow-hidden";

  const styles = {
    default: "bg-black px-5 py-2 text-light-primary",
    green: "text-sm px-6 py-2 bg-dark-primary font-semibold text-light-primary w-fit",
    white: "text-sm px-6 py-2 bg-white text-dark-primary font-semibold",
  };

  const lineColor = {
    default: "bg-dark-orange",
    green: "bg-dark-orange",
    white: "bg-dark-orange",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`${base} ${styles[variant]}`}
    >
      <span>{children}</span>

      <Image
        src="/icons/equistone-arrow-light-icon.svg"
        alt="Arrow"
        width={12}
        height={12}
        className="h-2 w-auto"
      />

      <span
        ref={lineRef}
        className={`absolute bottom-0 left-0 h-[4px] w-full scale-x-0 origin-right ${lineColor[variant]}`}
      />
    </Link>
  );
}

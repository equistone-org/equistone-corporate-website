"use client";

import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function LineAnimatedLink({
  href,
  children,
  variant = "default",
  arrowVariant = "dark",
}) {
  const lineRef = useRef(null);

  const handleEnter = () => {
    if (variant === "underline") return;

    gsap.to(lineRef.current, {
      scaleX: 1,
      transformOrigin: "left",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    if (variant === "underline") return;

    gsap.to(lineRef.current, {
      scaleX: 0,
      transformOrigin: "right",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  const base =
    "relative inline-flex items-center gap-2 text-[clamp(0.75rem,1vw,0.875rem)] overflow-hidden";

  // const styles = {
  //   default: "bg-black px-5 py-2 font-semibold text-light-primary",
  //   green:
  //     "text-[clamp(0.75rem,1vw,0.875rem)] px-6 py-2 bg-dark-primary font-semibold text-light-primary w-fit",
  //   white:
  //     "text-[clamp(0.75rem,1vw,0.875rem)] px-6 py-2 bg-white text-dark-primary font-semibold",
  //   underline: "font-semibold text-light-primary underline",
  // };

  const styles = {
    default: "bg-black px-5 py-2 font-semibold text-light-primary",
    green:
      "text-sm px-6 py-2 bg-dark-primary font-semibold text-light-primary w-fit",
    white: "text-sm px-6 py-2 bg-white text-dark-primary font-semibold",
    underlineBlack: "font-semibold text-light-primary underline",
    underlineWhite: "font-semibold text-dark-primary underline",
  };

  const lineColor = {
    default: "bg-dark-orange",
    green: "bg-dark-orange",
    white: "bg-dark-orange",
  };

  const arrowSrc = {
    dark: "/icons/equistone-arrow-dark-icon.svg",
    light: "/icons/equistone-arrow-light-icon.svg",
    orange: "/icons/equistone-arrow-orange-icon.svg",
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
        src={arrowSrc[arrowVariant]}
        alt="Arrow"
        width={12}
        height={12}
        className="h-2 w-auto"
      />

      {variant !== "underline" && (
        <span
          ref={lineRef}
          className={`absolute bottom-0 left-0 h-1 w-full scale-x-0 origin-right ${lineColor[variant]}`}
        />
      )}
    </Link>
  );
}

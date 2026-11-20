"use client";
import { useEffect, useRef, useState } from "react";

/*
 * RollingNumber — slot-machine / odometer effect.
 * Each digit spins through 0–9 (letters through A–Z) and lands on the real
 * value. Other characters (+, k, ., etc.) fade in at the end.
 * Starts when the element scrolls into view.
 */

const DIGITS = "0123456789".split("");
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const CELL = 1.1; // em — height of one reel slot

function reelFor(ch, i) {
  const set = /[0-9]/.test(ch) ? DIGITS : /[A-Z]/.test(ch) ? LETTERS : null;
  if (!set) return null;
  const loops = 2 + i; // later characters spin a bit longer
  const reel = [];
  for (let l = 0; l < loops; l++) reel.push(...set);
  reel.push(...set.slice(0, set.indexOf(ch) + 1)); // end exactly on target
  return reel;
}

export default function RollingNumber({
  value,
  duration = 1.8, // seconds for the first character
  stagger = 0.18, // extra seconds per following character
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGo(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // next frame so the start position paints first
          requestAnimationFrame(() => setGo(true));
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const chars = String(value).split("");

  return (
    <span
      ref={ref}
      aria-label={value}
      className={`inline-flex items-end ${className}`}
    >
      {chars.map((ch, i) => {
        const reel = reelFor(ch, i);
        const t = duration + i * stagger;

        if (!reel) {
          return (
            <span
              key={i}
              aria-hidden="true"
              className="inline-block transition-[opacity,transform] ease-out"
              style={{
                opacity: go ? 1 : 0,
                transform: go ? "none" : "translateY(0.3em)",
                transitionDuration: "0.5s",
                transitionDelay: `${delay + t - 0.3}s`,
              }}
            >
              {ch}
            </span>
          );
        }

        return (
          <span
            key={i}
            aria-hidden="true"
            className="relative inline-block overflow-hidden text-center"
            style={{ height: `${CELL}em`, lineHeight: `${CELL}em` }}
          >
            {/* invisible target sets the width so letters don't get padded */}
            <span className="invisible">{ch}</span>
            <span
              className="absolute left-1/2 top-0 flex flex-col items-center"
              style={{
                transform: `translate(-50%, ${go ? -(reel.length - 1) * CELL : 0}em)`,
                transition: `transform ${t}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
              }}
            >
              {reel.map((c, j) => (
                <span key={j} style={{ height: `${CELL}em` }}>
                  {c}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}

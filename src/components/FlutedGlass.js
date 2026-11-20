"use client";

/*
 * FlutedGlass — reeded / ribbed glass effect over a background image.
 *
 * How it works (pure CSS, no SVG filter — iOS Safari can't render the
 * feImage/feDisplacementMap version):
 *  1. The container is split into vertical ribs `flute` px wide.
 *  2. Each rib shows a wider slice of the image (flute + strength px),
 *     squeezed horizontally into the rib — the same "lens" result as a
 *     displacement map with a 0→1 ramp per rib.
 *  3. A repeating gradient on top adds the highlight / shadow of each rib.
 *
 * Place inside a `relative isolate overflow-hidden` parent — it sits behind
 * the parent's content (-z-10).
 */

import { useEffect, useRef, useState } from "react";

export default function FlutedGlass({
  src,
  flute = 14, // rib width in px
  strength = 50, // how far each rib bends the image (px)
  shade = 0.35, // rib shadow strength 0–1
  shine = 0.1, // rib highlight strength 0–1
  dim = 0.16, // overall darkness over the whole image 0–1
  className = "",
}) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const ribs = width ? Math.ceil(width / flute) : 0;
  const squeeze = flute / (flute + strength);
  const image = {
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Plain image: shown before measuring and under rib edges */}
      <div className="absolute inset-0" style={image} />

      {/* Refracted ribs */}
      {Array.from({ length: ribs }, (_, i) => {
        const x = i * flute;
        return (
          <div
            key={i}
            className="absolute top-0 h-full overflow-hidden"
            style={{ left: x, width: flute }}
          >
            <div
              className="absolute top-0 h-full"
              style={{
                ...image,
                left: -x,
                width,
                transform: `scaleX(${squeeze})`,
                transformOrigin: `${x + flute / 2}px 50%`,
              }}
            />
          </div>
        );
      })}

      {/* Rib highlights & shadows (aligned with the ribs) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg,
            rgba(255,255,255,${shine}) 0px,
            rgba(255,255,255,0) ${flute * 0.3}px,
            rgba(0,0,0,0) ${flute * 0.6}px,
            rgba(0,0,0,${shade}) ${flute}px)`,
        }}
      />

      {/* Overall darkening */}
      {dim > 0 && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${dim})` }}
        />
      )}
    </div>
  );
}

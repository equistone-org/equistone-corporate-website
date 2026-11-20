/*
 * FlutedGlass — reeded / ribbed glass effect over a background image.
 *
 * How it works:
 *  1. An SVG filter tiles a tiny left→right colour ramp (one ramp per flute)
 *     and uses it as a displacement map, so each vertical rib "refracts" its
 *     slice of the image like a lens.
 *  2. A repeating gradient on top adds the highlight / shadow of each rib.
 *
 * Place inside a `relative isolate overflow-hidden` parent — it sits behind
 * the parent's content (-z-10).
 */

const OUTSET = 60; // px — image is oversized so displaced edges never show

export default function FlutedGlass({
  src,
  flute = 14, // rib width in px
  strength = 50, // how far each rib bends the image (px)
  shade = 0.35, // rib shadow strength 0–1
  shine = 0.1, // rib highlight strength 0–1
  dim = 0.16, // overall darkness over the whole image 0–1
  id = "fluted-glass",
  className = "",
}) {
  // R = horizontal shift (0 → 255 across one rib), G = 128 → no vertical shift
  const ramp = `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><defs><linearGradient id='g'><stop offset='0' stop-color='#008000'/><stop offset='1' stop-color='#ff8000'/></linearGradient></defs><rect width='16' height='16' fill='url(#g)'/></svg>`;
  const map = `data:image/svg+xml,${encodeURIComponent(ramp)}`;

  const layer = { inset: -OUTSET };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <svg width="0" height="0" className="absolute">
        <filter
          id={id}
          x="0"
          y="0"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feImage
            href={map}
            x="0"
            y="0"
            width={flute}
            height={flute}
            preserveAspectRatio="none"
            result="ramp"
          />
          <feTile in="ramp" result="map" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            scale={strength}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Refracted image */}
      <div
        className="absolute bg-cover bg-center"
        style={{
          ...layer,
          backgroundImage: `url(${src})`,
          filter: `url(#${id})`,
        }}
      />

      {/* Rib highlights & shadows (aligned with the displacement tiles) */}
      <div
        className="absolute"
        style={{
          ...layer,
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

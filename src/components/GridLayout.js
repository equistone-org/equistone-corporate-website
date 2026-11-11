import Link from "next/link";

/* Hairline grid system shared by the home and about pages. */

export const PAD = "p-[clamp(1.25rem,2vw,2rem)]";
export const LINE_LIGHT = "border-black/15";
export const LINE_DARK = "border-white/15";

export function ArrowUpRight({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={`w-[clamp(1.1rem,1.4vw,1.5rem)] h-auto shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${className}`}
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function CornerFlag() {
  return (
    <span
      aria-hidden="true"
      className="absolute top-0 right-0 w-0 h-0 border-t-[clamp(14px,1.4vw,20px)] border-l-[clamp(14px,1.4vw,20px)] border-t-[#bc6c25] border-l-transparent"
    />
  );
}

export function Tag({ children, dark = false }) {
  return (
    <span
      className={`inline-block w-fit px-2 py-[3px] text-[clamp(0.6rem,0.7vw,0.7rem)] font-semibold uppercase tracking-wider ${
        dark
          ? "bg-light-primary text-dark-primary"
          : "bg-dark-orange text-light-primary"
      }`}
    >
      {children}
    </span>
  );
}

/** Full-width band with a centred, vertically ruled frame. */
export function Band({
  dark = false,
  children,
  className = "",
  sectionClassName = "",
}) {
  return (
    <section
      className={`relative z-2 w-full font-sans px-[clamp(0.02rem,3vw,4rem)] pt-16 ${sectionClassName} ${
        dark
          ? "bg-dark-primary text-light-primary"
          : "bg-light-primary text-dark-primary"
      }`}
    >
      <div className="container mx-auto">
        <div className={`border ${dark ? LINE_DARK : LINE_LIGHT} ${className}`}>
          {children}
        </div>
      </div>
    </section>
  );
}

/** Section header: label + index in the first column, big offset title in the rest. */
export function SectionHead({
  index,
  label,
  kicker,
  title,
  intro,
  action,
  dark = false,
}) {
  const line = dark ? LINE_DARK : LINE_LIGHT;
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-4 border-b ${line}`}>
      <div
        className={`${PAD} flex flex-row lg:flex-col justify-between items-start gap-6 border-b lg:border-b-0 lg:border-r ${line}`}
      >
        <p className="max-w-[12rem] text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest leading-[1.6] opacity-80">
          {label}
        </p>
        <span
          className={`flex items-center justify-center w-[clamp(2.25rem,3vw,2.75rem)] aspect-square rounded-full border text-[clamp(0.65rem,0.8vw,0.75rem)] font-semibold ${
            dark ? "border-white/40" : "border-black/40"
          }`}
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div
        className={`lg:col-span-3 ${PAD} flex flex-col justify-end gap-[clamp(1rem,1.5vw,1.5rem)] lg:min-h-[clamp(14rem,20vw,18rem)]`}
      >
        {action && <div className="flex justify-end">{action}</div>}
        <div className="mt-auto flex flex-col gap-[clamp(0.75rem,1vw,1rem)]">
          {kicker && <Tag dark={dark}>{kicker}</Tag>}
          <h2 className="uppercase font-semibold leading-[1.02] tracking-tight text-[clamp(2rem,4.4vw,4.4rem)]">
            {title}
          </h2>
          {intro && (
            <p
              className={`lg:w-[75%] text-[clamp(0.95rem,1.1vw,1.1rem)] leading-[1.8] ${
                dark ? "text-white/60" : "text-[#3a4347]"
              }`}
            >
              {intro}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function PillLink({ href, children, dark = false }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[clamp(0.65rem,0.8vw,0.75rem)] font-semibold uppercase tracking-wider transition-colors ${
        dark
          ? "border-white/50 hover:bg-light-primary hover:text-dark-primary"
          : "border-black/50 hover:bg-dark-primary hover:text-light-primary"
      }`}
    >
      {children}
      <ArrowUpRight className="w-3!" />
    </Link>
  );
}

export function StatTile({ value, label, dark = false }) {
  return (
    <div
      className={`${PAD} ${dark ? "bg-dark-primary" : "bg-light-primary"} flex flex-col justify-between gap-[clamp(1.5rem,3vw,3rem)] min-h-[clamp(9rem,12vw,12rem)]`}
    >
      <p className="text-[clamp(0.65rem,0.8vw,0.75rem)] uppercase tracking-widest opacity-70">
        {label}
      </p>
      <div className="text-[clamp(2.2rem,3.8vw,3.4rem)] font-black leading-none text-dark-orange">
        {value}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";

export default function Sidebar({ open, setOpen, theme = "light" }) {
  const handleClose = () => setOpen(false);

  const styles = {
    light: {
      bg: "bg-white",
      text: "text-black",
      border: "border-black",
      overlay: "bg-black/40",
      buttonPrimary: "bg-black text-white",
      buttonSecondary: "bg-white text-black",
    },
    dark: {
      bg: "bg-dark-secondary",
      text: "text-white",
      border: "border-white",
      overlay: "bg-black/60",
      buttonPrimary: "bg-white text-black",
      buttonSecondary: "bg-transparent text-white border border-white",
    },
  };

  const t = styles[theme] || styles.light;

  return (
    <>
      {open && (
        <div
          onClick={handleClose}
          className={`fixed inset-0 ${t.overlay} z-[998]`}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 w-64
          overflow-y-auto
          ${t.bg}
          ${t.text}
          border-r ${t.border}
          z-[999]
          transition-transform duration-300 lg:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className={`flex justify-between p-4 border-b ${t.border}`}>
          <button
            onClick={handleClose}
            className={`text-sm px-2 py-1 border ${t.border}`}
          >
            Close
          </button>
        </div>

        {/* NAV */}
        <nav className="p-3 flex flex-col gap-2 uppercase">
          <Link onClick={handleClose} href="/about">
            About
          </Link>
          <Link onClick={handleClose} href="/ventures">
            Ventures
          </Link>
          <Link onClick={handleClose} href="/investment">
            Investment
          </Link>
          <Link onClick={handleClose} href="/sectors">
            Sectors
          </Link>
          <Link onClick={handleClose} href="/insights">
            Insights
          </Link>
          <Link onClick={handleClose} href="/team">
            Team
          </Link>
        </nav>

        {/* FOOTER CTA */}
        <div
          className={`absolute bottom-0 left-0 w-full p-4 border-t flex flex-col gap-2 ${t.bg} ${t.border}`}
        >
          <button
            className={`w-full text-xs px-3 py-2 border ${t.border} font-semibold uppercase`}
          >
            Contact
          </button>

          <button
            className={`w-full text-xs px-3 py-2 font-semibold uppercase ${t.buttonPrimary}`}
          >
            Partner With Us
          </button>
        </div>
      </aside>
    </>
  );
}

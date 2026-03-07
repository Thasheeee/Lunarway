"use client";

import Link from "next/link";

export default function BookButton() {
  return (
    <Link
      href="/contact"
      className="block w-full text-center text-sm font-semibold tracking-widest uppercase py-4 rounded-sm transition-all duration-200"
      style={{ background: "#1A1A18", color: "white" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#C9A96E";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#1A1A18";
      }}
    >
      Book This Package →
    </Link>
  );
}

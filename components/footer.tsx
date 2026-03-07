import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Music } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/destination", label: "Destinations" },
  { href: "/about", label: "About Us" },
];

const destinations = [
  "Malaysia",
  "Thailand",
  "Dubai",
  "Sri Lanka",
  "Bali",
];

export default function Foot() {
  return (
    <>
      {/* Pre-footer CTA */}
      <section className="relative overflow-hidden" style={{ height: "520px" }}>
        <Image
          src="/nine-arch.webp"
          alt="Ready for adventure"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,25,35,0.15) 0%, rgba(15,25,35,0.45) 50%, #000 100%)",
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#C9A96E" }}
          >
            Start Your Journey
          </p>
          <h2
            className="font-light leading-tight text-white mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 6vw, 80px)",
            }}
          >
            Ready For Your Next<br />
            <em className="italic" style={{ color: "#C9A96E" }}>Adventure?</em>
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-8 max-w-sm">
            Let&apos;s start planning your perfect journey today.
          </p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200"
            style={{ background: "white", color: "#1A1A18" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#C9A96E";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "white";
              (e.currentTarget as HTMLElement).style.color = "#1A1A18";
            }}
          >
            Get Started →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>

            {/* Brand */}
            <div className="md:col-span-1">
              <Image
                src="/footer-logo.webp"
                alt="Lunarway Travels"
                width={150}
                height={60}
                className="mb-5"
              />
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Thoughtfully planned travel experiences, created with care and
                attention to detail to ensure smooth and memorable journeys.
              </p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Music].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#C9A96E";
                      (e.currentTarget as HTMLElement).style.color = "#C9A96E";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.15)";
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)";
                    }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
                style={{ color: "white" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#C9A96E";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "rgba(255,255,255,0.45)";
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
                style={{ color: "white" }}
              >
                Destinations
              </h4>
              <ul className="space-y-3">
                {destinations.map((dest) => (
                  <li key={dest}>
                    <Link
                      href="/tours"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#C9A96E";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "rgba(255,255,255,0.45)";
                      }}
                    >
                      {dest}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
                style={{ color: "white" }}
              >
                Contact Us
              </h4>
              <ul className="space-y-4">
                {[
                  { icon: "📍", text: "123 Travel Lane,\nColombo 03, Sri Lanka" },
                  { icon: "📞", text: "+94 77 123 4567" },
                  { icon: "✉", text: "hello@lunarwaytravels.com" },
                ].map(({ icon, text }) => (
                  <li key={icon} className="flex gap-3 items-start">
                    <span className="text-sm mt-0.5" style={{ color: "#C9A96E" }}>
                      {icon}
                    </span>
                    <span
                      className="text-sm leading-relaxed whitespace-pre-line"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              © 2025 Lunarway Travels. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#C9A96E";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.3)";
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

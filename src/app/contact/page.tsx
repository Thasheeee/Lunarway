import Navbar from "../../../components/navbar";
import Foot from "../../../components/footer";
import Link from "next/link";

const contactDetails = [
  {
    icon: "📞",
    label: "Phone",
    lines: ["0707 256 600", "0707 356 600"],
    href: "tel:+94707256600",
  },
  {
    icon: "✉",
    label: "Email",
    lines: ["info@lunarwaytravels.com"],
    href: "mailto:info@lunarwaytravels.com",
  },
  {
    icon: "📍",
    label: "Location",
    lines: ["Sri Lanka"],
    href: null,
  },
];

const socials = [
  {
    label: "Instagram",
    handle: "@lunarwaytravels.lk",
    href: "https://www.instagram.com/lunarwaytravels.lk/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "Lunarway Travels",
    href: "https://www.facebook.com/profile.php?id=61582827770400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 px-6 md:px-16" style={{ background: "#F5F0E8" }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#C9A96E" }}
          >
            Get In Touch
          </p>
          <h1
            className="font-light leading-none mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              color: "#1A1A18",
            }}
          >
            Let&apos;s Plan Your<br />
            <em className="italic" style={{ color: "#B85C38" }}>Next Journey</em>
          </h1>
          <p className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color: "#7A7A72" }}>
            Reach out to us and our team will help you craft the perfect travel
            experience tailored just for you.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-10">

          {/* Contact cards */}
          <div className="flex flex-col gap-px" style={{ background: "#EDE8DE" }}>
            {contactDetails.map((item) => (
              <div key={item.label} className="bg-white p-7 flex gap-5 items-start">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: "#F5F0E8" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-[0.18em] uppercase mb-1.5"
                    style={{ color: "#C9A96E" }}
                  >
                    {item.label}
                  </p>
                  {item.lines.map((line) =>
                    item.href ? (
                      <a
                        key={line}
                        href={item.href}
                        className="block text-sm font-medium transition-colors duration-200 hover:text-[#C9A96E]"
                        style={{ color: "#1A1A18" }}
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm font-medium" style={{ color: "#1A1A18" }}>
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              style={{ color: "#7A7A72" }}
            >
              Follow Us
            </p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-[#C9A96E] group"
                  style={{ borderColor: "#EDE8DE", background: "white" }}
                >
                  <span
                    className="transition-colors duration-200 group-hover:text-[#C9A96E]"
                    style={{ color: "#7A7A72" }}
                  >
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#1A1A18" }}>
                      {s.label}
                    </p>
                    <p className="text-xs" style={{ color: "#7A7A72" }}>{s.handle}</p>
                  </div>
                  <span
                    className="ml-auto text-xs transition-colors duration-200 group-hover:text-[#C9A96E]"
                    style={{ color: "#C9A96E" }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Foot />
    </main>
  );
}

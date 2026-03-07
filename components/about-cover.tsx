"use client";

import Image from "next/image";

const values = [
  {
    icon: "🗺",
    title: "Carefully Planned Itineraries",
    desc: "Well-structured journeys designed for comfort and smooth travel.",
  },
  {
    icon: "💳",
    title: "Transparent Pricing",
    desc: "Clear pricing with no hidden costs or surprises.",
  },
  {
    icon: "⚙️",
    title: "Flexible Travel Options",
    desc: "Adjust travel dates, hotels, and experiences to suit your needs.",
  },
  {
    icon: "🤝",
    title: "Dedicated Travel Support",
    desc: "Reliable assistance before and throughout your journey.",
  },
];

const galleryImages = [
  { src: "/about-cover1.webp", alt: "Mountain travelers", span: "row-span-2" },
  { src: "/about-cover2.webp", alt: "Desert dunes" },
  { src: "/about-cover3.webp", alt: "Thai temple" },
];

export default function JourneySection() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 md:px-16" style={{ background: "#F5F0E8" }}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "#C9A96E" }}
              >
                Our Story
              </p>
              <h1
                className="font-light leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(44px, 6vw, 80px)",
                  color: "#1A1A18",
                }}
              >
                Your Journey,<br />
                Our{" "}
                <em className="italic" style={{ color: "#B85C38" }}>
                  Commitment
                </em>
              </h1>
            </div>
            <p
              className="text-base md:text-lg leading-relaxed self-end md:ml-10"
              style={{ color: "#7A7A72" }}
            >
              We plan travel experiences with care, clarity, and attention to
              detail, so every journey feels effortless and truly memorable.
            </p>
          </div>

          {/* Image gallery */}
          <div className="grid grid-cols-3 gap-4" style={{ height: "520px" }}>
            {/* Large left image */}
            <div className="col-span-3 md:col-span-2 relative rounded-xl overflow-hidden row-span-2" style={{ gridRow: "span 2" }}>
              <Image
                src="/about-cover1.webp"
                alt="Mountain travelers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Top right */}
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/about-cover2.webp"
                alt="Desert dunes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom right */}
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/about-cover3.webp"
                alt="Thai temple"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Wide bottom spanning 2 cols */}
            
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "#C9A96E" }}
              >
                Who We Are
              </p>
              <h2
                className="font-light leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  color: "#1A1A18",
                }}
              >
                Where Every<br />
                <em className="italic" style={{ color: "#B85C38" }}>
                  Journey Begins
                </em>
              </h2>
            </div>

            <div className="space-y-4 md:ml-10" style={{ color: "#7A7A72" }}>
              <p className="text-base md:text-lg leading-relaxed">
                We are a travel-focused team dedicated to planning smooth and
                well-organized journeys. Our aim is to simplify travel by
                handling the details, allowing our travelers to focus on
                enjoying the experience.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                From local getaways to international tours, every journey we
                plan reflects our commitment to reliability, comfort, and
                thoughtful planning.
              </p>
            </div>
          </div>

          {/* Values grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: "#EDE8DE" }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-9 group cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{ borderBottom: "3px solid transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "#C9A96E";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.position = "relative";
                  (e.currentTarget as HTMLElement).style.zIndex = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="text-3xl mb-6"
                  style={{ filter: "grayscale(0.2)" }}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-semibold text-sm mb-3"
                  style={{ color: "#1A1A18", letterSpacing: "-0.01em" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A7A72" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

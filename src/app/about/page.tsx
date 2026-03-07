"use client";

import Navbar from "../../../components/navbar";
import JourneySection from "../../../components/about-cover";
import Foot from "../../../components/footer";

const steps = [
  {
    num: "01",
    title: "Choose Your Destination",
    desc: "Explore local and international destinations and decide where you want to travel.",
    offset: false,
  },
  {
    num: "02",
    title: "Select a Tour Package",
    desc: "Choose a tour package that matches your travel style and budget.",
    offset: true,
  },
  {
    num: "03",
    title: "Confirm Dates & Details",
    desc: "Share your preferred dates and details to finalize the booking.",
    offset: false,
  },
  {
    num: "04",
    title: "Travel With Confidence",
    desc: "Enjoy your journey while we handle the rest.",
    offset: true,
  },
];

export default function About() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      <JourneySection />

      {/* ── HOW WE PLAN ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-16" style={{ background: "#F5F0E8" }}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "#C9A96E" }}
              >
                Our Process
              </p>
              <h2
                className="font-light leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  color: "#1A1A18",
                }}
              >
                How We Plan<br />
                <em className="italic" style={{ color: "#B85C38" }}>
                  Every Journey
                </em>
              </h2>
            </div>
            <p
              className="text-base md:text-lg leading-relaxed self-end md:ml-10"
              style={{ color: "#7A7A72" }}
            >
              We focus on understanding your needs and planning travel
              experiences that feel smooth and stress-free from start to finish.
            </p>
          </div>

          {/* Steps — staggered layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`bg-white rounded-xl p-8 group cursor-default transition-all duration-300 hover:-translate-y-1.5 ${
                  step.offset ? "md:mt-12" : "md:mb-12"
                }`}
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.10)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 2px 12px rgba(0,0,0,0.05)";
                }}
              >
                {/* Number circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-10 border transition-all duration-300 group-hover:bg-[#1A1A18] group-hover:border-[#1A1A18]"
                  style={{
                    borderColor: "#EDE8DE",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "22px",
                    fontWeight: 300,
                    color: "#1A1A18",
                  }}
                >
                  <span className="group-hover:text-white transition-colors duration-300">
                    {step.num}
                  </span>
                </div>

                <h3
                  className="font-semibold text-base mb-3"
                  style={{ color: "#1A1A18", letterSpacing: "-0.01em" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#7A7A72" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Foot />
    </main>
  );
}

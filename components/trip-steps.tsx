"use client";

const steps = [
  {
    num: "01",
    title: "Choose Your Destination",
    description:
      "Explore local and international destinations and decide where you want to travel next.",
  },
  {
    num: "02",
    title: "Select a Tour Package",
    description:
      "Choose a tour package that matches your travel style, group size, and budget.",
  },
  {
    num: "03",
    title: "Confirm Dates & Details",
    description:
      "Share your preferred travel dates and personal details to finalise your booking.",
  },
  {
    num: "04",
    title: "Travel With Confidence",
    description:
      "Enjoy your journey while we handle every detail, from flights to accommodations.",
  },
];

export default function Steps() {
  return (
    <section className="py-24 px-6 md:px-16" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "#C9A96E" }}
            >
              How It Works
            </p>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18" }}
            >
              Plan Your Trip In<br />
              <em className="italic" style={{ color: "#B85C38" }}>Simple Steps</em>
            </h2>
          </div>
          <p
            className="text-base md:text-lg leading-relaxed self-end md:ml-10"
            style={{ color: "#7A7A72" }}
          >
            A carefully designed journey planning process focused on comfort,
            clarity, and confidence from start to finish.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "#EDE8DE" }}>
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white p-9 group transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ boxShadow: "none" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 16px 36px rgba(0,0,0,0.08)";
                (e.currentTarget as HTMLElement).style.zIndex = "1";
                (e.currentTarget as HTMLElement).style.position = "relative";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Circle number */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-8 border transition-all duration-300 group-hover:bg-[#1A1A18] group-hover:border-[#1A1A18]"
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
              <p className="text-sm leading-relaxed" style={{ color: "#7A7A72" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

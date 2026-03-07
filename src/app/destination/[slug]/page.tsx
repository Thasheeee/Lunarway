import { destinations } from "../../lib/destinations";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "../../../../components/navbar";
import Foot from "../../../../components/footer";
import BookButton from "../../../../components/book-button";

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = destinations[slug as keyof typeof destinations];

  if (!destination) notFound();

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── HERO HEADER ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-10 px-6 md:px-16" style={{ background: "#F5F0E8" }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "#C9A96E" }}
              >
                Tour Package
              </p>
              <h1
                className="font-light leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(56px, 8vw, 110px)",
                  color: "#1A1A18",
                }}
              >
                {destination.name}
              </h1>
            </div>
            <p
              className="text-base md:text-lg leading-relaxed max-w-sm md:pb-3"
              style={{ color: "#7A7A72" }}
            >
              Explore carefully curated local and international tour packages
              designed for every type of traveler.
            </p>
          </div>

          {/* Image grid */}
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "320px 220px",
            }}
          >
            <div className="rounded-xl overflow-hidden" style={{ gridRow: "span 2" }}>
              <Image
                src={destination.images[0]}
                alt={destination.alternative[0]}
                width={800}
                height={560}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            <div className="rounded-xl overflow-hidden">
              <Image
                src={destination.images[1]}
                alt={destination.alternative[1]}
                width={800}
                height={320}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={destination.images[2]}
                  alt={destination.alternative[2]}
                  width={400}
                  height={220}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={destination.images[3]}
                  alt={destination.alternative[3]}
                  width={400}
                  height={220}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT: Overview + Activities */}
          <div className="lg:col-span-2">

            <div className="mb-12">
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "#C9A96E" }}
              >
                Overview
              </p>
              <h2
                className="text-3xl md:text-4xl font-light mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18" }}
              >
                Package Overview
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-3" style={{ color: "#7A7A72" }}>
                Explore the cultural charm and modern attractions of {destination.name} with
                a thoughtfully planned tour that blends sightseeing, entertainment, and leisure.
                From iconic landmarks and scenic viewpoints to thrilling experiences, this journey
                offers a perfect mix of guided tours and free time.
              </p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#7A7A72" }}>
                {destination.type}
              </p>
            </div>

            <div className="mb-10" style={{ borderTop: "1px solid #EDE8DE" }} />

            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "#C9A96E" }}
              >
                Itinerary
              </p>
              <h3
                className="text-3xl md:text-4xl font-light mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18" }}
              >
                Day by Day Activities
              </h3>

              <div>
                {destination.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="pb-8"
                    style={{
                      borderLeft: "1px solid #EDE8DE",
                      paddingLeft: "24px",
                      marginLeft: "10px",
                      position: "relative",
                    }}
                  >
                    <div
                      className="absolute flex items-center justify-center rounded-full font-semibold"
                      style={{
                        width: "22px",
                        height: "22px",
                        background: "#C9A96E",
                        color: "white",
                        left: "-11px",
                        top: "0",
                        fontSize: "10px",
                      }}
                    >
                      {index + 1}
                    </div>

                    <h4
                      className="font-semibold text-sm mb-3"
                      style={{ color: "#1A1A18", letterSpacing: "-0.01em" }}
                    >
                      {activity.title}
                    </h4>
                    <ul className="space-y-2">
                      {activity.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm leading-relaxed"
                          style={{ color: "#7A7A72" }}
                        >
                          <span
                            className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ background: "#C9A96E" }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Sticky booking card */}
          <div className="lg:col-span-1">
            <div
              className="rounded-2xl p-7 lg:sticky lg:top-28"
              style={{
                background: "white",
                border: "1px solid #EDE8DE",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#7A7A72" }}>
                  Starting at
                </p>
                <p
                  className="font-light"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "40px",
                    color: "#1A1A18",
                    lineHeight: 1,
                  }}
                >
                  {destination.price}
                </p>
              </div>

              <div className="mb-6" style={{ borderTop: "1px solid #EDE8DE", paddingTop: "20px" }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#7A7A72" }}>
                  Duration
                </p>
                <p className="font-medium text-base" style={{ color: "#1A1A18" }}>
                  {destination.duration}
                </p>
              </div>

              <div className="mb-8" style={{ borderTop: "1px solid #EDE8DE", paddingTop: "20px" }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#7A7A72" }}>
                  Includes
                </p>
                <ul className="space-y-3.5">
                  {destination.facilities.map((facility, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm" style={{ color: "#7A7A72" }}>
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "#F5F0E8" }}
                      >
                        <Image
                          src={facility.icon}
                          width={16}
                          height={16}
                          alt={facility.alter}
                          className="opacity-70"
                        />
                      </span>
                      {facility.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client component handles hover interaction */}
              <BookButton />

              <p className="text-center text-xs mt-4" style={{ color: "#7A7A72" }}>
                Free cancellation · No hidden fees
              </p>
            </div>
          </div>

        </div>
      </section>

      <Foot />
    </main>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Destinations from "../../components/slide";
import TourCard from "../../components/pack-cards";
import WhyTrustUs from "../../components/trust";
import Foot from "../../components/footer";
import Steps from "../../components/trip-steps";
import Link from "next/link";
import PackageCards from "../../components/packageCards";
import Hls from "hls.js";

const services = [
  {
    num: "01",
    icon: "/airplane.svg",
    title: "Flights & Transfers",
    desc: "Convenient routes and competitive fares for smooth, stress-free travel between every destination.",
  },
  {
    num: "02",
    icon: "/hotel.svg",
    title: "Accommodation Planning",
    desc: "Comfortable hotels with quality service in prime locations, handpicked for every budget.",
  },
  {
    num: "03",
    icon: "/suitcase.svg",
    title: "Tour Packages",
    desc: "Customized local and international tours tailored precisely for your travel style.",
  },
  {
    num: "04",
    icon: "/passport.svg",
    title: "Visa Assistance",
    desc: "Reliable visa guidance and documentation support for seamless international travel.",
  },
];

const testimonials = [
  {
    text: "Lunarway made our Malaysia trip absolutely seamless. From airport transfers to hotel check-ins, every single detail was handled with care. I felt like I had a personal travel concierge the entire trip.",
    name: "Priya Fernando",
    trip: "Malaysia Tour · 2024",
  },
  {
    text: "The Dubai package was incredible value. Our guide was knowledgeable and the hotel they chose was stunning. Lunarway went above and beyond to ensure every moment was extraordinary.",
    name: "Rajan Pathmanathan",
    trip: "Dubai Safari · 2024",
  },
  {
    text: "I was nervous about travelling internationally for the first time, but Lunarway handled everything including the visa. The Thailand trip was beyond my expectations.",
    name: "Chamari Wickramasinghe",
    trip: "Thailand Explorer · 2023",
  },
];

const marqueeItems = [
  "Malaysia", "Thailand", "Dubai", "Singapore",
  "Sri Lanka", "Maldives","Myanmar"
];


export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://vz-919f82ce-871.b-cdn.net/a107b64e-dd9d-46ef-a155-55b865e6fe53/playlist.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(err => console.log('Autoplay prevented:', err));
      });

      // Cleanup
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari native HLS support
      video.src = hlsUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(err => console.log('Autoplay prevented:', err));
      });
    }
  }, []);



  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* Cover image */}
     <section className="relative flex items-end overflow-hidden" style={{ height: "94vh", minHeight: "50px" }}>
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute border-0 object-cover"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,25,35,0.08) 0%, rgba(15,25,35,0.04) 40%, rgba(15,25,35,0.70) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pb-16 md:pb-24 grid md:grid-cols-2 gap-8 items-end">
          <h1
            className="text-white font-light leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(52px, 7vw, 96px)",
            }}
          >
            Travel Begins<br />
            With The{" "}
            <em className="italic" style={{ color: "#C9A96E" }}>Right</em><br />
            Journey.
          </h1>


          <div className="flex flex-col items-start gap-5 md:pb-2">

            <div className="flex flex-wrap gap-2">
              {[" Sri Lanka", " International", " Curated Tours"].map((b) => (
                <span
                  key={b}
                  className="text-white text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.20)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-sm">
              From short local escapes to exciting international adventures,
              we create travel experiences that are smooth, reliable, and unforgettable.
            </p>

            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase px-7 py-3.5 rounded-sm transition-all duration-200 hover:bg-[#C9A96E] hover:-translate-y-0.5 group"
              style={{ background: "white", color: "#1A1A18" }}
            >
              Explore Packages
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/*Services*/}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <div
            className="w-px"
            style={{
              height: "40px",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
            }}
          />
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Scroll
          </span>
        </div>
      </section>


      <div className="overflow-hidden py-3.5" style={{ background: "#1A1A18" }}>
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-6 text-xs tracking-[0.15em] uppercase"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "#C9A96E" }}
              />
              {item}
            </span>
          ))}
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-16" style={{ background: "#F5F0E8" }}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "#C9A96E" }}
              >
                What We Offer
              </p>
              <h2
                className="text-4xl md:text-5xl font-light leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18" }}
              >
                Your Trusted Partner<br />
                For Local &amp;{" "}
                <em className="italic" style={{ color: "#B85C38" }}>Global</em><br />
                Travel
              </h2>
            </div>
            <p
              className="text-base md:text-lg leading-relaxed self-end md:ml-10"
              style={{ color: "#7A7A72" }}
            >
              We provide complete planning and on-ground support for well-organized
              tours across Sri Lanka and overseas destinations, so you can travel
              with confidence.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "#EDE8DE" }}>
            {services.map((s) => (
              <div
                key={s.num}
                className="bg-white p-9 relative overflow-hidden group cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{ borderBottom: "3px solid transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "#C9A96E";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.zIndex = "1";
                  (e.currentTarget as HTMLElement).style.position = "relative";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Ghost number */}
                <span
                  className="absolute top-5 right-6 select-none pointer-events-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "72px",
                    fontWeight: 300,
                    color: "rgba(0,0,0,0.04)",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </span>

                <div className="mb-6">
                  <Image src={s.icon} width={36} height={36} alt={s.title} />
                </div>
                <h3
                  className="font-semibold text-base mb-3"
                  style={{ color: "#1A1A18", letterSpacing: "-0.01em" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A7A72" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     <PackageCards />

      {/* ── TOUR PACKAGES ─────────────────────────────────────────────────── */}
      <TourCard />

      {/* ── WHY TRUST US ──────────────────────────────────────────────────── */}
      <WhyTrustUs />

      {/* ── STEPS ─────────────────────────────────────────────────────────── */}
      <Steps />

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "#C9A96E" }}
            >
              Traveler Stories
            </p>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18" }}
            >
              Stories From<br />
              Our <em className="italic" style={{ color: "#B85C38" }}>Travelers</em>
            </h2>
            <p className="mt-4 text-base text-[#7A7A72] max-w-md mx-auto">
              Hear from travelers who have trusted us to plan their local and
              international journeys.
            </p>
          </div>


          {/* Comments */}
          <div className="relative rounded-xl overflow-hidden" style={{ height: "520px" }}>
            <Image
              src="/home-cover.webp"
              alt="Traveler story background"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(15,25,35,0.52)" }}
            />


            <div className="absolute inset-0 flex items-end justify-center pb-10 px-6 gap-5">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-7 max-w-sm w-full shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hidden md:block"
                >
                  <span
                    className="block mb-3 leading-none select-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "56px",
                      color: "#C9A96E",
                      lineHeight: 0.7,
                    }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="text-sm leading-relaxed mb-5 italic"
                    style={{ color: "#7A7A72" }}
                  >
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #EDE8DE" }}>
                    <div
                      className="w-9 h-9 rounded-full flex-shrink-0"
                      style={{ background: "#F5F0E8", border: "2px solid #EDE8DE" }}
                    />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#1A1A18" }}>
                        {t.name}
                      </p>
                      <p className="text-xs" style={{ color: "#7A7A72" }}>
                        {t.trip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Foot />
    </main>
  )
}



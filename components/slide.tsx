"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [

  {
    name: "Malaysia",
    tag: "International",
    description: "Modern cities and rich culture. Landmarks, shopping, and scenic attractions.",
      images: ['/destination-img1.webp', '/malaysia2.webp'],
    url: 'destination/malaysia',
  },
  {
    name: "Thailand",
    tag: "International",
    description: 'Culture, temples, and lively streets. Markets, nightlife, and iconic sights. Ideal for adventure and leisure.',
   images: ['/thailand1.webp', '/thailand2.webp'],
      url: 'destination/thailand',
  },
  {
    name: "Dubai",
    tag: "International",
    description: 'Luxury city and desert adventures.Iconic landmarks and premium shopping. Perfect for modern travel experiences.',
    images: ['/Dubai1.webp', '/Dubai2.webp'],
      url: 'destination/dubai',
  },

];

export default function Destinations() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const max = destinations.length - visible;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  return (
    <section className="py-24 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "#C9A96E" }}
            >
              Explore The World
            </p>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18" }}
            >
              Places We Take<br />
              You <em className="italic" style={{ color: "#B85C38" }}>Worldwide</em>
            </h2>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 border disabled:opacity-30"
              style={{ borderColor: "#EDE8DE", color: "#1A1A18" }}
              onMouseEnter={(e) => {
                if (index > 0) {
                  (e.currentTarget as HTMLElement).style.background = "#C9A96E";
                  (e.currentTarget as HTMLElement).style.borderColor = "#C9A96E";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "white";
                (e.currentTarget as HTMLElement).style.borderColor = "#EDE8DE";
                (e.currentTarget as HTMLElement).style.color = "#1A1A18";
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={index >= max}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 border disabled:opacity-30"
              style={{ borderColor: "#EDE8DE", color: "#1A1A18" }}
              onMouseEnter={(e) => {
                if (index < max) {
                  (e.currentTarget as HTMLElement).style.background = "#C9A96E";
                  (e.currentTarget as HTMLElement).style.borderColor = "#C9A96E";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "white";
                (e.currentTarget as HTMLElement).style.borderColor = "#EDE8DE";
                (e.currentTarget as HTMLElement).style.color = "#1A1A18";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${index} * (33.333% + 6.667px)))` }}
          >
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className="flex-shrink-0 rounded-lg overflow-hidden relative group cursor-pointer"
                style={{ width: "calc(33.333% - 14px)", aspectRatio: "3/4" }}
              >
                <Image
                  src={dest.images[0]}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-7"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(15,25,35,0.88) 0%, rgba(15,25,35,0) 55%)",
                  }}
                >
                  <span
                    className="inline-block text-white text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm mb-3 w-fit"
                    style={{ background: "#C9A96E" }}
                  >
                    {dest.tag}
                  </span>
                  <h3
                    className="text-white text-3xl font-light mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {dest.description}
                  </p>
                  <Link
                   href={dest.url}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-all duration-200 hover:gap-3"
                    style={{ color: "#C9A96E" }}
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-8 md:hidden">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="h-[3px] rounded-full transition-all duration-300"
              style={{
                width: i === index ? "40px" : "24px",
                background: i === index ? "#1A1A18" : "#E2DDD4",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

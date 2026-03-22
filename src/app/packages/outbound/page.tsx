"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Foot from "../../../../components/footer";
import Navbar from "../../../../components/navbar";

interface Destination {
  id: number;
  country: string;
  region: string;
  description: string;
  popularTours: string[];
  bestTime: string;
  duration: string;
  priceFrom: string;
   slug: string
  image: string;
 
  featured?: boolean;
}

const OutboundPackages = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const destinations: Destination[] = [
    {
     id: 1,
      country: "Malaysia",
      region: "Southeast Asia",
      description: "Experience the perfect blend of modern cities, cultural heritage, and tropical beaches.",
      popularTours: [
        "Guided Kuala Lumpur city tour",
        "Visit to Batu Caves",
        "Sunway Lagoon Theme Park",
        "Cable Car experience",
      ],
      bestTime: "Dec - Feb",
      duration: "3 Nights | 4 Days",
      priceFrom: "LKR 85,000",
      image: "/malaysia.webp",
      slug: "malaysia",
      featured: true,
    },
    {
     id: 2,
      country: "Thailand",
      region: "Southeast Asia",
      description: "Discover stunning temples, vibrant street life, pristine beaches, and world-class cuisine.",
      popularTours: [
        "Grand Palace & Wat Arun",
        "Dream World Theme Park",
        "Bangkok Street Food Tour",
        "BTS Experience & Chinatown",
      ],
      bestTime: "Nov - Feb",
      duration: "4 Nights | 5 Days",
      priceFrom: "LKR 70,000",
      image: "/thailand1.webp",
      slug: "thailand",
      featured: true,
    },
    {
      id: 3,
      country: "Dubai",
      region: "Middle East",
      description: "Experience luxury, futuristic architecture, desert adventures, and world-class shopping.",
      popularTours: [
        "Dubai City Tour & Burj Khalifa",
        "Desert Safari Adventure",
        "Miracle Garden Visit",
        "Global Village Tour",
      ],
      bestTime: "Nov - Mar",
      duration: "4 Nights | 5 Days",
      priceFrom: "LKR 160,000",
      image: "/Dubai1.webp",
      slug: "dubai",
      featured: true,
    },
    
    {
      id: 4,
      country: "Myanmar",
      region: "Southeast Asia",
      description: "Ancient temples, royal capitals, and sacred landscapes await in this culturally rich destination.",
      popularTours: [
        "Yangon & Golden Pagoda",
        "Bagan Ancient Temples",
        "Inle Lake Boat Tour",
        "Mandalay Cultural Experience",
      ],
      bestTime: "Nov - Feb",
      duration: "9 Nights | 10 Days",
      priceFrom: "Contact for pricing",
      image: "/myanmar-pack.webp",
      slug: "myanmar",
     
    },
   
  ];



  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar/>
      {/* Header */}
      <section
        className="relative py-32 px-6 md:px-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A1A18 0%, #2A2A28 100%)" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors"
          >
            ← Back to Home
          </Link>

          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#B85C38" }}
          >
            Outbound Packages
          </p>
          <h1
            className="text-5xl md:text-6xl font-light leading-tight text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Discover the <br />
            <em className="italic" style={{ color: "#B85C38" }}>World Beyond</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Embark on unforgettable international adventures with our expertly crafted
            travel packages to destinations around the globe.
          </p>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #B85C38 0%, transparent 70%)",
            transform: "translate(40%, -40%)",
          }}
        />
      </section>



      {/* Destinations Grid */}
      <section className="py-16 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ border: "1px solid #EDE8DE" }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.country}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {dest.featured && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: "#B85C38" }}
                    >
                      Popular
                    </div>
                  )}
                  
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#B85C38" }}>
                      {dest.region}
                    </p>
                    <h3
                      className="text-2xl font-semibold"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "#1A1A18",
                      }}
                    >
                      {dest.country}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm" style={{ color: "#7A7A72" }}>
                    <span className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {dest.duration}
                    </span>
                    <span>📅 {dest.bestTime}</span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#7A7A72" }}>
                    {dest.description}
                  </p>

                  {/* Popular Tours */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1A1A18" }}>
                      Popular Tours
                    </p>
                    <ul className="space-y-1">
                      {dest.popularTours.slice(0, 3).map((tour, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "#7A7A72" }}>
                          <span style={{ color: "#B85C38" }}>✓</span>
                          <span>{tour}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #EDE8DE" }}>
                    <span className="font-semibold" style={{ color: "#B85C38" }}>
                      {dest.priceFrom}
                    </span>
                    <Link
                      href="/packages/custom"
                      className="px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: "#B85C38",
                        color: "white",
                      }}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-16" style={{ background: "#1A1A18" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-light leading-tight text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Dream Destination Not Listed?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            We can arrange travel to virtually any destination worldwide. Tell us where you want to go!
          </p>
          <Link
            href="/packages/custom"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1"
            style={{ background: "#B85C38", color: "white" }}
          >
            Build Your Own Package
            <span>→</span>
          </Link>
        </div>
      </section>
      <Foot/>
    </main>
  );
};

export default OutboundPackages;

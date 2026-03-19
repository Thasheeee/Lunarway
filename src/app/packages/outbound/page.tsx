"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Destination {
  id: number;
  country: string;
  region: string;
  description: string;
  popularTours: string[];
  bestTime: string;
  duration: string;
  priceFrom: string;
  image: string;
  flag: string;
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
        "Kuala Lumpur City Tour",
        "Langkawi Island Paradise",
        "Penang Food & Heritage",
        "Cameron Highlands Retreat",
      ],
      bestTime: "Dec - Feb",
      duration: "5-7 Days",
      priceFrom: "From LKR 120,000",
      image: "/l1.jpg",
      flag: "🇲🇾",
      featured: true,
    },
    {
      id: 2,
      country: "Thailand",
      region: "Southeast Asia",
      description: "Discover stunning temples, vibrant street life, pristine beaches, and world-class cuisine.",
      popularTours: [
        "Bangkok & Pattaya Delight",
        "Phuket Beach Escape",
        "Chiang Mai Cultural Tour",
        "Krabi Island Hopping",
      ],
      bestTime: "Nov - Feb",
      duration: "4-6 Days",
      priceFrom: "From LKR 95,000",
      image: "/food.jpg",
      flag: "🇹🇭",
      featured: true,
    },
    {
      id: 3,
      country: "Dubai",
      region: "Middle East",
      description: "Experience luxury, futuristic architecture, desert adventures, and world-class shopping.",
      popularTours: [
        "Dubai City Highlights",
        "Desert Safari Adventure",
        "Abu Dhabi Day Trip",
        "Shopping Extravaganza",
      ],
      bestTime: "Nov - Mar",
      duration: "4-5 Days",
      priceFrom: "From LKR 180,000",
      image: "/l3.jpg",
      flag: "🇦🇪",
      featured: true,
    },
    {
      id: 4,
      country: "Singapore",
      region: "Southeast Asia",
      description: "A modern metropolis with lush gardens, diverse cuisine, and endless entertainment.",
      popularTours: [
        "Gardens by the Bay",
        "Sentosa Island Fun",
        "Universal Studios",
        "Marina Bay Experience",
      ],
      bestTime: "Feb - Apr",
      duration: "3-5 Days",
      priceFrom: "From LKR 140,000",
      image: "/l1.jpg",
      flag: "🇸🇬",
    },
    {
      id: 5,
      country: "Maldives",
      region: "South Asia",
      description: "Paradise islands with crystal-clear waters, luxury resorts, and unforgettable sunsets.",
      popularTours: [
        "Luxury Resort Stay",
        "Snorkeling & Diving",
        "Island Hopping Tour",
        "Romantic Getaway Package",
      ],
      bestTime: "Nov - Apr",
      duration: "4-7 Days",
      priceFrom: "From LKR 250,000",
      image: "/food.jpg",
      flag: "🇲🇻",
      featured: true,
    },
    {
      id: 6,
      country: "India",
      region: "South Asia",
      description: "Explore ancient monuments, diverse cultures, spiritual sites, and incredible cuisine.",
      popularTours: [
        "Golden Triangle Tour",
        "Kerala Backwaters",
        "Rajasthan Heritage",
        "Goa Beach Vacation",
      ],
      bestTime: "Oct - Mar",
      duration: "5-10 Days",
      priceFrom: "From LKR 85,000",
      image: "/l3.jpg",
      flag: "🇮🇳",
    },
    {
      id: 7,
      country: "Vietnam",
      region: "Southeast Asia",
      description: "Stunning natural beauty, rich history, delicious street food, and warm hospitality.",
      popularTours: [
        "Ha Long Bay Cruise",
        "Hanoi & Ho Chi Minh City",
        "Mekong Delta Adventure",
        "Hoi An Ancient Town",
      ],
      bestTime: "Feb - Apr",
      duration: "6-8 Days",
      priceFrom: "From LKR 110,000",
      image: "/l1.jpg",
      flag: "🇻🇳",
    },
    {
      id: 8,
      country: "Bali, Indonesia",
      region: "Southeast Asia",
      description: "Tropical paradise with stunning beaches, ancient temples, and vibrant culture.",
      popularTours: [
        "Ubud Cultural Tour",
        "Beach Club Hopping",
        "Temple & Rice Terrace",
        "Volcano Sunrise Trek",
      ],
      bestTime: "Apr - Oct",
      duration: "5-7 Days",
      priceFrom: "From LKR 130,000",
      image: "/food.jpg",
      flag: "🇮🇩",
      featured: true,
    },
  ];

  const regions = [
    { id: "all", name: "All Destinations" },
    { id: "southeast", name: "Southeast Asia" },
    { id: "middle-east", name: "Middle East" },
    { id: "south-asia", name: "South Asia" },
  ];

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
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

      {/* Region Filter */}
      <section className="py-8 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedRegion === region.id
                    ? "text-white shadow-lg"
                    : "bg-white text-[#7A7A72] hover:bg-[#F5F0E8]"
                }`}
                style={{
                  background: selectedRegion === region.id ? "#B85C38" : undefined,
                }}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>
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
                  {/* Flag overlay */}
                  <div className="absolute top-4 left-4 text-4xl">
                    {dest.flag}
                  </div>
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
    </main>
  );
};

export default OutboundPackages;

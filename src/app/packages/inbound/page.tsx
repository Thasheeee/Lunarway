"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Package {
  id: number;
  title: string;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
  image: string;
  featured?: boolean;
}

const InboundPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const packages: Package[] = [
    {
      id: 1,
      title: "Cultural Triangle Explorer",
      duration: "5 Days / 4 Nights",
      price: "From LKR 85,000",
      description: "Discover ancient kingdoms, sacred temples, and UNESCO World Heritage sites across Sri Lanka's cultural heartland.",
      highlights: [
        "Sigiriya Rock Fortress",
        "Dambulla Cave Temple",
        "Polonnaruwa Ancient City",
        "Temple of the Tooth - Kandy",
      ],
      image: "/l1.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Southern Coast Paradise",
      duration: "4 Days / 3 Nights",
      price: "From LKR 65,000",
      description: "Relax on pristine beaches, explore colonial forts, and enjoy coastal adventures along Sri Lanka's southern shore.",
      highlights: [
        "Galle Fort & Old Town",
        "Mirissa Whale Watching",
        "Unawatuna Beach",
        "Turtle Hatchery Visit",
      ],
      image: "/food.jpg",
    },
    {
      id: 3,
      title: "Hill Country Escape",
      duration: "6 Days / 5 Nights",
      price: "From LKR 95,000",
      description: "Experience cool mountain air, rolling tea plantations, and breathtaking landscapes in Sri Lanka's highlands.",
      highlights: [
        "Nuwara Eliya Tea Estates",
        "Horton Plains National Park",
        "Train Journey through Hill Country",
        "Gregory Lake Activities",
      ],
      image: "/l3.jpg",
      featured: true,
    },
    {
      id: 4,
      title: "Wildlife Safari Adventure",
      duration: "3 Days / 2 Nights",
      price: "From LKR 55,000",
      description: "Encounter majestic elephants, leopards, and diverse wildlife in their natural habitats.",
      highlights: [
        "Yala National Park Safari",
        "Elephant Gathering - Minneriya",
        "Bird Watching Excursions",
        "Nature Photography Tours",
      ],
      image: "/l1.jpg",
    },
    {
      id: 5,
      title: "Complete Island Tour",
      duration: "10 Days / 9 Nights",
      price: "From LKR 180,000",
      description: "The ultimate Sri Lankan experience covering culture, nature, beaches, and wildlife across the island.",
      highlights: [
        "All Major UNESCO Sites",
        "Multiple National Parks",
        "Beach & Mountain Resorts",
        "Cultural Performances",
      ],
      image: "/food.jpg",
      featured: true,
    },
    {
      id: 6,
      title: "Colombo City Break",
      duration: "2 Days / 1 Night",
      price: "From LKR 35,000",
      description: "Explore the vibrant capital city with its blend of colonial charm and modern attractions.",
      highlights: [
        "Galle Face Green",
        "National Museum",
        "Pettah Markets",
        "Fine Dining Experiences",
      ],
      image: "/l3.jpg",
    },
  ];

  const categories = [
    { id: "all", name: "All Packages" },
    { id: "cultural", name: "Cultural" },
    { id: "beach", name: "Beach & Coastal" },
    { id: "nature", name: "Nature & Wildlife" },
    { id: "city", name: "City Tours" },
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
            style={{ color: "#C9A96E" }}
          >
            Inbound Packages
          </p>
          <h1
            className="text-5xl md:text-6xl font-light leading-tight text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Explore the <br />
            <em className="italic" style={{ color: "#C9A96E" }}>Pearl of the Indian Ocean</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Discover Sri Lanka's rich heritage, stunning landscapes, and vibrant culture
            with our carefully curated local tour packages.
          </p>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
            transform: "translate(40%, -40%)",
          }}
        />
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "text-white shadow-lg"
                    : "bg-white text-[#7A7A72] hover:bg-[#F5F0E8]"
                }`}
                style={{
                  background: selectedCategory === cat.id ? "#C9A96E" : undefined,
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ border: "1px solid #EDE8DE" }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {pkg.featured && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: "#C9A96E" }}
                    >
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className="text-xl font-semibold"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "#1A1A18",
                      }}
                    >
                      {pkg.title}
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
                      {pkg.duration}
                    </span>
                    <span className="font-semibold" style={{ color: "#C9A96E" }}>
                      {pkg.price}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#7A7A72" }}>
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1A1A18" }}>
                      Highlights
                    </p>
                    <ul className="space-y-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "#7A7A72" }}>
                          <span style={{ color: "#C9A96E" }}>✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/packages/custom"
                    className="block w-full text-center py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "#C9A96E",
                      color: "white",
                    }}
                  >
                    Book This Package
                  </Link>
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
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Create a custom package tailored exactly to your preferences and travel style.
          </p>
          <Link
            href="/packages/custom"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1"
            style={{ background: "#C9A96E", color: "white" }}
          >
            Build Your Own Package
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default InboundPackages;

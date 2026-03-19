"use client";

import Link from "next/link";
import Image from "next/image";

const PackageCards = () => {
  const packages = [
    {
      title: "Inbound",
      subtitle: "Explore Sri Lanka",
      description: "Discover the beauty of Sri Lanka with our carefully curated local tour packages.",
     
      href: "/packages/inbound",
      color: "#C9A96E",
      gradient: "linear-gradient(135deg, rgba(201,169,110,0.1) 0%, rgba(201,169,110,0.05) 100%)",
    },
    {
      title: "Outbound",
      subtitle: "Discover the World",
      description: "Experience amazing international destinations with our expertly planned travel packages.",
     
      href: "/packages/outbound",
      color: "#B85C38",
      gradient: "linear-gradient(135deg, rgba(184,92,56,0.1) 0%, rgba(184,92,56,0.05) 100%)",
    },
    {
      title: "Build Your Own",
      subtitle: "Custom Package",
      description: "Create a personalized travel experience tailored exactly to your preferences.",
      
      href: "/packages/custom",
      color: "#7A7A72",
      gradient: "linear-gradient(135deg, rgba(122,122,114,0.1) 0%, rgba(122,122,114,0.05) 100%)",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#C9A96E" }}
          >
            Choose Your Adventure
          </p>
          <h2
            className="text-4xl md:text-5xl font-light leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18" }}
          >
            Travel Packages <br />
            Made <em className="italic" style={{ color: "#B85C38" }}>Just For You</em>
          </h2>
          <p className="mt-4 text-base text-[#7A7A72] max-w-2xl mx-auto">
            Whether you're exploring Sri Lanka, venturing abroad, or crafting your dream journey,
            we have the perfect package for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Link
              key={index}
              href={pkg.href}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                border: "1px solid #EDE8DE",
                background: pkg.gradient,
              }}
            >
              {/* Icon */}
              
              {/* Content */}
              <div className="mb-6">
                <p
                  className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                  style={{ color: pkg.color }}
                >
                  {pkg.subtitle}
                </p>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#1A1A18",
                  }}
                >
                  {pkg.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A7A72" }}>
                  {pkg.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-4" style={{ color: pkg.color }}>
                <span>Explore</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>

              {/* Decorative element */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${pkg.color}15 0%, transparent 70%)`,
                  transform: "translate(30%, -30%)",
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCards;

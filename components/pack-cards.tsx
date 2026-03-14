import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    country: "Malaysia",
    title: "Malaysia mosque architecture",
    description:
      "City skylines, hill resorts, Batu Caves and cultural immersion in modern Malaysia.",
    duration: "6 days",
    rating: "4.9",
    price: "LKR 85,000",
    image: "/malaysia-pack.webp",
    href: "destination/malaysia",
  },
  {
    country: "Thailand",
    title: "Thailand travel scenery",
    description:
      "Temples, floating markets, nightlife, and stunning Gulf of Thailand coastline.",
    duration: "6 days",
    rating: "4.8",
    price: "LKR 70,000",
    image: "/thailand-pack.webp",
    href: "destination/thailand",
  },
  {
    country: "Dubai",
    title:"Dubai skyline cityscape",
    description:
      "Burj Khalifa, desert dunes, gold souk, and world-class dining in the UAE.",
    duration: "6 days",
    rating: "5.0",
    price: "LKR 160,000",
    image: "/dubai-pack.webp",
    href: "destination/dubai",
  },
  {
    country: "Myanmar",
    title: "Royal Capitals of Myanmar",
    description: "Ancient pagodas, royal cities, Inle Lake, and Bagan's timeless temple plains.",
    duration: "10 days",
    rating: "4.9",
    price: "LKR 230,000",
    image: "/myanmar-pack.webp",
    href: "destination/myanmar",
  },
];

export default function TourCard() {
  return (
    <section className="py-24 px-6 md:px-16" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "#C9A96E" }}
            >
              Most Popular
            </p>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18" }}
            >
              Explore Our<br />
              Tour <em className="italic" style={{ color: "#B85C38" }}>Packages</em>
            </h2>
          </div>
          <p className="text-[#7A7A72] text-base md:text-lg leading-relaxed md:ml-10 self-end">
            Carefully planned local and international tour packages designed to
            offer comfort, value, and memorable travel experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.country}
              className="bg-white rounded-lg overflow-hidden group transition-all duration-400 hover:-translate-y-1.5"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 24px 48px rgba(0,0,0,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 12px rgba(0,0,0,0.06)";
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.country}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: "white", color: "#1A1A18" }}
                >
                  {pkg.country}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs tracking-wide" style={{ color: "#7A7A72" }}>
                    ⏱ {pkg.duration}
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "#C9A96E" }}
                  >
                    ★ {pkg.rating}
                  </span>
                </div>

                <h3
                  className="text-xl font-medium mb-2 leading-snug"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#1A1A18",
                  }}
                >
                  {pkg.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#7A7A72" }}
                >
                  {pkg.description}
                </p>

                <div
                  className="flex justify-between items-center pt-4"
                  style={{ borderTop: "1px solid #EDE8DE" }}
                >
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-widest"
                      style={{ color: "#7A7A72" }}
                    >
                      Starting at
                    </p>
                    <p
                      className="text-xl font-medium"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "#1A1A18",
                      }}
                    >
                      {pkg.price}
                    </p>
                  </div>

                  <Link
                    href={pkg.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2.5 rounded-sm border transition-all duration-200 "
                    style={{ borderColor: "#1A1A18", color: "#1A1A18" }}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200"
            style={{ background: "#1A1A18", color: "white" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#C9A96E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1A1A18";
            }}
          >
            View All Packages →
          </Link>
        </div>

      </div>
    </section>
  );
}

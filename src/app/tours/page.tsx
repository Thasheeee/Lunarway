import Image from 'next/image'
import Navbar from '../../../components/navbar'
import Steps from '../../../components/trip-steps'
import Foot from '../../../components/footer'
import Link from "next/link";

interface TourPackage {
  id: number;
  destination: string;
  price: string;
  duration: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const tourPackages: TourPackage[] = [
  {
    id: 1,
    destination: "Malaysia",
    price: "LKR 85,000",
    duration: "6 Days / 5 Nights",
    image: "/malaysia-pack.webp",
    imageAlt: "Malaysia mosque architecture",
    slug: "destination/malaysia",
  },
  {
    id: 2,
    destination: "Thailand",
    price: "LKR 70,000",
    duration: "5 Days / 4 Nights",
    image: "/thailand-pack.webp",
    imageAlt: "Thailand travel scenery",
    slug: "destination/thailand",
  },
  {
    id: 3,
    destination: "Dubai",
    price: "LKR 160,000",
    duration: "7 Days / 6 Nights",
    image: "/dubai-pack.webp",
    imageAlt: "Dubai skyline cityscape",
    slug: "destination/dubai",
  },
];

function TourCard({ tour }: { tour: TourPackage }) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "320px" }}>
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,25,35,0.80) 0%, rgba(15,25,35,0.10) 55%)" }} />

        {/* Country badge */}
        <span className="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-white text-[#1A1A18]">
          {tour.destination}
        </span>

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
          <div>
            <p
              className="text-white font-light text-lg leading-none mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {tour.price}
            </p>
            <p className="text-white/65 text-xs tracking-wide">{tour.duration}</p>
          </div>

          <Link
            href={`/${tour.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2.5 rounded-sm transition-colors duration-200 bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white hover:text-[#1A1A18]"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Tours() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-10 px-6 md:px-16" style={{ background: "#F5F0E8" }}>
        <div className="max-w-7xl mx-auto">

          {/* Title row */}
          <div className="grid md:grid-cols-2 gap-10 items-end mb-10">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "#C9A96E" }}
              >
                Tour Packages
              </p>
              <h1
                className="font-light leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(48px, 7vw, 96px)",
                  color: "#1A1A18",
                }}
              >
                Find Your<br />
                <em className="italic" style={{ color: "#B85C38" }}>Perfect</em> Journey
              </h1>
            </div>
            <p
              className="text-base md:text-lg leading-relaxed self-end md:ml-10"
              style={{ color: "#7A7A72" }}
            >
              Explore carefully curated local and international tour packages
              designed for every type of traveler.
            </p>
          </div>

          {/* Cover image */}
          <div className="rounded-xl overflow-hidden" style={{ height: "480px" }}>
            <Image
              src="/tours-cover.webp"
              alt="Aerial beach view"
              width={1400}
              height={480}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-16" style={{ background: "#FAFAF7" }}>
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: "#C9A96E" }}
              >
                All Packages
              </p>
              <h2
                className="text-4xl md:text-5xl font-light leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18" }}
              >
                Explore Our Most<br />
                Popular <em className="italic" style={{ color: "#B85C38" }}>Packages</em>
              </h2>
            </div>
            <p className="text-[#7A7A72] text-base md:text-lg leading-relaxed self-end md:ml-10">
              Discover a range of tour packages designed for comfort, ease, and
              memorable travel experiences across the world.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <Steps />

      <Foot />
    </main>
  );
}

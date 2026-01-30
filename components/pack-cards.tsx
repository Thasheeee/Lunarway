import React from "react";
import Link from "next/link";
import Image from "next/image";

interface TourPackage {
  id: number;
  destination: string;
  price: string;
  duration: string;
  image: string;
  imageAlt: string;
  slug: string;
}

interface TourCardProps {
  tour: TourPackage;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="relative h-[30rem] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-900 shadow-sm">
            {tour.destination}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">
                Starting at {tour.price}
              </p>
              <p className="text-sm opacity-90">{tour.duration}</p>
            </div>

            <Link
              href={`/${tour.slug}`}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-xs md:text-base font-medium hover:bg-white/30 group/btn"
            >
              Learn More
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const tourPackages: TourPackage[] = [
  {
    id: 1,
    destination: "Malaysia",
    price: "LKR 85,000",
    duration: "6 days",
    image: "/malaysia-pack.webp",
    imageAlt: "Malaysia mosque architecture",
    slug: "malaysia",
  },
  {
    id: 2,
    destination: "Thailand",
    price: "LKR 70,000",
    duration: "6 days",
    image: "/thailand-pack.webp",
    imageAlt: "Thailand travel scenery",
    slug: "thailand",
  },
  {
    id: 3,
    destination: "Dubai",
    price: "LKR 160,000",
    duration: "6 days",
    image: "/dubai-pack.webp",
    imageAlt: "Dubai skyline cityscape",
    slug: "dubai",
  },
];

const TourPackages: React.FC = () => {
  return (
    <section className="w-full mx-auto px-4 md:px-16 py-14 max-w-[300rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between">
        <div className="space-y-3 md:space-y-6">
          <h1 className="text-xl md:text-5xl font-bold text-black leading-tight text-center md:text-left">
            Explore Our Most <br /> Popular Tour <br /> Packages
          </h1>
        </div>

        <p className=" text-[#909090] text-base md:text-xl self-end text-center md:text-justify">
          Explore our carefully planned local and international tour packages,
          designed to offer comfort, value, and memorable travel experiences.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {tourPackages.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default TourPackages;

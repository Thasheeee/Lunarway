'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Destinations() {
  const slides = [
    {
      title: 'Malaysia',
      description:
        'Modern cities and rich culture. Landmarks, shopping, and scenic attractions. Great for varied travel experiences.',
      images: ['/destination-img1.webp', '/malaysia2.webp'],
      url: '/malaysia',
    },
    {
      title: 'Thailand',
      description:
        'Culture, temples, and lively streets. Markets, nightlife, and iconic sights. Ideal for adventure and leisure.',
      images: ['/thailand1.webp', '/thailand2.webp'],
      url: '/thailand',
    },
    {
      title: 'Dubai',
      description:
        'Luxury city and desert adventures.Iconic landmarks and premium shopping. Perfect for modern travel experiences.',
      images: ['/dubai1.webp', '/dubai2.webp'],
      url: '/dubai',
    },
  ];

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.clientWidth;
    const index = Math.round(sliderRef.current.scrollLeft / slideWidth);
    setActiveIndex(index);
  };

  return (
    <section className="w-full max-w-[300rem] mx-auto bg-[#F8F8F6] px-4 md:px-16 py-14 flex items-center">
      <div className="mx-auto w-full overflow-hidden">

        {/* SLIDER */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 scrollbar-hide"
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="min-w-full snap-center grid grid-cols-1 md:grid-cols-[30%_40%_30%] gap-10 md:gap-0 items-start"
            >
              {/* LEFT TEXT */}
              <div className="space-y-4 md:space-y-6 text-center md:text-left">
                <h2 className="text-xl md:text-5xl font-bold text-black leading-snug">
                  Places We <br /> Take You <br /> Worldwide
                </h2>
                <p className="text-gray-500 text-sm md:text-2xl md:w-5/6 mx-auto md:mx-0">
                  Discover destinations chosen for their experiences, culture, and unforgettable moments, both close to home and across the world.
                </p>
              </div>

              {/* CENTER IMAGE */}
              <div className="flex justify-center">
                <div className="h-[400px] w-full px-10 md:px-0 md:h-[90vh] max-h-[570] md:w-[80%] rounded-lg overflow-hidden shadow-md relative">
                  <Image
                    src={slide.images[0]}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                  />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col items-stretch h-[400px] md:h-[570px] relative">
                
                {/* TOP CARD */}
                <div className="bg-white rounded-xl shadow-sm py-6 px-4 w-full mb-6 md:py-10">
                  <h3 className="text-lg md:text-xl font-semibold text-black">
                    {slide.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg w-full mt-4">
                    {slide.description}
                  </p>
                </div>

                {/* BOTTOM IMAGE */}
                <div className="mt-auto w-[200px] md:w-[230px] h-[55%] rounded-xl self-start overflow-hidden shadow-md">
                  <img
                    src={slide.images[1]}
                    alt={`${slide.title} small`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* LINK */}
                <Link
                  href={slide.url}
                  className="absolute bottom-0 right-0 text-lg md:text-xl text-black font-medium hover:underline whitespace-nowrap"
                >
                  <u>View Details →</u>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-3 mt-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-[3px] w-8 transition-colors ${
                activeIndex === i ? "bg-black" : "bg-black/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

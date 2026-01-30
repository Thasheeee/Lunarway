import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-32  mx-auto w-full max-w-4/6 px-3 md:px-16">

      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
        <h1 className="font-bold text-gray-900 leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Malaysia</h1>

        <p className="text-[#909090] max-w-md leading-relaxed text-left text-lg">
          Explore carefully curated local and international tour packages designed for every type of traveler.
        </p>
      </div>

      {/* IMAGES GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch lg:max-h-[700px]">


        {/* LEFT IMAGE */}
        <div className="rounded-xl overflow-hidden h-full max-h-[600px] ">
          <Image
            src="/details-malaysia1.webp"
            alt="Bangkok river view"
            width={800}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </div>


        {/* RIGHT IMAGES */}
        <div className="space-y-4 lg:h-full">

        {/* Top wide image */}
        <div className="rounded-xl overflow-hidden lg:h-[calc(50%-0.5rem)] lg:max-h-[300px]">
          <Image
            src="/details-malaysia2.webp"
            alt="Bangkok skyline night"
            width={800}
            height={309}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom two images */}
        <div className="grid grid-cols-2 gap-4 lg:h-[calc(50%-0.5rem)] lg:max-h-[290px]">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/details-malaysia3.webp"
              alt="Temple architecture"
              width={400}
              height={309}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden">
            <Image
              src="/details-malaysia4.webp"
              alt="Wat Arun sunset"
              width={400}
              height={260}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        </div>


      </div>

    </section>
  );
}

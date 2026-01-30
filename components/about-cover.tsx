import Image from "next/image";
import { MapPinned,Banknote,SquarePen,Handshake } from "lucide-react";

function JourneySection() {
  return (
    <section className="py-24 md:content-center">
    <div className="max-w-4/6 mx-auto px-3 md:px-16 ">

        {/* Top Row */}
        <div className="md:gap-20 gap-10 flex items-stretch flex-col md:flex-row justify-between">
          <h2 className="text-2xl md:text-6xl text-black font-semibold leading-tight text-left ">
            Your Journey, <br /> Our Commitment
          </h2>

          <span className="text-[#909090] self-end w-full md:w-3/6 md:ml-20 text-base md:text-xl text-left md:text-justify">
            We plan travel experiences with care, clarity, and attention to
            detail, so every journey feels effortless and memorable.
          </span>
        </div>

        {/* Image Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Large Image */}
          <div className="md:col-span-2 relative h-[320px] md:h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/about-cover1.webp"
              alt="Mountain journey"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Images */}
          <div className="md:col-span-1 relative h-[320px] md:h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/about-cover2.webp"
              alt="Mountain journey"
              fill
              className="object-cover"
            />
          </div>

            <div className="md:col-span-1 relative h-[320px] md:h-[600px] rounded-xl overflow-hidden">
                <Image
                src="/about-cover3.webp"
                alt="Mountain journey"
                fill
                className="object-cover"
                />
            </div>
          </div>
        

        {/* Bottom Content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 md:gap-20">

          <h3 className="text-xl md:text-5xl text-black font-semibold leading-tight text-center md:text-left">
            Where Every <br /> Journey Begins
          </h3>

          <div className="text-gray-500 text-sm md:text-base space-y-6 max-w-xl text-center md:text-left">
            <p>
              We are a travel-focused team dedicated to planning smooth and
              well-organized journeys. Our aim is to simplify travel by handling
              the details, allowing our travelers to focus on enjoying the
              experience.
            </p>

            <p>
              From local getaways to international tours, every journey we plan
              reflects our commitment to reliability, comfort, and thoughtful
              planning.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 mx-6 md:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="space-y-2">
            <Image 
              src="/map.svg"
              width={30}
              height={30}
              alt="Map"
              className="md:mx-0 mx-auto"
            />
            <h4 className="text-lg text-center md:text-left font-semibold text-black">Carefully Planned Itineraries</h4>
            <p className="text-base text-center md:text-left text-gray-500">
              Well-structured journeys designed for comfort and smooth travel.
            </p>
          </div>

          <div className="space-y-2">
            <Image 
              src="/money.svg"
              width={30}
              height={30}
              alt="Cash"
              className="md:mx-0 mx-auto"
            />
            <h4 className="text-lg text-center md:text-left font-semibold text-black">Transparent Pricing</h4>
            <p className="text-base text-center md:text-left text-gray-500">
              Clear pricing with no hidden costs or surprises.
            </p>
          </div>

          <div className="space-y-2">
          <Image 
              src="/art.svg"
              width={30}
              height={30}
              alt="Art"
              className="md:mx-0 mx-auto"
            />
            <h4 className="text-lg text-center md:text-left font-semibold text-black">Flexible Travel Options</h4>
            <p className="text-base text-center md:text-left text-gray-500">
              Adjust travel dates, hotels, and experiences to suit your needs.
            </p>
          </div>

          <div className="space-y-2">
          <Image 
              src="/handshake.svg"
              width={30}
              height={30}
              alt="Handshake"
              className="md:mx-0 mx-auto"
            />
            <h4 className="text-lg text-center md:text-left font-semibold text-black">Dedicated Travel Support</h4>
            <p className="text-base text-center md:text-left text-gray-500">
              Reliable assistance before and throughout your journey.
            </p>
          </div>

        </div>
        </div>
      </section>
    
  );
}

export default JourneySection;

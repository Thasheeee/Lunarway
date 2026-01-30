import Image from "next/image";

export default function WhyTrustUs() {
  return (
    <section className="w-full bg-[#1b263b] py-14 max-w-[300rem] mx-auto">
      <div className=" px-3 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0"> 
          
          {/* LEFT IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
            <Image
              src="/mountain.webp" 
              alt="Traveler on mountain"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-navyLight px-3 md:px-16 py-10 flex flex-col justify-center">
            <h2 className="text-white text-center md:text-left text-2xl lg:text-4xl font-semibold leading-tight mb-8">
              Why Travelers Trust Us
              <br />
              With Their Journeys
            </h2>

            <TrustItem />
            <Divider />
            <TrustItem />
            <Divider />
            <TrustItem />
            <Divider />
            <TrustItem />
          </div>

        </div>
      </div>
    </section>
  );
}

function TrustItem() {
  return (
    <div className="flex gap-4 py-5">
      <span>
        <Image
            src={"/airplane.svg"}
            width={30}
            height={30}
            alt="plane logo"
            className="invert"
        />
      </span>
      <div>
        <h4 className="text-white font-semibold text-base">
          Local & International Expertise
        </h4>
        <p className="text-gray-300 text-sm mt-1">
          Tours across Sri Lanka and overseas destinations.
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="w-full h-px bg-divider bg-white" />;
}

import Image from "next/image";

export default function PackageDetails() {
  return (
    <section className="py-6 bg-white mx-auto w-full max-w-4/6 px-3 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Package Overview
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Discover the vibrant energy of Bangkok with a well-planned city escape that combines cultural enrichment, adventure, and leisure. From iconic landmarks and bustling street markets to an exciting theme park experience, this tour offers a perfect blend of exploration and free time.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Ideal for travelers looking for a comfortable and memorable city holiday.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Activities
          </h3>

          <div className="space-y-6 text-gray-600">
            {/* Day 1 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 1 – Arrival in Bangkok
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Arrival at Bangkok International Airport</li>
                <li>Transfer to hotel and check-in</li>
                <li>Evening free to explore local markets and enjoy Bangkok&apos;s famous street food</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 2 – City Highlights
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Guided city tour covering key attractions</li>
                <li>Visit to Grand Palace, Wat Arun, and Chinatown</li>
                <li>Experience a local BTS ride</li>
                <li>Shopping time at popular city areas</li>
              </ul>
            </div>

            {/* Day 3 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 3 – Theme Park Experience
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Full-day visit to Dream World Theme Park</li>
                <li>Enjoy rides, entertainment, and attractions</li>
                <li>Return to hotel</li>
              </ul>
            </div>

            {/* Day 4 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 4 – Free Day
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Day at leisure for shopping, relaxation, or optional activities</li>
                <li>Explore Bangkok at your own pace</li>
              </ul>
            </div>

            {/* Day 5 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 5 – Departure
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Hotel check-out</li>
                <li>Airport transfer</li>
                <li>Return flight to Sri Lanka</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:sticky lg:top-24">
            <div className="mb-6">
              <p className="text-sm text-gray-500">Starting at</p>
              <p className="text-3xl font-bold text-gray-900">
                LKR 70,000
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-1">
                Duration
              </h4>
              <p className="text-gray-600">
                4 Nights | 5 Days
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Facilities
              </h4>

              <ul className="space-y-3 text-gray-600">
                <li>
                  <span className="mr-3">
                    <Image
                      src="/airplane.svg"
                      width={25}
                      height={25}
                      alt="Airplane"
                      className="mx-auto inline-block opacity-40"
                    />
                  </span>  
                  Airport transfers
                </li>
                <li><span className="mr-3">
                    <Image
                      src="/hotel.svg"
                      width={25}
                      height={25}
                      alt="Hotel"
                      className="mx-auto inline-block opacity-40"
                    />
                  </span>  
                  Hotel accommodation with breakfast
                </li>
                <li><span className="mr-3">
                    <Image
                      src="/map.svg"
                      width={25}
                      height={25}
                      alt="Map"
                      className="mx-auto inline-block opacity-40"
                    />
                  </span>  
                  City tours and sightseeing
                </li>
                <li><span className="mr-3">
                    <Image
                      src="/Bus.svg"
                      width={25}
                      height={25}
                      alt="Bus"
                      className="mx-auto inline-block"
                    />
                  </span>  
                  Local Transportation 
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

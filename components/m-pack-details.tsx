import Image from "next/image";

export default function PackageDetails() {
  return (
    <section className="pb-12 pt-6 bg-white mx-auto w-full max-w-4/6 px-3 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Package Overview
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Explore the cultural charm and modern attractions of Malaysia with a thoughtfully planned tour that blends sightseeing, entertainment, and leisure. From iconic landmarks and scenic viewpoints to thrilling theme park experiences, this journey offers a perfect mix of guided tours and free time.
          </p>


          <p className="text-gray-600 leading-relaxed mb-8">
          Ideal for travelers seeking a relaxed yet exciting holiday experience.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Activities
          </h3>

          <div className="space-y-6 text-gray-600">
            {/* Day 1 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 1 – Arrival in malaysia
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Arrival at Kuala Lumpur International Airport</li>
                <li>Airport transfer to hotel and check-in</li>
                <li>Evening free for relaxation or nearby exploration</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 2 – City Highlights
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Guided Kuala Lumpur city tour</li>
                <li>Visit to Batu Caves</li>
                <li>Explore key city landmarks and attractions</li>
                <li>Enjoy a Cable Car experience</li>
                <li>Shopping time at popular city areas</li>
              </ul>
            </div>

            {/* Day 3 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 3 – Theme Park Experience
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Full-day visit to Sunway Lagoon Theme Park</li>
                <li>Enjoy rides, water attractions, and entertainment</li>
                <li>Return to hotel</li>
              </ul>
            </div>

            {/* Day 4 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 4 – Departure
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
                LKR 85,000
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-1">
                Duration
              </h4>
              <p className="text-gray-600">
                3 Nights | 4 Days
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
                      alt="Airplane"
                      className="mx-auto inline-block opacity-40"
                    />
                  </span>  
                  Hotel accommodation with breakfast
                </li>
                <li>
                  <span className="mr-3">
                    <Image
                      src="/passport.svg"
                      width={25}
                      height={25}
                      alt="Passport"
                      className="mx-auto inline-block opacity-40"
                    />
                  </span>  Visa assistance</li>
                <li><span className="mr-3">
                    <Image
                      src="/bus.svg"
                      width={25}
                      height={25}
                      alt="Bus"
                      className="mx-auto inline-block"
                    />
                  </span>  Local transportation</li>
                <li>
                  <span className="mr-3">
                    <Image
                      src="/flag.webp"
                      width={25}
                      height={25}
                      alt="Flag"
                      className="mx-auto inline-block"
                    />
                  </span> Tour Coordination & Support</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

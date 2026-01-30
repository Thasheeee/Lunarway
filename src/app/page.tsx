import Image from "next/image"
import Navbar from "../../components/navbar"
import Destinations from "../../components/slide"
import TourCard from "../../components/pack-cards"
import WhyTrustUs from "../../components/trust"
import Foot from "../../components/footer"
import Steps from "../../components/trip-steps"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Navbar/>

      {/* Cover image */}
      <section className="h-screen flex items-center justify-center mt-10 font-sans max-w-[300rem] mx-auto">
        <div className="relative w-full max-w-4/6 h-[85%] px-3 md:px-16">
          
          <div className="relative w-full h-full overflow-hidden rounded-md">
            <Image
              src="/home-cover.webp"
              alt="Travel background"
              fill
              priority
              className="object-cover"
            />

            <div className="relative z-10 h-full flex items-end"> 
              <div className="w-full px-16 grid md:grid-cols-2 gap-8">
                
                <h1 className="text-white text-2xl sm:text-4xl md:text-7xl font-medium tracking-wide mb-7 md:mb-12">
                  Travel Begins <br />
                  With The Right <br />
                  Journey.
                </h1>

                <div className="text-white max-w-lg ml-auto pt-0 md:pt-10">
                  <span className="text-white/90 text-base sm:text-lg md:text-xl pr-5">
                    From short local escapes to exciting international adventures,
                    we create travel experiences that are smooth, reliable, and memorable.
                  </span><br/>

                  <Link href="/tours">
                    <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 my-3 rounded-md font-medium">
                      Get Started
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/*Services*/}
      <section className="w-full md:content-center max-w-[300rem] mx-auto"> 
        <div className="max-w-4/6 mx-auto px-3 md:px-16 pt-5 pb-14">

          <div className="flex items-stretch flex-col md:flex-row justify-between gap-10 mb-12">
            
            <div className="text-xl md:text-5xl font-bold w-full md:w-3/6 text-black text-center md:text-left">
              Your Trusted Partner
              <div className="h-1 md:h-5 bg-transparent"/>
              For Local & Global
              <div className="h-1 md:h-5 bg-transparent"/>
              Travel
            </div>

            <span className="text-[#909090] self-end w-full md:w-3/6 md:ml-20  text-base md:text-xl text-center md:text-justify">
              We provide complete planning and on-ground support for well-organized
              tours across Sri Lanka and overseas destinations, so you can travel
              with confidence.
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10">

            <div className="flex-1">
              <span className="text-2xl mb-4 flex md:justify-start justify-center">
                <Image 
                  src="/airplane.svg"
                  width={35}
                  height={35}
                  alt="Airplane"
                />
              </span>
              <h3 className="font-semibold text-center md:text-left text-lg md:text-2xl mb-2 mt-1 md:mb-4 md:mt-3 text-black">
                Flights & Transfers
              </h3>
              <p className="text-[#909090] text-center md:text-left font-medium text-base md:text-xl leading-relaxed">
                Convenient routes and competitive fares for smooth travel.
              </p>
            </div>

            <div className="flex-1">
              <span className="text-2xl mb-4 flex md:justify-start justify-center">
              <Image 
                  src="/hotel.svg"
                  width={35}
                  height={35}
                  alt="Hotel"
                />
              </span>
              <h3 className="font-semibold text-center md:text-left text-lg md:text-2xl mb-2 mt-1 md:mb-4 text-black">
                Accommodation Planning
              </h3>
              <p className="text-[#909090] text-center md:text-left font-medium  md:text-xl text-base leading-relaxed">
                Comfortable hotels with quality service in prime locations.
              </p>
            </div>

            <div className="flex-1">
              <span className="text-2xl mb-4 flex md:justify-start justify-center">
              <Image 
                  src="/suitcase.svg"
                  width={35}
                  height={35}
                  alt="Suitcase"
                />
              </span>
              <h3 className="font-semibold text-center md:text-left text-lg md:text-2xl mb-2 mt-1 md:mb-4 text-black">
                Tour Packages
              </h3>
              <p className="text-[#909090] text-center md:text-left font-medium text-base md:text-xl leading-relaxed">
                Customized local and international tours for your style.
              </p>
            </div>

            <div className="flex-1">
              <span className="text-2xl mb-4 flex md:justify-start justify-center">
              <Image 
                  src="/passport.svg"
                  width={35}
                  height={35}
                  alt="Passport"
                />
              </span>
              <h3 className="font-semibold text-center md:text-left text-lg md:text-2xl mb-2 mt-1 md:mb-4 text-black">
                Visa Assistance
              </h3>
              <p className="text-[#909090] text-center md:text-left font-medium md:text-xl text-base leading-relaxed">
                Reliable visa guidance for stress-free international travel.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Destinations/>

      <TourCard/>

      <WhyTrustUs/>

      <Steps/>

      {/* Comments */}
      <section className="w-full bg-white pt-10 pb-10 md:pb-0 md:h-[100%]">
        <div className="max-w-4/6 mx-auto px-3 md:px-16 text-center">
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-900">
            Stories From Our Travelers
          </h2>
          <p className="mt-3 text-base text-gray-500 md:text-xl">
            Hear from travelers who have trusted us to plan their local and
            international journeys.
          </p>
        </div>

        <div className="relative mt-12 max-w-5/6 pb-10 px-3 md:px-16 mx-auto">
          <div className="relative h-[40rem] w-full overflow-hidden md:rounded-lg rounded-lg">
            <Image
              src="/home-cover.webp"
              alt="Traveler story background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute left-1/2 top-1/2 w-[70%] md:w-[50%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl sm:p-8">
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              Lorem ipsum posuere massa facilisi augue augue aliquam pellentesque
              morbi sed suspendisse pellentesque aliquet eget eu aliquam malesuada
              tortor quis.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="md:h-10 md:w-10 h-7 w-7 rounded-full bg-gray-400" />
              <span className="text-sm font-medium text-gray-800">
                John Doe
              </span>
            </div>
          </div>
        </div>
      </section>

      <Foot/>
    </main>
  )
}
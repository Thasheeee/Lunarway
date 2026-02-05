import Navbar from "../../../components/navbar";
import JourneySection from "../../../components/about-cover";
import Foot from "../../../components/footer";


export default function About(){
    return(
        <main>
            <Navbar/>

            <JourneySection/>

            {/* Steps */}
            <section className="relative bg-[#f2f2f2] w-full pt-14 pb-24">
                <div className="max-w-4/6 mx-auto px-3 md:px-16">
                    {/* Header */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <h2 className="text-xl md:text-5xl font-bold leading-tight text-black text-center md:text-left">
                      How We Plan <br/>
                      Every Journey
                    </h2>
        
                    <p className="text-gray-600 max-w-md lg:ml-auto text-base md:text-xl text-center md:text-justify self-end">
                      We focus on understanding your needs and planning travel experiences that feel smooth and stress-free.
                    </p>
                    </div>
        
                    {/* Steps */}
                    <div className="grid grid-cols-1 text-black sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white rounded-2xl p-5 md:mb-16 shadow-sm">
                        <span className="text-4xl font-bold block mb-20">01</span>
                        <h3 className="font-semibold text-lg md:text-xl mb-2">
                        Choose Your Destination
                        </h3>
                        <p className="text-base md:text-lg text-gray-600 ">
                        Explore local and international destinations and decide where you
                        want to travel.
                        </p>
                    </div>
        
                    {/* Step 2 */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm mt-0 md:mt-16"> 
                        <span className="text-4xl font-bold block mb-20">02</span>
                        <h3 className="font-semibold text-lg md:text-xl mb-2">
                        Select a Tour Package
                        </h3>
                        <p className="text-base md:text-lg text-gray-600">
                        Choose a tour package that matches your travel style and budget.
                        </p>
                    </div>
        
                    {/* Step 3 */}
                    <div className="bg-white rounded-2xl p-5 md:mb-16 shadow-sm">
                        <span className="text-4xl font-bold block mb-20">03</span>
                        <h3 className="font-semibold text-lg md:text-xl mb-2">
                        Confirm Dates and Details
                        </h3>
                        <p className="text-base md:text-lg text-gray-600">
                        Share your preferred dates and details to finalize the booking.
                        </p>
                    </div>
        
                    {/* Step 4 */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm mt-0 md:mt-16">
                        <span className="text-4xl font-bold block mb-20">04</span>
                        <h3 className="font-semibold text-lg md:text-xl mb-2">
                        Travel With Confidence
                        </h3>
                        <p className="text-base md:text-lg text-gray-600">
                        Enjoy your journey while we handle the rest.
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            <Foot/>
        </main>
    )
}
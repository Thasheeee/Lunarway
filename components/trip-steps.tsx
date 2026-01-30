export default function Steps(){
    return(
        <main>
            <section
                className="relative max-w-[300rem] mx-auto py-14 bg-[url('/patern.webp')] bg-cover bg-center bg-no-repeat"
            >
                
                <div className="items-stretch relative w-full px-3 md:px-16 mx-auto">
                    {/* Header */}
                    <div className="grid lg:grid-cols-2 gap-7 mb-20">
                        <h2 className="text-xl md:text-5xl text-center md:text-left font-bold text-gray-900 md:leading-[1.2]">
                            Plan Your Trip In <br /> Simple Steps
                        </h2>
        
                        <span className="text-[#909090] text-base md:text-xl text-center md:text-justify self-end">
                            A carefully designed journey planning process focused on comfort and
                            confidence.
                        </span>
                    </div>
        
                    {/* Steps */}
                    <div className="grid grid-cols-1 text-black sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white rounded-2xl p-5 md:mb-16 shadow-sm">
                            <span className="md:text-5xl text-4xl font-bold block mb-20">01</span>
                            <h3 className="font-semibold text-xl md:text-2xl mb-2">
                                Choose Your Destination
                            </h3>
                            <p className="text-base md:text-xl text-gray-600">
                                Explore local and international destinations and decide where you
                                want to travel.
                            </p>
                        </div>
        
                        {/* Step 2 */}
                        <div className="relative bg-white rounded-2xl p-5 shadow-sm mt-0 md:mt-16"> 
                            <span className="md:text-5xl text-4xl font-bold block mb-20">02</span>
                            <h3 className="font-semibold text-xl md:text-2xl mb-2">
                                Select a Tour Package
                            </h3>
                            <p className="text-base md:text-lg text-gray-600">
                                Choose a tour package that matches your travel style and budget.
                            </p>
                        </div>
        
                        {/* Step 3 */}
                        <div className="bg-white rounded-2xl p-5 md:mb-16 shadow-sm">
                            <span className="text-4xl md:text-5xl font-bold block mb-20">03</span>
                            <h3 className="font-semibold text-xl md:text-2xl mb-2">
                                Confirm Dates and Details
                            </h3>
                            <p className="text-base md:text-lg text-gray-600">
                                Share your preferred dates and details to finalize the booking.
                            </p>
                        </div>
        
                        {/* Step 4 */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm mt-0 md:mt-16">
                            <span className="text-4xl md:text-5xl font-bold block mb-20">04</span>
                            <h3 className="font-semibold text-xl md:text-2xl mb-2">
                                Travel With Confidence
                            </h3>
                            <p className="text-base md:text-lg text-gray-600">
                                Enjoy your journey while we handle the rest.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

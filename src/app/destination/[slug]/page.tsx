import { destinations } from "../../lib/destinations";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "../../../../components/navbar";
import { title } from "process";
import Foot from "../../../../components/footer";


export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 

  const destination = destinations[slug as keyof typeof destinations];

  if (!destination) {
    notFound();
  }

  return (
    <main>
        <Navbar/>

        <section className="mt-32  mx-auto w-full max-w-4/6 px-3 md:px-16">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
                <h1 className="font-bold text-gray-900 leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{destination.name}</h1>
                <p className="text-[#909090] max-w-md leading-relaxed text-left text-lg">
                    Explore carefully curated local and international tour packages designed for every type of traveler.
                </p>
            </div>
            {/*IMAGES GRID*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch lg:max-h-[700px]">
                {/* LEFT IMAGE */}
                <div className="rounded-xl overflow-hidden h-full max-h-[600px]">
                    <Image
                        src={destination.images[0]}
                        alt={destination.alternative[0]}
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
                    src={destination.images[1]}
                    alt={destination.alternative[1]}
                    width={800}
                    height={309}
                    className="w-full h-full object-cover"
                    />
                </div>
        
                {/* Bottom two images */}
                <div className="grid grid-cols-2 gap-4 lg:h-[calc(50%-0.5rem)] lg:max-h-[290px]">
                    <div className="rounded-xl overflow-hidden">
                    <Image
                        src={destination.images[2]}
                        alt={destination.alternative[2]}
                        width={400}
                        height={309}
                        className="w-full h-full object-cover"
                    />
                    </div>
        
                    <div className="rounded-xl overflow-hidden">
                    <Image
                        src={destination.images[3]}
                        alt={destination.alternative[3]}
                        width={400}
                        height={260}
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>
        
                </div>
        
        
            </div>
        </section>

        
        <section className="pb-12 pt-6 bg-white mx-auto w-full max-w-4/6 px-3 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* LEFT CONTENT */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold text-black mb-4">
                        Package Overview
                    </h2>
                    <p className="text-[#909090] leading-relaxed mb-4">
                        Explore the cultural charm and modern attractions of Malaysia with a thoughtfully planned tour that blends sightseeing, entertainment, and leisure. From iconic landmarks and scenic viewpoints to thrilling theme park experiences, this journey offers a perfect mix of guided tours and free time.
                    </p>
                    <p className="text-[#909090] leading-relaxed mb-8">
                        {destination.type}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Activities
                    </h3>

                    {destination.activities.map((activity, index) => (
                        <div key={index} className="space-y-6 text-[#909090]">
                            <div className="my-3">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    {activity.title} 
                                </h4>
                                <ul className="list-disc ml-5 space-y-1">
                                    {activity.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT CONTENT */}
                <div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:sticky lg:top-24">
                        <div className="mb-6">
                            <p className="text-sm md:text-base text-[#909090]">Starting at</p>
                            <p className="my-4 text-2xl md:text-3xl font-bold text-gray-900">
                                {destination.price}
                            </p>
                            <hr/>
                        </div>

                        <div className="mb-6">
                            <h4 className="font-semibold text-base text-gray-900 mb-1">
                                Duration
                            </h4>
                            <p className="text-[#909090] mb-4">
                                {destination.duration}
                            </p>
                            <hr/>
                        </div>

                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">
                                Facilities
                            </h4>
                                <ul className="space-y-3 text-base text-[#909090]">
                                {destination.facilities.map((facility,index) => (
                                    <li key={index}>
                                        <span className="mr-3 my-2">
                                            <Image
                                                src={facility.icon}
                                                width={25}
                                                height={25}
                                                alt={facility.alter}
                                                className="mx-auto inline-block opacity-60"
                                            />
                                        </span>
                                        {facility.text}
                                    </li>
                                ))}
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Foot/>

    </main>
  );
}

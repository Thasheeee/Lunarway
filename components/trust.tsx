import Image from "next/image";

const trustPoints = [
  {
   
    title: "Local & International Expertise",
    description:
       "Tours across Sri Lanka and overseas destinations.",
  },
  {
   
    title: "Local & International Expertise",
    description:
       "Tours across Sri Lanka and overseas destinations.",
  },
  {
    
   title: "Local & International Expertise",
    description:
       "Tours across Sri Lanka and overseas destinations.",
  },
  {
    
    title: "Local & International Expertise",
    description:
       "Tours across Sri Lanka and overseas destinations.",
  },
];



export default function WhyTrustUs() {
  return (
    <section
      className="py-24 px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center"
      style={{ background: "#0F1923" }}
    >
      {/* Image side */}
      <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "4/5" }}>
        <Image
          src="/home-cover.webp"
          alt="Traveler with freedom"
          fill
          className="object-cover"
        />


        
      </div>

      {/* Content side */}
      <div>
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "#C9A96E" }}
        >
          Why Choose Us
        </p>
        <h2
          className="text-4xl md:text-5xl font-light leading-tight mb-10"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "white" }}
        >
          Why Travelers Trust<br />
          Us With Their{" "}
          <em className="italic" style={{ color: "#C9A96E" }}>Journeys</em>
        </h2>

        <div className="flex flex-col">
          {trustPoints.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 items-start py-6"
              style={{
                borderBottom:
                  i < trustPoints.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              
              <div>
                <h4
                  className="text-white font-semibold text-sm mb-1.5"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.50)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

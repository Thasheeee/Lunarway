export const destinations = {
  malaysia: {
    name: "Malaysia",
    images: [
      "/details-malaysia1.webp",
      "/details-malaysia2.webp",
      "/details-malaysia3.webp",
      "/details-malaysia4.webp",
    ],
    alternative: [
      "Malaysia night view",
      "Malaysian temple",
      "Malaysian culture",
      "Malaysian culture 2",
    ],
    type: "Ideal for travelers seeking a relaxed yet exciting holiday experience.",
    activities: [
      {
        title: "Day 1 - Arrival in Bangkok",
        points: [
          "Arrival at Bangkok International Airport",
          "Transfer to hotel and check-in",
          "Evening free to explore local markets and enjoy Bangkok's famous street food",
        ],
      },
      {
        title: "Day 2 - City Highlights",
        points: [
          "Guided Kuala Lumpur city tour",
          "Visit to Batu Caves",
          "Explore key city landmarks and attractions",
          "Enjoy a Cable Car experience",
          "Shopping time at popular city areas",
        ],
      },
      {
        title: "Day 3 - Theme Park Experience",
        points: [
          "Full-day visit to Sunway Lagoon Theme Park",
          "Enjoy rides, water attractions, and entertainment",
          "Return to hotel",
        ],
      },
      {
        title: "Day 4 - Departure",
        points: [
          "Hotel check-out",
          "Airport transfer",
          "Return flight to Sri Lanka",
        ],
      },
    ],
    price: "LKR 85,000",
    duration: "3 Nights | 4 Days",
    facilities:[
      {
        icon: "/airplane.svg",
        alter: "Plane-icon",
        text: "Airport transfers"
      },
      {
        icon: "/hotel.svg",
        alter: "Hotel",
        text: "Hotel accommodation with breakfast",
      },
      {
        icon: "/passport.svg",
        alter: "Passport",
        text: "Visa assistance"
      },
      {
        icon: "/bus.png",
        alter: "Bus",
        text: "Local transportation"
      },
      {
        icon: "/flag.png",
        alter: "Flag",
        text: "Tour Coordination & Support"
      },
    ],
    description: "An island nation rich in culture, beaches, and wildlife.",
    capital: "Kuala Lumpur",
  },

  thailand: {
    name: "Thailand",
    images: [
      "/details-thailand1.webp",
      "/details-thailand2.webp",
      "/details-malaysia3.webp",
      "/details-malaysia4.webp",
    ],
    alternative: [
      "Thailand image 1",
      "Thailand image 2",
      "Thailand image 3",
      "Thailand image 4",
    ],
    type:
      "Discover the vibrant energy of Bangkok with a well-planned city escape that combines cultural enrichment, adventure, and leisure.",
    activities: [
      {
        title: "Day 1 - Arrival in Bangkok",
        points: [
          "Arrival at Bangkok International Airport",
          "Transfer to hotel and check-in",
          "Evening free to explore local markets and enjoy Bangkok's famous street food",
        ],
      },
      {
        title: "Day 2 - City Highlights",
        points: [
          "Guided city tour covering key attractions",
          "Visit to Grand Palace, Wat Arun, and Chinatown",
          "Experience a local BTS ride",
          "Shopping time at popular city areas",
        ],
      },
      {
        title: "Day 3 - Theme Park Experience",
        points: [
          "Full-day visit to Dream World Theme Park",
          "Enjoy rides, entertainment, and attractions",
          "Return to hotel",
        ],
      },
      {
        title: "Day 4 - Free Day",
        points: [
          "Day at leisure for shopping, relaxation, or optional activities",
          "Explore Bangkok at your own pace",
        ],
      },
      {
        title: "Day 5 - Departure",
        points: [
          "Hotel check-out",
          "Airport transfer",
          "Return flight to Sri Lanka",
        ],
      },
    ],
    facilities:[
      {
        icon: "/airplane.svg",
        alter: "Plane-icon",
        text: "Airport transfers"
      },
      {
        icon: "/hotel.svg",
        alter: "Hotel",
        text: "Hotel accommodation with breakfast",
      },
      {
        icon: "/map.svg",
        alter: "Map",
        text: "City tours and sightseeing"
      },
      {
        icon: "/bus.png",
        alter: "Bus",
        text: "Local transportation"
      },
    ],
    price: "LKR 70,000",
    duration: "4 Nights | 5 Days",
    description: "A beautiful mix of tradition and advanced technology.",
    capital: "Bangkok",
  },

  dubai: {
    name: "Dubai",
    images: [
      "/details-dubai1.webp",
      "/details-dubai2.webp",
      "/details-dubai3.webp",
      "/details-dubai4.webp",
    ],
    type: "Ideal for travelers seeking a modern, exciting, and well-organized international holiday.",
    alternative: [
      "Dubai image 1",
      "Dubai image 2",
      "Dubai image 3",
      "Dubai image 4",
    ],
    activities: [
      {
        title: "Day 1 - Arrival in Dubai",
        points: [
          "Arrival at Dubai International Airport",
          "Airport transfer to hotel and check-in",
          "Evening Dinner Cruise Ride with scenic city views",
        ],
      },
      {
        title: "Day 2 - City Highlights",
        points:[
          "Morning Dubai City Tour covering key landmarks",
          "Evening visit to the iconic Burj Khalifa",
          "Free time to explore surrounding areas",   
        ],
      },
      {
        title: "Day 3 - Desert Adventure",
        points:[
          "Desert Safari Experience",
          "Dune bashing and desert activities",
          "Entertainment and dinner included",  
        ],
      },
      {
        title: "Day 4 - Attraction & Leisure",
        points:[
          "Visit to Miracle Garden",
          "Global Village Tour",
          "Enjoy shopping, culture, and entertainment",
        ],
      },
      {
        title: "Day 5 - Departure",
        points:[
          "Hotel check-out",
          "Airport transfer",
          "Return flight to Sri Lanka",
        ],
      },
    ],
    facilities:[
      {
        icon: "/airplane.svg",
        alter: "Plane-icon",
        text: "Airport transfers"
      },
      {
        icon: "/hotel.svg",
        alter: "Hotel",
        text: "Hotel accommodation with breakfast",
      },
      {
        icon: "/passport.svg",
        alter: "Passport",
        text: "Visa assistance"
      },
      {
        icon: "/bus.png",
        alter: "Bus",
        text: "Local transportation"
      },
      {
        icon: "/flag.png",
        alter: "Flag",
        text: "Tour Coordination & Support"
      },
    ],
    price: "LKR 160,000",
    duration: "4 Nights | 5 Days",
    description: "A modern city known for luxury, innovation, and iconic architecture.",
    capital: "Dubai",
  },
} as const;

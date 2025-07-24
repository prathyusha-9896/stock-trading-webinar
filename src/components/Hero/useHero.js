export const useHero = () => {
  return {
    brand: "Rudraology",
    title: "Stock Trading for",
    subtitle: "Financial Freedom",
    description:
      "Join CA Rudramurthy for a 3-hour live webinar that gives you real-world trading clarity, without the noise.",
    date: "10th August 2025",
    time: "10 AM – 1 PM",
    mode: "Online",
    cta: "Reserve My Spot for ₹99",
    price: "₹1099",
    offerEnds: "Offer Ends In:",
    timer: "01 HOURS | 45 MINUTES | 59 SECONDS",
    instructor: {
      name: "CA Rudramurthy B.V.",
      role: "Author, Trader & Trainer",
    },
    imageSrc: "/Logos/profile.png", // ✅ Place this image in `public/hero-speaker.png`
    featuredLogos: [
      { src: "/logos/etnow.png", alt: "ET Now" },
      { src: "/logos/cnbc.png", alt: "CNBC" },
      { src: "/logos/news18.png", alt: "News18" },
      { src: "/logos/tv9.png", alt: "TV9" },
      { src: "/logos/asianet.png", alt: "ABP News" },
      { src: "/logos/bloomberg.png", alt: "Bloomberg" },
    ],
  };
  
};

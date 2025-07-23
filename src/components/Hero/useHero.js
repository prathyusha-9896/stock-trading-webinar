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
      { src: "/Logos/etnow.png", alt: "ET Now" },
      { src: "/Logos/cnbc.png", alt: "CNBC" },
      { src: "/Logos/news18.png", alt: "News18" },
      { src: "/Logos/tv9.png", alt: "TV9" },
      { src: "/Logos/asianet.png", alt: "ABP News" },
      { src: "/Logos/bloomberg.png", alt: "Bloomberg" },
    ],
  };
  
};

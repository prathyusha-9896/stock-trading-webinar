import { BsCheck2Circle } from "react-icons/bs";

const features = [
  "3-Hour Live Trading Webinar",
  "Study Material (PDF Pack)",
  "Risk: Reward Calculator (Excel)",
  "Edge Probability Tool",
  "30-Minute Live Q&A With CA Rudramurthy",
  "Recording Not Available (Live Only)",
];

export default function WhatsIncluded() {
  return (
    <section className="bg-[#000029] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          What’s <span className="text-[#00FF99]">Included</span> in ₹99?
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border border-[#1e293b] text-sm px-4 py-2 rounded-full bg-[#0f172a] text-white"
            >
              <BsCheck2Circle className="text-[#00FF99]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button className="relative overflow-hidden bg-[#00FF66] text-[#030617] font-semibold text-sm px-6 py-3 rounded-full hover:brightness-110 transition shine-animation">
          Reserve My Spot for ₹99 (₹199)
        </button>

      </div>
    </section>
  );
}

// src/components/FreeBonus/FreeBonus.tsx
import React from "react";

const bonuses = [
  {
    title: "Full Study Material Pack",
    description: "Simplified, actionable trading content you can refer anytime.",
    icon: "/material.png",
  },
  {
    title: "Risk, Reward, Calculator",
    description: "Know your downside and upside before placing a trade.",
    icon: "/reward.png",
  },
  {
    title: "Edge Calculator",
    description: "Understand probability of success and filter out low-quality trades.",
    icon: "/edge.png",
  },
];

export default function FreeBonus() {
  return (
    <section className="bg-[#030617] text-white px-6 py-20">
      <div className="max-w-6xl bg-[#000029] mx-auto p-6 sm:p-10 rounded-xl relative">
        {/* Offer Heading */}
        <div className="text-center px-4 py-6 rounded">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Get ₹10,000+ worth of exclusive trading resources{" "}
            <span className="text-[#00FF99] font-bold">absolutely FREE</span> when you book your seat.
          </h2>
        </div>

        {/* Bonus Items */}
        <div className=" mt-8 grid sm:grid-cols-3 gap-8 text-center px-4 py-6 rounded">
          {bonuses.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <img src={item.icon} alt={item.title} className="h-14 w-auto" />
              <div className="text-sm font-semibold">{item.title}</div>
              <p className="text-xs text-gray-400 max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Delivery Note */}
        <div className="text-center text-xs text-gray-300 mt-6 py-2 rounded">
          Delivered after the live session to all attendees.
        </div>
      </div>
    </section>
  );
}

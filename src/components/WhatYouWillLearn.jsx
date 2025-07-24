import { FaChartLine, FaShieldAlt, FaTools } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const topics = [
  {
    icon: <FaChartLine className="text-[#00FF99] text-2xl" />,
    title: "Trading Frameworks",
    points: [
      "How to think like a trader (not a gambler)",
      "The critical weekly checklist you should use before entering a trade",
      "Structured planning to remove emotional decisions",
    ],
  },
  {
    icon: <FaShieldAlt className="text-[#00FF99] text-2xl" />,
    title: "Strategies & Risk Management",
    points: [
      "How to hedge and manage your downside",
      "Understand when to trade and when not to",
      "Risk-Reward setups simplified",
    ],
  },
  {
    icon: <FaTools className="text-[#00FF99] text-2xl" />,
    title: "Tools & Habits",
    points: [
      "Weekly market planning routine",
      "Stock selection made easy",
      "When to sit out — why cash is also a position",
    ],
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="bg-[#030617] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="md:text-[56px] text-[24px] leading-[40px] md:leading-[70px] text-[#E6EAF0] font-semibold font-bold">
          What <span className="text-[#00FF99]">You’ll Learn</span> in <br />
          Just 3 Hours
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {topics.map((item, idx) => (
          <div
            key={idx}
            className="download-button rounded-xl !p-[32px] text-left"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-[20px] text-[#E6EAF0] font-semibold mb-4">{item.title}</h3>
            <ul className="space-y-2 text-[14px] text-[#E6EAF0] list-disc list-inside">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[#94a3b8]">
                  <IoMdCheckmark className="mt-1 text-green-400 shrink-0" />
                  <span>{point}</span>
                </li>              
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

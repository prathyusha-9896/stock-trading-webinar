import { AiOutlineInfoCircle } from "react-icons/ai";

const reasons = [
  "Are you a fresher in stock market and don’t know where to start and how to go about.",
  "Do you want to make money even in a falling market through Hedging?",
  "Are you an option trader? Don’t know when to buy options and when to sell options?",
  "You aim to achieve financial freedom and join the elite club of successful traders.",
  "Are you a losing trader unable to find a winning strategy for profitable trading.",
  "Have you attended so many other stock trading programs and unable to still practically trade.",
  "You want to learn proven trading systems that empower you to make confident, profitable decisions.",
  "You’re losing money due to poor strategies and ineffective risk management.",
  "Are you interested in making consistent returns through option selling every month.",
  "You believe stock trading can offer unmatched returns but feel stuck due to a lack of proper knowledge.",
  "You want to learn proven trading systems that empower you to make confident, profitable decisions.",
  "Are you uninterested in making consistent returns through option selling every month.",
];

export default function WhyJoin() {
  return (
    <section className="bg-[#030617] text-white px-4 sm:px-6 md:px-8 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title + Explanation Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
          {/* Left Title */}
          <div className="lg:max-w-[60%]">
            <h2 className="text-2xl sm:text-4xl md:text-[48px] font-bold leading-tight">
              Join the Stock Trading for <br />
              <span className="text-[#00FF99]">Financial Freedom Webinar If...</span>
            </h2>
          </div>

          {/* Right Subtext */}
          <div className="text-lg sm:text-xl md:text-[26px] text-[#E6EAF0] mt-2 leading-snug">
            If you resonate with any of the <br />
            following, this session is exactly <br />
            what you need:
          </div>
        </div>

        {/* Reason Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((text, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] border border-[#1e293b] rounded-xl p-6 sm:p-8 flex flex-col items-start gap-3"
            >
              <AiOutlineInfoCircle size={30} className="text-[#00FF99] shrink-0" />
              <p className="text-[#E6EAF0] text-base sm:text-[18px] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

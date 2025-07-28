// src/components/WhoShouldAttend/WhoShouldAttend.tsx
import { BsCheck2Circle } from "react-icons/bs";

const points = [
  "Beginners in the stock market",
  "Traders struggling with consistency",
  "Professionals looking for a second income stream",
  "People are tired of unreliable tips & online noise",
  "Anyone serious about learning trading the right way",
];

const profilepoints = [
  "Author of Amazon #1 Bestseller: Mind Markets and Money",
  "20+ years of market experience",
  "700K+ followers",
  "20,000+ traders trained",
  "Featured on CNBC, ET NOW, Bloomberg, and more",
];
export default function WhoShouldAttend() {
  return (
    <section className="bg-[#030617] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Who Should <span className="text-[#00FF99]">Attend?</span>
          </h2>

          <ul className="space-y-4 mb-6">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <BsCheck2Circle className="text-[#00FF99] mt-0.5 text-lg" />
                <span className="text-gray-200">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-400 font-medium">
            <span className="text-white">No experience required.</span> Just an open mind.
          </p>
        </div>

        {/* Right Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/ana.png" // Make sure this file exists in `public/chart.png`
            alt="Candlestick Chart"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="max-w-7xl relative mx-auto grid md:grid-cols-2 py-20 gap-12 items-center">
                
        {/* Right Image */}
        <div className="md:block hidden rounded-xl overflow-hidden shadow-lg">
        {/* Profile Image */}
        <img
            src="/murthy.png"
            alt="CA Rudramurthy"
            className="w-full h-auto object-cover"
        />
        </div>
                {/* Floating Quote Box */}
        <div className="absolute md:block hidden bottom-[20%] left-[-60px] bg-[#1e3a8a]/80 text-white text-sm p-4 rounded-md max-w-xs backdrop-blur-sm shadow-lg border border-blue-400">
            <em>
            “I'm not here to sell hope. I'm here to teach what works in the real market.”
            </em>
        </div>

        {/* Left Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Meet <span className="text-[#00FF99]">CA Rudramurthy BV</span>
          </h2>

          <ul className="space-y-4 mb-6">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <BsCheck2Circle className="text-[#00FF99] mt-0.5 text-lg" />
                <span className="text-gray-200">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-400 font-medium">
            <span className="text-white">No experience required.</span> Just an open mind.
          </p>
        </div>

        <div className="md:hidden block rounded-xl overflow-hidden shadow-lg">
        {/* Profile Image */}
        <img
            src="/murthy.png"
            alt="CA Rudramurthy"
            className="w-full h-auto object-cover"
        />
        </div>
                {/* Floating Quote Box */}
        <div className="absolute md:hidden block bottom-[5%] left-[-16px] bg-[#1e3a8a]/80 text-white text-sm p-4 rounded-md md:max-w-xs max-w-80 backdrop-blur-sm shadow-lg border border-blue-400">
            <em>
            “I'm not here to sell hope. I'm here to teach what works in the real market.”
            </em>
        </div>
      </div>
    </section>
  );
}

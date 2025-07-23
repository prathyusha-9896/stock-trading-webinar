import { useStickyObserver } from "./useStickyObserver";

const StickyOfferBar = () => {
  const isHeaderVisible = useStickyObserver("header");

  if (isHeaderVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="bg-[#06094e] text-white rounded-xl px-6 py-4 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Countdown */}
        <div className="flex items-center gap-6">
          <div className="text-sm">Offer Ends In:</div>
          <div className="flex gap-4 font-bold text-xl">
            <span>12 <span className="text-xs font-normal">HOURS</span></span>
            <span>24 <span className="text-xs font-normal">MINUTES</span></span>
            <span>6 <span className="text-xs font-normal">SECONDS</span></span>
          </div>
        </div>

        {/* Date / Time */}
        <div className="hidden sm:flex items-center gap-4 text-sm text-gray-300">
          <span>📅 10th August 2025</span>
          <span>⏰ 10 AM – 1 PM</span>
          <span>💻 Online</span>
        </div>

        {/* CTA */}
        <div className="relative">
          <span className="absolute -top-2 -right-2 text-xs bg-white text-black px-2 py-0.5 rounded-full shadow">
            30 Seats Left
          </span>
          <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-full shadow">
            Reserve My Spot for ₹499 <span className="line-through text-xs text-gray-200 ml-2">₹1,999</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyOfferBar;

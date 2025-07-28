import { useEffect, useState } from "react";
import { useStickyObserver } from "./useStickyObserver";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
import { PiMonitorPlayFill } from "react-icons/pi";
import dayjs from "dayjs";

const StickyOfferBar = () => {
  const isHeaderVisible = useStickyObserver("header");

  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Countdown Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const target = dayjs("2025-08-10T00:00:00"); // 📅 Change to your webinar time
      const now = dayjs();
      const diff = target.diff(now, "second");

      if (diff <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        clearInterval(interval);
        return;
      }

      const hours = String(Math.floor(diff / 3600)).padStart(2, "0");
      const minutes = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
      const seconds = String(diff % 60).padStart(2, "0");

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isHeaderVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="bg-[#06094e]/60 border-[#3478B8] border-t-[0.5px] border-l-[0.5px] backdrop-blur-sm text-white rounded-xl px-6 py-4 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Timer */}
        <div className="flex items-center gap-3">
          <div className="md:text-lg text-sm font-semibold text-white">
            Offer <br /> Ends In:
          </div>
          <div className="flex gap-4 text-xl font-bold text-white items-center">
            <div className="text-center">
              <p className="md:text-4xl text-lg font-semibold">{timeLeft.hours}</p>
              <div className="text-[10px] font-normal tracking-wide text-white">HOURS</div>
            </div>
            <span className="text-white font-thin text-4xl">|</span>
            <div className="text-center">
              <p className="md:text-4xl text-lg font-semibold">{timeLeft.minutes}</p>
              <div className="text-[10px] font-normal tracking-wide text-white">MINUTES</div>
            </div>
            <span className="text-white font-thin text-4xl">|</span>
            <div className="text-center">
              <p className="md:text-4xl text-lg font-semibold">{timeLeft.seconds}</p>
              <div className="text-[10px] font-normal tracking-wide text-white">SECONDS</div>
            </div>
          </div>
        </div>

        {/* Session Details */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white">
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt />
            10th August 2025
          </div>
          <div className="flex items-center gap-2">
            <MdAccessAlarm />
            10 AM – 1 PM
          </div>
          <div className="flex items-center gap-2">
            <PiMonitorPlayFill />
            Online
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative shrink-0">
          <span className="absolute z-50 -top-2 -right-2 text-[10px] sm:text-xs bg-white text-black px-2 py-0.5 rounded-full shadow font-medium">
            30 Seats Left
          </span>
          <button className="relative overflow-hidden bg-[#00FF66] hover:brightness-105 text-black font-semibold px-6 py-3 rounded-full shadow shine-animation">
            Reserve My Spot for ₹99
            <span className="ml-2 line-through text-xs text-[#00004D]">₹1,999</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyOfferBar;

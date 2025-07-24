import { useEffect, useState } from "react";
import { useHero } from "./useHero";
import { map } from "lodash";
import Header from "../Header";
import { MdAccessAlarm } from "react-icons/md";
import { PiMonitorPlayFill } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
export default function Hero() {
    const [timer, setTimer] = useState("00 HOURS | 00 MINUTES | 00 SECONDS");
  useEffect(() => {
    const interval = setInterval(() => {
      const target = dayjs("2025-08-10T00:00:00"); // set target date
      const now = dayjs();
      const diff = target.diff(now, "second");

      if (diff <= 0) {
        setTimer("00 HOURS | 00 MINUTES | 00 SECONDS");
        clearInterval(interval);
        return;
      }

      const hours = String(Math.floor(diff / 3600)).padStart(2, "0");
      const minutes = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
      const seconds = String(diff % 60).padStart(2, "0");

      setTimer(`${hours} HOURS | ${minutes} MINUTES | ${seconds} SECONDS`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const {
    brand,
    title,
    subtitle,
    description,
    date,
    time,
    mode,
    cta,
    price,
    offerEnds,
    instructor,
    imageSrc,
    featuredLogos,
  } = useHero();
  const duplicatedLogos = [...featuredLogos, ...featuredLogos];


  return (
    <section
      className="bg-cover bg-center text-white px-6 pb-16 relative"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <Header/>
    
      <div className="max-w-7xl mx-auto pt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 sm:px-6">
        {/* Left Content */}
        <div>
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-[60px] font-bold text-white leading-tight md:leading-[70px] tracking-[-1.2%]">
            {title} <span className="text-[#00FF99]">{subtitle}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-[24px] leading-snug font-semibold text-gray-300 my-5 sm:my-7">
            Learn from India’s Most Trusted Market Educator
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-[20px] text-gray-400 leading-relaxed max-w-xl mb-6">
            {description}
          </p>

          {/* Date / Time / Mode Badges with Icons */}
          <div className="flex flex-wrap gap-4 mb-8 text-white font-medium">
            <span className="download-button flex items-center gap-2 px-4 py-2">
              <FaRegCalendarAlt />
              {date}
            </span>
            <span className="download-button flex items-center gap-2 px-4 py-2">
              <MdAccessAlarm />
              {time}
            </span>
            <span className="download-button flex items-center gap-2 bg-[#00004D80] px-4 py-2">
              <PiMonitorPlayFill />
              {mode}
            </span>
          </div>

          {/* CTA + Timer */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-white">
            {/* CTA Button */}
            <button className="relative overflow-hidden text-sm sm:text-base px-3 py-2 md:px-4 md:py-3 bg-[#00FF66] text-black font-semibold rounded-full shadow-lg shine-animation">
              Reserve My Spot for ₹99
              <span className="line-through text-[#00004D] text-sm font-light ml-2">₹1099</span>
            </button>

            {/* Timer */}
            <div className="flex items-center gap-4 text-sm sm:text-base">
              <span className="text-white whitespace-nowrap">Offer <br />Ends In:</span>
              <div className="flex text-center divide-x divide-white/40">
                {timer.split("|").map((block, i) => {
                  const [value, label] = block.trim().split(" ");
                  return (
                    <div key={i} className="px-2">
                      <div className="text-lg sm:text-xl font-bold">{value}</div>
                      <div className="text-[10px] sm:text-xs text-whitetracking-widest uppercase">
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center">
          <img
            src="/logos/profile.png"
            alt={instructor.name}
            className="w-full max-w-md rounded-lg object-cover"
          />

          {/* Name Box Overlay */}
          <div className="absolute bottom-4 left-0 md:bottom-10 md:left-10 bg-[#06094e]/40 border-[#3478B8] border-t-[0.5px] border-l-[0.5px]  backdrop-blur-md px-6 py-3 rounded-lg text-white text-xs sm:text-sm shadow-lg">
            <div className="font-semibold">{instructor.name}</div>
            <div className="text-white/70 text-[11px] sm:text-xs">{instructor.role}</div>
          </div>
        </div>

      </div>


      {/* Featured Logos */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 sm:mt-14 md:mt-20">
        <div className="text-gray-400 text-xs sm:text-sm uppercase mb-4 :text-left">
          Featured On
        </div>

        <div className="relative overflow-hidden w-full">
          {/* Gradient Left */}
          <div className="absolute left-0 top-0 h-full w-[15%] bg-gradient-to-r from-[#01011F] to-transparent z-10 pointer-events-none" />

          {/* Gradient Right */}
          <div className="absolute right-0 top-0 h-full w-[15%] bg-gradient-to-l from-[#01011F] to-transparent z-10 pointer-events-none" />

          {/* Scrollable Logo Row */}
          <div className="animate-scrollLeft whitespace-nowrap">
            <div className="flex items-center gap-6 sm:gap-10 lg:gap-20 px-2 sm:px-0">
              {map(duplicatedLogos, (logo, index) => (
                <img
                  key={`logo-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-16 sm:w-20 md:w-24 h-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

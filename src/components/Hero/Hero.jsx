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
    
      <div className="max-w-7xl  mx-auto pt-16 grid md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="">
        {/* Subtitle */}
        {/* <p className="text-lg font-medium text-white mb-2">{brand}</p> */}

        {/* Main Title */}
        <h1 className="text-4xl md:text-[70px] font-bold text-white leading-[90px] tracking-[-1.2%]">
            {title} <span className="text-[#00FF99]">{subtitle}</span>
        </h1>

        {/* Subheading */}
        <p className="text-[26px] leading-[34px] tracking-[-0.065px] font-semibold text-gray-300 my-7 ">
            Learn from India’s Most Trusted Market Educator
        </p>

        {/* Description */}
        <p className="text-[26px] tracking-[-0.065px] font-normal leading-[34px] text-gray-400 mb-6 max-w-xl">
            {description}
        </p>

        {/* Date / Time / Mode Badges with Icons */}
        <div className="flex flex-wrap gap-4 mb-8 text-white font-medium">
            <span className="download-button flex items-center gap-2 px-4 py-2 ">
            <FaRegCalendarAlt />
            {date}
            </span>
            <span className="download-button flex items-center gap-2 px-4 py-2 ">
            <MdAccessAlarm />
            {time}
            </span>
            <span className="download-button flex items-center gap-2 bg-[#00004D80] px-4 py-2">
            <PiMonitorPlayFill />
            {mode}
            </span>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start gap-6 text-white">
        {/* CTA Button */}
        <button className="text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-3 bg-[#00FF66] text-black font-semibold rounded-full shadow-lg">
            Reserve My Spot for ₹99{" "}
            <span className="line-through text-[#00004D] text-sm font-light ml-2">₹1099</span>
        </button>

        {/* Offer + Timer */}
        <div className="flex items-center gap-4 text-white text-sm">
            {/* Offer Ends Text */}
            <span className="text-white/70 whitespace-nowrap">Offer <br />Ends In:</span>

            {/* Timer Values */}
            <div className="flex text-center divide-x divide-white/40">
            {timer.split("|").map((block, i) => {
                const [value, label] = block.trim().split(" ");
                return (
                <div key={i} className="px-2">
                    <div className="text-lg sm:text-xl font-bold">{value}</div>
                    <div className="text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase">
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
        <div className="flex flex-col items-center justify-center">
          <img
            src={imageSrc}
            alt={instructor.name}
            className="rounded-lg"
          />
          {/* <div className=" text-sm text-gray-400">{instructor.role}</div> */}
        </div>
      </div>

      {/* Featured Logos */}
      <div className=" max-w-6xl mx-auto ">
        <div className=" text-gray-400 text-sm uppercase">Featured On</div>

      <div className="container -mt-16 sm:-mt-32 md:-mt-38 lg:mt-10">
        <div className="relative overflow-hidden w-full">
                {/* Gradient Left */}
    <div className="absolute left-0 top-0 h-full w-[25%] bg-gradient-to-r from-[#01011F] to-[#01011F00] z-10 pointer-events-none" />

    {/* Gradient Right */}
    <div className="absolute right-0 top-0 h-full w-[25%] bg-gradient-to-l from-[#00002B] to-[#01011F00] z-10  pointer-events-none" />

          <div className="animate-scrollLeft whitespace-nowrap">
            <div className="flex gap-6 sm:gap-10 lg:gap-20">
              {map(duplicatedLogos, (logo, index) => (
                <img
                  key={`logo-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-20 h-auto object-contain opacity-80 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

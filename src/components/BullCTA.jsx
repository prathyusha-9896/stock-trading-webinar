// components/BullCTA.jsx
import React from 'react';

export default function BullCTA() {
  return (
    <section className="px-6 py-12  flex justify-center">
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden text-white text-center">
        {/* Background Image */}
        <img
          src="/bull.png"
          alt="Bull"
          className="absolute inset-0 w-full h-full object-cover"
        />


        {/* Content */}
        <div className="relative z-10 px-6 py-12">
          <h2 className="text-xl sm:text-2xl font-semibold">
            You’ve spent months watching videos.
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold mt-2">
            Spend 3 hours that can give you <span className="text-[#00FF99]">clarity for years.</span>
          </h3>
          <p className="text-sm text-gray-300 my-4">
            Reserve your seat now. No fake promises. Just real education.
          </p>
          <button className="text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-3 bg-[#00FF66] text-black font-semibold rounded-full shadow-lg shine-animation relative overflow-hidden">
            Yes, I Want To Learn Trading
          </button>

        </div>
      </div>
    </section>
  );
}

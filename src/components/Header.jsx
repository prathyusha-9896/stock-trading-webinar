// src/components/Header/Header.tsx
import React from "react";

const Header = () => {
  return (
    <header  id="header"  className="w-full px-6 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src="/logo.png" alt="" />

        {/* CTA Button Group */}
        <div className="flex items-center bg-[#06094e] rounded-full overflow-hidden text-sm shadow-md">
          <span className="rounded-full relative overflow-hidden inline-flex bg-[#00D30F] text-black font-semibold px-6 py-3 z-10 shine-animation">
            Join & Learn
          </span>
          <span className="text-white px-4 py-2 whitespace-nowrap">
            Real-World Trading Strategies
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

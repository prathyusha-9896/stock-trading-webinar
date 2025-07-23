import React from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header";
import StickyOfferBar from "./components/StickyOfferBar/StickyOfferBar";
import WhyJoin from "./components/WhyJoin";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import FreeBonus from "./components/FreeBonus";
import WhoShouldAttend from "./components/WhoShouldAttend";
import Testimonials from "./components/Testimonials/Testimonials";
import WhatsIncluded from "./components/WhatsIncluded";
import FAQ from "./components/FAQ";
import BullCTA from "./components/BullCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <StickyOfferBar/>
      <WhyJoin/>
      <WhatYouWillLearn/>
      <FreeBonus/>
      <WhoShouldAttend/>
      <Testimonials/>
      <WhatsIncluded/>
      <FAQ/>
      <BullCTA/>
      <Footer/>
    </div>
  );
}

export default App;

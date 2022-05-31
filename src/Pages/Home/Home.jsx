import React from "react";
import Analytics from "./Analytics";
import Footer from "./Footer";

import Navbar from "./Navbar";
import OurCEO from "./OurCEO";
import OurMission from "./OurMission";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <OurCEO />
      <OurMission />
      <Analytics />
      <Footer />
    </div>
  );
};

export default Home;

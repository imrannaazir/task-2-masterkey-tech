import React from "react";
import Analytics from "./Analytics";
import Footer from "./Footer";

import Navbar from "./Navbar";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Analytics />
      <Footer />
    </div>
  );
};

export default Home;

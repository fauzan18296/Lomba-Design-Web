import { useState } from "react";
import Navbar from "./Components/Home/NavComp";
import HeroSection from "./Components/Home/HeroComp";
import Category from "./Components/Home/CategoryComp";

function App() {
  return (
    <div className="MyBg">
      {/* Intro Section */}
      <Navbar />
      <HeroSection />
      <Category />
      {/* End Intro */}
    </div>
  );
}

export default App;

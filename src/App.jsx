import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Catalog from "./Pages/Catalog";
import CustomProject from "./Pages/CustomProject";

function App() {
  return (
    <div className="MyBg">
      {/* Intro Section */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/catalog/" element={<Catalog />} />
          <Route path="/customproject/" element={<CustomProject />} />
        </Routes>
      </Router>
      {/* End Intro */}
    </div>
  );
}

export default App;

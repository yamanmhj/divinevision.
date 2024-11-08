import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";

import Values from "./components/Aboutus";

import Aboutus from "./components/Aboutus";
import Support from "./components/Support";
import Bottom from "./components/Bottom";
import ConnectButton from "./components/ConnectButton";
import LogoBar from "./components/LogoBar";
import TrustandSafety from "./components/TrustandSafety";
import Career from "./components/Career";

const App = () => {
  return (
    <>
      <Router>
        <LogoBar />
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Services" element={<Services />} />

            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/TrustandSafety" element={<TrustandSafety />} />
          </Routes>
        </div>

        <Bottom />
        <ConnectButton />
      </Router>
    </>
  );
};

export default App;

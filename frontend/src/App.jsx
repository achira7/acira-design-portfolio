//import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import  Designs  from "./pages/Designs";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Designs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

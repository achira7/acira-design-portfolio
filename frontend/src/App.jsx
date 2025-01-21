//import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import  Designs  from "./pages/Designs";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes className="bg-background ">
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Designs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

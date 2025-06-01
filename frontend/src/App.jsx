//import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Designs  from "./pages/Designs";
import About from "./pages/About";

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//backend-pages
import AddProject from "./pages/backend/AddProject";
import AllProjects from "./pages/backend/AllProjects";

import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <div>
        <NavBar /> 
        <div className="flex flex-col pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Designs />} />
          <Route path="/about" element={<Test />} /> {/*<About />*/}
          <Route path="/add-product" element={<AddProject/>} />
          <Route path="/all-projects" element={<AllProjects/>} />
        </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

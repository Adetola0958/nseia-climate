import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Team from "./Pages/Team";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/projects" element={<Project/>} exact/>
          <Route path="/team" element={<Team/>} exact/>
          <Route path="/gallery" element={<Gallery/>} exact/>
          <Route path="/contact" element={<Contact/>} exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
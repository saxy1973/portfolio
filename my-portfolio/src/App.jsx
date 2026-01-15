import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Scene from "./components/Scene";
import SunOverlay from "./components/SunOverlay";

import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import "./App.css";

export default function App() {
  return (
    <Router>
      {/* FIXED BACKGROUND LAYERS */}
      <Background />
      <SunOverlay />
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Scene />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

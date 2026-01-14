import React from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Scene from "./components/Scene";
import "./App.css";
import SunOverlay from "./components/SunOverlay";
export default function App() {
  return (
    <>
      <Background />
      <SunOverlay />
      <Navbar />
      <div className="app">
        <Scene />
      </div>
    </>
  );
}

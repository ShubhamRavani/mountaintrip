import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import About from "../HomePage/About";

function HomePage() {
  return (
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={0.29}>
        <Navbar />
        <div style={{ backgroundColor: "#02ae9c", height: "35%" }}>
          <div className="parallax__content">
            <h1>welcome to Mountain Trip</h1>
            <p>Let’s enjoy the </p>
            <h3>Beautiful World</h3>
          </div>
        </div>
        <div className="parallax-info" style={{ backgroundColor: "#02ae9c" }}>
          <div className="parallax-text">
            <h1 className="parallax-text-header">
              Make your Trip Memorable with us
            </h1>
            <p className="parallax-text-desc sub-desc">
              The Now Lets Travel Store specialises in great deals on holidays
            </p>
          </div>
          <button className="parallax-btn">Get Started</button>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1}>
        <div style={{ backgroundColor: "#87CEFA", height: "100%" }}>
          <About />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default HomePage;

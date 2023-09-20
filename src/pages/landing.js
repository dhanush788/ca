import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Eligibility from "../components/Eligibility";
import "../index.css";
import Hero from "../components/Hero";
import What from "../components/What";
import Companies from "../components/Companies";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <div className="bg-line bg-black">
        <About />
        <Companies />
        <What />
        <Benefits />
        <Eligibility />
        <JoinUs />
        <Footer />
      </div>
    </div>
  );
}

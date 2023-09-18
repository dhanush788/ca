import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Eligibility from "../components/Eligibility";
import "../index.css";
import Hero from "../components/Hero";
import What from "../components/What";

export default function Landing(){
    return (
        <div >
        <Navbar/>
        <Hero />
        <div className="bg-line bg-black">

        <About/>
        <What />
        <Benefits/>
        <Eligibility/>
        </div>
        </div>
    )
}
import React from "react";
import brochure from "../assets/dhishna_brochure.pdf";

const About = () => {
  return (
    <div className="bg-black bg-opacity-90 ">
      <div className="mid-glow relative h-56 "></div>
      <div className=" w-full flex items-center text-center flex-col py-20 px-4 sm:px-6 md:px-10 gap-3 relative z-[2]">
        <h2 className="text-white font-black md:text-[48px] sm:text-[36px]  text-[30px] pb-4 tracking-wider ">
          ABOUT DHISHNA
        </h2>
        <p className="text-white font-bold  text-[20px] sm:text-[24px] max-w-xl py-2 md:py-4 tracking-wider">
          “One idea. One spark. One flame. And that ignites a whole community.”
        </p>
        <p className="text-white font-normal md:text-[18px] max-w-6xl text-sm sm:text-base tracking-wider ">
          "Be the catalyst for the future we envision, design, and unite to
          create."
          <br></br> Discover a world where brilliance converges, challenges
          electrify, and innovation unfolds in vibrant splendor. Dhishna, SOE,
          CUSAT's flagship techfest, ignites intellectual fires through our
          seven specialized engineering branches, free from today's constraints.
          Our mission is to transcend conventional learning, nurturing your
          creativity and sparking an insatiable tech passion. Join us as campus
          ambassadors. Together, we'll elevate Dhishna, redefine tech, and
          create a brighter tomorrow! Welcome to the realm of Dhishna, where
          innovation knows no bounds. Join us in shaping the future.
        </p>

        <p className="text-white font-bold text-[18px] max-w-xl tracking-wide">
          We present to you, Dhishna.
        </p>
      </div>
      <div className="items-center text-center">
        <a href={brochure} download="Brochure">
          <button className="whiteCornerCutBtn rounded-[5px] border-2 border-white ml-10 cursor-pointer group mr-10 md:px-16 px-5 py-4 bg-black bg-opacity-40 hover:-translate-x-2 hover:-translate-y-2 transform transition-transform duration-200 ease-in-out mb-10 text-white text-center font-bold text-md text-xl">
            Download Brochure
          </button>
        </a>
      </div>
      <div className="left-glow z-[2] relative h-56 "></div>
    </div>
  );
};

export default About;

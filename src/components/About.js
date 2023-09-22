import React from "react";

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
          create." Step into a world where brilliance converges, where
          electrifying challenges beckon, and innovation unfurls like a vibrant
          kaleidoscope. Dhishna, the flagship techfest of SOE, CUSAT, is where
          the synergy of our seven specialized engineering branches sets ablaze
          an intellectual fire, untainted from the mundane constraints of
          today's world. Our unwavering mission is to transcend conventional
          learning, offering you a stage that not only nurtures your creativity
          but also ignites an insatiable passion for technology.
        </p>

        <p className="text-white font-bold text-[18px] max-w-xl tracking-wide">
          We present to you, Dhishna.
        </p>
      </div>
      <div className="left-glow z-[2] relative h-56 "></div>
    </div>
  );
};

export default About;

import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";

const Rules = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-line bg-black">
        <div
          className=" bg-opacity-90 bg-black w-full"
          style={{ height: "100vh" }}
        >
          <div className="mid-glow h-56"></div>
          <div className="z-0 flex flex-col items-center">
            <h1 className="text-white z-10 text-4xl font-sans font-bold mt-10 md:mb-0 mb-10">
              Rules
            </h1>
          </div>
          <div>
            <div className=" md:p-16 md:px-22 px-10">
              <ul className="list-decimal flex flex-col gap-8  pb-10">
                <li className="text-yellow-300 text-xl md:text-2xl font-sans font-semibold">
                  Campus Ambassadors (CAs) are required to disseminate posters,
                  event details, and workshop registration information via
                  social media platforms.
                </li>
                <li className="text-yellow-300 text-xl md:text-2xl font-sans font-semibold">
                  CAs can accumulate points by facilitating workshop
                  registrations.
                </li>

                <li className="text-yellow-300 text-xl md:text-2xl font-sans font-semibold">
                  A leaderboard will be meticulously maintained to track the
                  total points earned by each CA, and the ultimate winner will
                  be determined based on this final leaderboard.
                </li>
              </ul>
              <div className="left-glow h-56"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;

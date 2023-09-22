import React from "react";

const Eligibility = () => {
  return (
    <div className="w-full flex items-center texxt-center flex-col py-8 px-6 sm:px-10 bg-black bg-opacity-90">
      <h2 className="text-white font-black md:text-[48px] sm:text-[46px]  text-[40px] pb-4 tracking-wide text-center">
        ELIGIBILITY
      </h2>
      <p className="neon-yellow-p text-[#F0FF59] text-[18px] max-w-4xl font-medium py-8 text-center tracking-widest outline-white	">
        Students currently enrolled in recognized institutions are eligible to
        apply for Dhishna.{" "}
        <p>
          Preference will be given to those with good interpersonal and
          communication skills and prior experience.
        </p>
      </p>
    </div>
  );
};

export default Eligibility;

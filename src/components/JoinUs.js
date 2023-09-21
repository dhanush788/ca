import React from "react";

const JoinUs = () => {
  return (
    <div className="md:px-20 px-10 py-20 bg-black bg-opacity-90">
      <h1 className="text-center text-white font-extrabold text-4xl md:text-5xl my-10">
        JOIN US
      </h1>
      <h4 className="text-white text-center text-2xl font-bold">
        ARE YOU READY?
      </h4>
      <h4 className="text-white text-center text-2xl font-bold mt-5 mb-10">
        TO BE A PART OF THE BIGGEST TECH FEST IN SOUTH INDIA
      </h4>
      <div className="flex justify-center">
        <a href="/register" className="w-full flex justify-center">
          <div className="ml-10 cursor-pointer group mr-10 md:px-16 px-5 py-4 bg-white border-4 border-white hover:-translate-x-2 hover:-translate-y-2 transform transition-transform duration-200 ease-in-out my-20 md:w-[30%] w-[50%] ">
            <p className="text-black text-center font-bold text-center text-lg md:text-xl">
              REGISTER
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default JoinUs;

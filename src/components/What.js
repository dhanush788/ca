import React from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import PushPinIcon from "@mui/icons-material/PushPin";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const What = () => {
  return (
    <div className="px-10 md:px-20 py-20  bg-black bg-opacity-90">
      <h1 className="text-4xl md:text-5xl text-white font-extrabold text-center">
        WHAT YOU SHOULD DO
      </h1>
      <div className="my-20 flex justify-center">
        <div className="flex flex-wrap justify-around gap-x-24 gap-y-7">
          <div>
            <div className="absolute bg-transparent border-2 rounded-[16px] border-white w-[300px] h-[200px]"></div>
            <div className="hover:-translate-x-3 hover:-translate-y-3 transform transition-transform duration-200 ease-in-out gloss w-[300px] h-[200px] px-10 py-10 flex justify-center">
              <div className="flex flex-col justify-center">
                <CampaignIcon className="m-auto text-white !text-6xl" />
                <h2 className="text-white font-bold text-2xl text-center">
                  PROMOTE
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div className="absolute bg-transparent border-2 rounded-[16px] border-white w-[300px] h-[200px]"></div>
            <div className="hover:-translate-x-3 hover:-translate-y-3 transform transition-transform duration-200 ease-in-out gloss w-[300px] h-[200px] px-10 py-10 flex justify-center">
              <div className="flex flex-col justify-center">
                <PushPinIcon className="m-auto text-white !text-6xl" />
                <h2 className="text-white font-bold text-2xl text-center">
                  NOTICE
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div className="absolute bg-transparent border-2 rounded-[16px] border-white w-[300px] h-[200px]"></div>
            <div className="hover:-translate-x-3 hover:-translate-y-3 transform transition-transform duration-200 ease-in-out gloss w-[300px] h-[200px] px-10 py-10 flex justify-center">
              <div className="flex flex-col justify-center">
                <ConnectWithoutContactIcon className="m-auto text-white !text-6xl" />
                <h2 className="text-white font-bold text-2xl text-center">
                  CONNECT
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;

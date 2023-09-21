import React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { YouTube, Twitter } from "@mui/icons-material";
import logo from "../assets/dhishna_logo.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="px-10  md:px-20 pb-10 pt-20">
        <div className="flex md:flex-row flex-col justify-between md:items-end">
          <div className="flex flex-col pb-10  z-[2]">
            <h2 className="text-3xl text-white font-semibold text-center">
              Got any Doubts?
            </h2>
            <a href="mailto:ca@dhishna.org" target="_blank">
              <button className="mt-5 px-10 py-3 text-black flex font-semibold rounded-[10px] bg-[#E5F358] hover:scale-105 duration-200 ease-in-out">
                <ChatBubbleIcon className="text-black mr-4" /> Drop Us a message
              </button>
            </a>
          </div>
          <div className=" pb-10 z-[2]">
            <img
              src={logo}
              alt="logo"
              className="w-24 h-20 flex mx-auto object-contain "
            />
            <h2 className="text-white text-center font-bold text-xl">
              D H I S H N A
            </h2>
            <h2 className="text-white text-center font-semibold">
              SOE | CUSAT
            </h2>
          </div>
          <div className=" flex flex-col gap-y-4  z-[2]">
            <p className="text-white text-center md:text-right">Terms</p>
            <p className="text-white text-center md:text-right">
              Privacy Policy
            </p>
            <div className="flex flex-row gap-4 justify-center ">
              <a
                href="https://instagram.com/dhishna.cusat?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <InstagramIcon className="text-[#DCE95B]" />
              </a>
              <a href="https://www.facebook.com/dhishna.cusat/" target="_blank">
                <FacebookIcon className="text-[#DCE95B]" />
              </a>
              <a
                href="https://youtube.com/@dhishnacusat4981?feature=shared"
                target="_blank"
              >
                <YouTube className="text-[#DCE95B]" />
              </a>
              <a
                href="https://x.com/dhishna__cusat?t=Mbh6Chv2Obhgi7wYuDFB4Q&s=08"
                target="_blank"
              >
                <Twitter className="text-[#DCE95B]" />
              </a>
            </div>
          </div>
          <div className="mid-glow h-56 mb-[-80px]"></div>
        </div>
      </div>
      <p className="text-center text-white text-lg relative z-[2]">
        © Copyright 2023 Dhishna - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

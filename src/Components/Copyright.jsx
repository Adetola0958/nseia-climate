import React from "react";
// import Container from "./Container";
import { AiOutlineCopyright } from "react-icons/ai";

const Copyright = () => {
  return (
    <div className="w-full bg-[#F5F5F3]">
      <div className="max-w-screen-xl py-10 px-4 lg:px-0 max-w-container mx-auto border-t-[1px] group">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | NSEIA | All Rights Reserved |
          <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by nseia.netlify.app
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Copyright;
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const DepCard6 = () => {
  return (
    <div className="bg-white w-42 rounded mt-1">
      <div className="p-1">
        <img
          src="https://miro.medium.com/v2/resize:fit:1017/1*MgB8EwWrUMFKaPuhGfDQNg.jpeg"
          alt="img"
          className=" rounded-xl"
        />
        <h1 className="font-bold text-[12px] font-sans ml-1 mt-1 text-blue-900">
          OPD (Outpatient Department)
        </h1>
        <p className="text-[#0044A3] font-semibold font-sans text-[7px] ml-1">
          Medical consultations, health assessments, and follow-up care to support your everyday healthcare needs.
        </p>
        <button className="flex  text-[8px] items-center font-bold text-red-700 cursor-pointer m-1">Learn More <FaLongArrowAltRight className="ml-1" /> </button>
      </div>
    </div>
  );
};

export default DepCard6;

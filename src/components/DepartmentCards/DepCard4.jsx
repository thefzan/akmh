import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const DepCard4 = () => {
  return (
    <div className="bg-white w-42 rounded mt-1">
      <div className="p-1">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.x6WBfEu1OmgwRDVm8FCacgHaEP?r=0&w=626&h=358&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="img"
          className=" rounded-xl"
        />
        <h1 className="font-bold text-[12px] font-sans ml-1 mt-1 text-blue-900">
          Emergency & Trauma Care
        </h1>
        <p className="text-[#0044A3] font-semibold font-sans text-[7px] ml-1">
          Prompt medical assessment and treatment for urgent illnesses, injuries, and emergency healthcare needs.
        </p>
        <button className="flex  text-[8px] items-center font-bold text-red-700 cursor-pointer m-1">Learn More <FaLongArrowAltRight className="ml-1" /> </button>
      </div>
    </div>
  );
};

export default DepCard4;

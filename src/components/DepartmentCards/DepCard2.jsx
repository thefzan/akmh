import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const DepCard2 = () => {
  return (
    <div className="bg-white w-42 rounded mt-1">
      <div className="p-1">
        <img
          src="https://healthjade.com/wp-content/uploads/2018/06/laparoscopy_procedure.jpg"
          alt="img"
          className=" rounded-xl"
        />
        <h1 className="font-bold text-[12px] font-sans ml-1 text-blue-900 mt-1">
          Laparoscopic Surgery
        </h1>
        <p className="text-[#0044A3] font-semibold font-sans text-[7px] ml-1">
          Minimally invasive surgical procedures using small incisions and specialized instruments for suitable conditions.
        </p>
        <button className="flex  text-[8px] items-center font-bold text-red-700 cursor-pointer m-1">Learn More <FaLongArrowAltRight className="ml-1" /> </button>
      </div>
    </div>
  );
};

export default DepCard2;

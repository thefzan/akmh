import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const DepCard3 = () => {
  return (
    <div className="bg-white w-42 rounded mt-1">
      <div className="p-1">
        <img
          src="https://tse1.explicit.bing.net/th/id/OIP.sEh6vbBmrMro-Ji9WWDhQAHaEC?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="img"
          className=" rounded-xl"
        />
        <h1 className="font-bold text-[12px] font-sans ml-1 mt-1 text-blue-900">
          Gynecology & Obstetrics
        </h1>
        <p className="text-[#0044A3] font-semibold font-sans text-[7px] ml-1">
          Providing compassionate care for women's health, pregnancy, and maternity needs, including gynecological consultations, antenatal care, and support throughout the motherhood journey.
        </p>
        <button className="flex  text-[8px] items-center font-bold text-red-700 cursor-pointer m-1">Learn More <FaLongArrowAltRight className="ml-1" /> </button>
      </div>
    </div>
  );
};

export default DepCard3;

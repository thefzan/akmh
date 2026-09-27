import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const DepCard5 = () => {
  return (
    <div className="bg-white w-42 rounded mt-1">
      <div className="p-1">
        <img
          src="https://www.rehabmart.com/include-mt/img-resize.asp?output=webp&path=/blogphotos/rehabmart/library/How_much_does_a_hospital_bed_cost.jpg&maxwidth=600"
          alt="img"
          className=" rounded-xl"
        />
        <h1 className="font-bold text-[12px] font-sans ml-1 mt-1 text-blue-900">
          IPD (Inpatient Department)
        </h1>
        <p className="text-[#0044A3] font-semibold font-sans text-[7px] ml-1">
          Comfortable hospital admission, continuous medical supervision, and personalized care throughout your stay.
        </p>
        <button className="flex  text-[8px] items-center font-bold text-red-700 cursor-pointer m-1">Learn More <FaLongArrowAltRight className="ml-1" /> </button>
      </div>
    </div>
  );
};

export default DepCard5;

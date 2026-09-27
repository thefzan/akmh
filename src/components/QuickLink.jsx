import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const QuickLink = () => {
  return (
    <>
      <div className="flex gap-2 justify-center mt-1">
        <div className="bg-white w-27 h-27 flex items-center rounded">
          <div className=" flex flex-col  items-center p-1">
            <FaCalendarDays className="text-3xl text-red-700" />
            <h1 className="text-[10px] text-center text-blue-900 font-black">
              Book Appointment
            </h1>
            <h3 className="text-[8px] text-center text-blue-800 font-semibold">
              Schedule your visit easily and quickly
            </h3>
          </div>
        </div>
        <div className="bg-white w-27 h-27 flex items-center rounded">
          <div className=" flex flex-col  items-center p-1">
            <FaAmbulance className="text-3xl text-red-700" />
            <h1 className="text-[10px] text-center text-blue-900 font-black">
              Emergency Care
            </h1>
            <h3 className="text-[8px] text-center text-blue-800 font-semibold">
              27/7 emergency and trauma services
            </h3>
          </div>
        </div>
        <div className="bg-white w-27 h-27 flex items-center rounded">
          <div className=" flex flex-col  items-center p-1">
            <MdLocationOn className="text-3xl text-red-700" />
            <h1 className="text-[10px] text-center text-blue-900 font-black">
              Find Us
            </h1>
            <h3 className="text-[8px] text-center text-blue-800 font-semibold">
              Location, maps and direction
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickLink;

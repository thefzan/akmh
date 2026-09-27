import React from "react";
import hospitalBg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div id="home"
      className=" bg-cover bg-right bg-no-repeat mt-15 h-40 rounded flex items-center"
      style={{ backgroundImage: `url(${hospitalBg})` }}
    >
      <div className=" pl-2">
        <h3 className="text-xs text-blue-900 font-bold">
        Your Health, Our Priority.
      </h3>
      <h1 className="text-blue-900 font-sans font-black leading-5">
        Abdul Kareem Memorial <br />
        <span className="text-red-600">Hospital & Trauma Center</span>
      </h1>
      <h4 className="text-[#808080] font-bold font-sans text-[7px] mt-0.5">
        Your health and well-being are our highest Priority- <br /> with quality
        care for every patient.
      </h4>
      <button className="bg-blue-900 cursor-pointer text-white text-center rounded-2xl text-[10px] font-bold p-1.5 mt-2">
        Book Appointment
      </button>
      </div>
    </div>
  );
};

export default Hero;

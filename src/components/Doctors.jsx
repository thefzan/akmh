import React from "react";
import Doc1 from "./DoctorsCard/Doc1";
import Doc2 from "./DoctorsCard/Doc2";
import Doc3 from "./DoctorsCard/Doc3";
import Doc4 from "./DoctorsCard/Doc4";
import Doc5 from "./DoctorsCard/Doc5"
import Doc6 from "./DoctorsCard/Doc6";

const Doctors = () => {
  return (
    <>
      <h1 id='doctors' className="text-[9px] text-red-700 font-bold mt-3  ">OUR DOCTORS</h1>
      <div className=" font-bold font-sans text-blue-900">
        Meet Our Specialist Doctors
      </div>
      <h3 className="text-[9px] text-[#0044A3]">
        Our team of experienced and dedicated doctors are here to provide you
        with the best possible care.
      </h3>
      <div className="flex gap-2 justify-center flex-wrap">
        <Doc1 />
        <Doc2 />
        <Doc3/>
        <Doc5/>
        <Doc4/>
        <Doc6/>
        
      </div>
    </>
  );
};

export default Doctors;

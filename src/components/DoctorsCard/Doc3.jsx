import React from "react";

const Doc3 = () => {
  return (
    <>
      <div className="bg-white w-42 rounded mt-1">
        <div className="p-1">
          <img
            src="https://i.pinimg.com/474x/d6/5c/fa/d65cfa8b47227df12fb97217e8f940e3.jpg?nii=t"
            alt="img"
            className=" rounded-xl"
          />
          <h1 className="font-bold text-[12px] font-sans ml-1 text-red-700 mt-1">
            Dr. Q.A. Hashmi
          </h1>
         
          <div className="leading-4">
             <p className="text-[#0044A3] font-bold font-sans text-[9px] ml-1">
            General physician
          </p>
          <p className="text-[#0044A3] font-bold font-sans text-[9px] ml-1">
            M.B.B.S. MD
          </p>
            
            <p className="text-[#0044A3] font-semibold font-sans text-[7px] ml-1">
              OPD: Monday | 10:00 AM- 2:00 PM
            </p>
          </div>
          <button className="bg-red-700 cursor-pointer text-white text-center rounded text-[9px] w-full font-bold p-1.5 mt-2">
            <a href="https://wa.me/918601276394?text=Hello%2C+I+would+like+to+book+an+appointment+with+Dr.+Q.A.+Hashmi.&utm_source=chatgpt.com" target="_blank">
          Book Appointment
        </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Doc3;

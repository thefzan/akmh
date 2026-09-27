import React from "react";
import Doctor from "../assets/doctor.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const AboutChr = () => {
  return (
    <>
      <h1 id="about" className='text-[9px] text-red-700 font-bold mt-3 '>ABOUT US</h1>
    <div className=' font-bold font-sans text-blue-900'>Meet Our Chairman</div>
    <h3 className='text-[9px] text-[#0044A3]'>Leadership with commitment to Better Healthcare</h3>
      <div className="bg-[#FBFBFB]  p-2 rounded mt-3">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <h2 className="font-bold font-sans ml-1 text-red-700">
              Dr. A Raheem Siddiqui
            </h2>
            <p className="text-[#808080] font-bold font-sans text-[8px] ml-1">
              M.B.B.S, M.I.M.S <br />
              Member of International Medical Society <br />
              B.C.C.M (Bachelor in Critical Care Medicine) <br />
              Advanced Traning in Pain Management <br />
              Ex. Hospital Incharge LUCKNOW METRO HOSPITAL <br />
              Ex. ICU Incharge MEDOX HOSPITAL LKO <br />
              Ex. Hospital Superintendent SR HOSPITAL & <br />
              MEDICAL INSTITUTE DASIYA BASTI
            </p>
          </div>
          <img src={Doctor} className="w-30 h-30 rounded-xl" alt="" />
        </div>
        <p className="text-[#808080] font-sans text-[8px] ml-1 mt-2 " >
          <FaQuoteLeft />
          Healthcare is not only about treating illness; it is about
          understanding people, respecting their concerns, and standing beside
          them when they need support the most. Our vision is to build a
          healthcare environment where every patient is treated with dignity,
          compassion, and care. <br /><br /> At Abdul Kareem Memorial Hospital & Hareem Trauma
          Center, we are committed to providing accessible and quality
          healthcare supported by dedicated medical professionals, modern
          facilities, and responsible medical practices. We continuously strive
          to improve our services and create an environment where patients and
          their families feel supported throughout their healthcare journey. Our
          commitment is to serve the community with honesty, compassion, and a
          strong sense of responsibility. <FaQuoteRight /> <br />
          With heartfelt appreciation, <br />
          Dr. A Raheem Siddiqui <br />
          Chairman

        </p>
      </div>
    </>
  );
};

export default AboutChr;

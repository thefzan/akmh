import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BiSolidLocationPlus } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#363636] text-white font-sans h-60 px-4">
      <div className=" h-15 flex justify-center">
        <div className="text-sm text-center mt-1 font-sans">
          <h2>“Your Health, Our Priority.”</h2>
          <h3 className="text-[10px]">
            Quality healthcare with care, compassion, and commitment.
          </h3>
          <button className="bg-[#808080] cursor-pointer  hover:bg-blue-900 text-white text-center rounded-2xl text-[10px] font-bold p-1.5 mt-2 ">
            <a
              href="https://wa.me/918601276394?text=I%20want%20to%20Book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment
            </a>
          </button>
          <div className="flex justify-center ">
            <GrInstagram className="m-2" />
            <FaXTwitter className="m-2" />
            <FaFacebookSquare className="m-2" />
          </div>

          <h3 className="text-[10px] mt-1 flex justify-center">
            <IoIosCall className="text-[14px] " />
            (+91) 9984225850, (+91) 8601276394, (+91) 9198976815
          </h3>
          <h3 className="text-[10px] flex ">
            <BiSolidLocationPlus className="text-[14px] " /> Balrampur Road,
            Near Indian Gas Agency, Utraula-Balrampur 271604
          </h3>

          <h3 className="text-[10px] mt-5">
            Copyright © 2026 Abdul Kareem Memorial <br />
            Hospital & Trauma Center | All Rights Reserved  | <br /> Devloped by{" "}
            <span className="text-[#7fc331] font-bold cursor-pointer hover:text-white ">
              <a
                href="https://alburaq.bharatwebservices.live/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Al'Buraq
              </a>
            </span> 7408780796 
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <h1 id='contact' className="text-[9px] text-red-700 font-bold mt-3 ">CONTACT US</h1>
      <div className=" font-bold font-sans text-blue-900">
        We're Here to Help
      </div>
      <h3 className="text-[9px] text-[#0044A3]">
        Have a question or need assistance? out to us. We're always ready to
        support you.
      </h3>
      <div>
        <div className="flex mt-2">
          <div className="">
            <FaLocationDot className="size-6 mt-1 text-red-700" />
          </div>
          <div className="text-blue-900 font-semibold ml-1.5">
            <h2 className="text-red-700 font-bold">Our Location</h2>
            <p className="text-[12px]">
              {" "}
              Balrampur Road, Near Indian Gas Agency, <br /> Utraula-Balrampur,
              Uttar Pradesh 271604
            </p>
          </div>
        </div>

        <div className="flex mt-2">
          <div className="">
            <IoIosCall className="size-6 mt-1  text-red-700" />
          </div>
          <div className="text-blue-900 font-semibold ml-1.5">
            <h2 className="text-red-700 font-bold">Call Us</h2>
            <p className="text-[12px]">
              {" "}
              +91 99842 25850 <br /> +91 86012 76394 <br />
              +91 91989 76815
            </p>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="">
            <FaRegClock className="size-6 mt-0.5 text-red-700" />
          </div>
          <div className="text-blue-900 font-semibold ml-1.5">
            <h2 className="text-red-700 font-bold">Opening Hours</h2>
            <p className="text-[12px]">
              {" "}
              OPD: 9:00 AM - 2:00 PM (Mon - Sat) <br /> Emergency: 24/7
            </p>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="">
            <MdEmail className="size-6 mt-0.5 text-red-700" />
          </div>
          <div className="text-blue-900 font-semibold ml-1.5">
            <h2 className="text-red-700 font-bold">Email Us</h2>
            <p className="text-[12px]">
              info@kareemmemorialhispital.in
            </p>
          </div>
        </div>
      </div>
       <div className="w-full h-60 mt-3 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.0043479287046!2d82.40747677496118!3d27.311926942821636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997430033c195e5%3A0x745b218c5fdb7692!2sAbdul%20Kareem%20Memorial%20Hospital%20and%20Hareem%20Trauma%20Centre%20Utraula!5e1!3m2!1sen!2sin!4v1789927695733!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospital Location"
            />
          </div>
    </>
  );
};

export default Contact;

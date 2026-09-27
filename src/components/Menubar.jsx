
import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import SlideMenu from "./SlideMenu";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex  items-center justify-between px-2 bg-white top-0 left-0 w-full z-50 rounded fixed">
      <button
  onClick={() => setIsOpen(true)}
  className="text-2xl md:hidden"
>
  <RxHamburgerMenu className="text-2xl text-blue-900 cursor-pointer " />
</button>
      
      <Link to="/">
      <div className=" py-1 flex pt-2">
        <img src={logo} alt="" className="h-12  " />
        <div className="text-center text-blue-900 font-sans leading-4 ml-2">
          <h1 className="font-black">Abdul Kareem Memorial</h1>
          <h2 className="text-[11.5px] font-bold">
            Hospital & Hareem Trauma Center
          </h2>
          <h3 className="text-red-600 font-bold text-sm">UTRAULA, BALRAMPUR</h3>
        </div>
      </div>
      </Link>
      <FaWhatsapp className="text-2xl text-blue-900 cursor-pointer " />
    <SlideMenu
  isOpen={isOpen}
  setIsOpen={setIsOpen}
/>
    </div>
  );
};

export default Menubar;

import React from "react";
import { useLocation, useNavigate } from "react-router";
import { RxCross2 } from "react-icons/rx";

const SlideMenu = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Doctors", id: "doctors" },
    { name: "About", id: "about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleMenuClick = (item) => {
    setIsOpen(false);

    // Gallery
    if (item.path) {
      navigate(item.path);
      window.scrollTo(0, 0);
      return;
    }

    // If already on Home
    if (location.pathname === "/") {
      document.getElementById(item.id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } 
    
    // If currently on Gallery
    else {
      navigate("/");

      // Wait for Home page to render
      setTimeout(() => {
        document.getElementById(item.id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[998] bg-black/40"
        />
      )}

      <div
        className={`fixed top-0 left-0 z-[999] h-screen w-[80%] max-w-[350px] bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="text-xl font-semibold">Menu</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl"
          >
            <RxCross2 />
          </button>
        </div>

        <div className="flex flex-col px-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item)}
              className="border-b border-gray-200 py-4 text-left text-lg"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SlideMenu;
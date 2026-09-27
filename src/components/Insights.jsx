import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Insights = () => {
  const flyers  = [
    "/latest/hospital-1.png",
    "/latest/hospital-2.png",
    "/latest/hospital-3.png",
  ];

  const [current, setCurrent] = useState(0);

const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % flyers.length);
};

const prevSlide = () => {
  setCurrent((prev) => (prev - 1 + flyers.length) % flyers.length);
};

useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 4000);

  return () => clearInterval(interval);
}, []);
  return (
    <>
      <div className="flex items-center mt-3">
        <h1 className="text-[9px] text-red-700 font-bold ">LATEST UPDATES</h1>
        <img
          className="size-8 items-center"
          src="https://media.tenor.com/UBNApyolWz4AAAAj/new-blinking-new-blinking-without-background.gif"
          alt=""
        />
      </div>
      <div className=" font-bold font-sans text-blue-900">
        Stay Updated. Stay Informed.
      </div>
      
        <div className="relative mt-2 w-full overflow-hidden rounded bg-white aspect-video">

  {/* Slides */}
  <div
    className="flex h-full transition-transform duration-700 ease-out"
    style={{
      transform: `translateX(-${current * 100}%)`,
    }}
  >
    {flyers.map((flyer, index) => (
      <div
        key={index}
        className="min-w-full h-full"
      >
        <img
          src={flyer}
          alt={`Hospital Update ${index + 1}`}
          className="h-full w-full object-contain"
        />
      </div>
    ))}
  </div>

  {/* Previous */}
  <button
    onClick={prevSlide}
    className="absolute left-3 top-1/2 -translate-y-1/2
               flex h-8 w-8 items-center justify-center
               rounded-full bg-white/80 text-blue-900 shadow
               transition hover:bg-white"
  >
    <FaChevronLeft size={13} />
  </button>

  {/* Next */}
  <button
    onClick={nextSlide}
    className="absolute right-3 top-1/2 -translate-y-1/2
               flex h-8 w-8 items-center justify-center
               rounded-full bg-white/80 text-blue-900 shadow
               transition hover:bg-white"
  >
    <FaChevronRight size={13} />
  </button>

  {/* Dots */}
  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
    {flyers.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        aria-label={`Go to flyer ${index + 1}`}
        className={`h-2 rounded-full transition-all duration-300 ${
          current === index
            ? "w-6 bg-red-700"
            : "w-2 bg-white/80"
        }`}
      />
    ))}
  </div>

</div>
      
    </>
  );
};

export default Insights;

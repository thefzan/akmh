import React from 'react'
import { GrGallery } from "react-icons/gr";
import { NavLink } from "react-router";

const GalleryLink = () => {
  return (
    <>
     <h1 className='text-[9px] text-red-700 font-bold mt-3 id="gallery"'>HOSPITAL GALLERY</h1>
    <div className=' font-bold font-sans text-blue-900'>A Glimpse of Our Care & Facilities</div>
    <h3 className='text-[9px] text-[#0044A3]'>Explore our hospital, modern facilities, dedicated medical team, and caring environment designed for your health and comfort.</h3>
    <NavLink to="/Gallery">
    <button className="bg-red-700 cursor-pointer text-white text-center rounded flex justify-center items-center text-[13px] w-full font-bold p-1.5 mt-2">
            Hospital Image Gallery <GrGallery className='size-5 ml-2' />
          </button>
    </NavLink>
    </>
  )
}

export default GalleryLink
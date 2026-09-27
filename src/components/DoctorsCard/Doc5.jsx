import React from 'react'

const Doc5 = () => {
  return (
    <>
      <div className="bg-white w-42 rounded mt-1">
        <div className="p-1">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.roynKRS819Eau9HLBjzGwgHaHa?r=0&w=1920&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="img"
            className=" rounded-xl"
          />
          <h1 className="font-bold text-[12px] font-sans ml-1 text-red-700 mt-1">
            Dr. Khushnuma Siddiqui
          </h1>
          <p className="text-[#0044A3] font-bold font-sans text-[9px] ml-1">
            Gaynecology & Obstetrics
          </p>
          <div className="leading-4">
            <p className="text-[#0044A3] font-bold font-sans text-[9px] ml-1">
              B.U.M.S (Maharstra) स्त्री रोग विशेषज्ञ
            </p>
            <p className="text-[#0044A3] font-semibold font-sans text-[7px] ml-1">
              OPD: Mon -Sat | 10:00 AM- 2:00 PM
            </p>
          </div>
          <button className="bg-red-700 cursor-pointer text-white text-center rounded text-[9px] w-full font-bold p-1.5 mt-2">
            <a href="https://wa.me/918601276394?text=Hello%2C+I+would+like+to+book+an+appointment+with+Dr.+Khushnuma+Siddiqui.&utm_source=chatgpt.com" target="_blank">
          Book Appointment
        </a>
          </button>
        </div>
      </div>
    </>
  )
}

export default Doc5
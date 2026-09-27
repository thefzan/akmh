import React from 'react'
import DepCard from './DepartmentCards/DepCard'
import DepCard2 from './DepartmentCards/DepCard2'
import DepCard3 from './DepartmentCards/DepCard3'
import DepCard4 from './DepartmentCards/DepCard4'
import DepCard5 from './DepartmentCards/DepCard5'
import DepCard6 from './DepartmentCards/DepCard6'

const Department = () => {
  return (
    <>
    <h1 id="services" className='text-[9px] text-red-700 font-bold mt-3  scroll-mt-24 '>OUR SERVICES</h1>
    <div className=' font-bold font-sans text-blue-900'>Comprehensive Medical Services</div>
    <h3 className='text-[9px] text-[#0044A3]'>We offer a wide range of specialization services to meet the healthcare needs of you and your family.</h3>
    <div className='flex gap-2 justify-center flex-wrap'>
      <DepCard/>
      <DepCard2/>
      <DepCard3/>
      <DepCard4/>
      <DepCard5/>
      <DepCard6/>
    </div>
    
    </>
  )
}

export default Department
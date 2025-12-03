import React from 'react'
import {HiOutlineLightBulb} from "react-icons/hi";
import image1 from '../assets/images/image.png'

const Expense = () => {
  return (
    <div className='w-full flex flex-row' >
      <div className='h-[60vh] w-1/4 flex  items-end font-bold flex-col  py-5 text-[#6e54a0] text-2xl '>
        <div className='w-full h-0.5 bg-[#6e54a0] rounded' ></div>
        <h1>R&D Expenses</h1>
      </div>
      <div className='h-[60vh] w-1/4 flex p-5 justify-center items-center  text-white text-sm'>
        <div className='h-full w-full rounded bg-[#cfeef3]  text-black flex  shadow-black shadow-md flex-col p-5 gap-2' >
          <div className='w-full h-full flex flex-col justify-between items-center'>
            <h1 className='text-[#6e54a0] font-bold text-lg ' >Recommended</h1>
            <p className='mt-10 flex justify-center items-center w-full font-bold text-center text-xs  '>Connect to your Xero account to view your data instantly and etimate  your R&D claim and more accurately.</p>
            <button className='bg-[#04b7e2] p-2 rounded text-white font-bold'>Connect to Xero</button>
          </div>
        </div>
      </div>
      <div className='h-[60vh] w-1/4 flex p-5 justify-center items-center  text-white text-sm'>
        <div className='h-full w-full rounded bg-white   text-black flex  justify-between items-center shadow-black shadow-md flex-col p-5 gap-2' >
          <img className='h-30 ' src={image1} alt="no image" />
          <p className='font-bold text-center text-xs ' >Insert your expenses infromation  manually to estimate your R&D claim.</p>
          <button className='bg-[linear-gradient(90deg,#8161AE,#7362E2)] p-2 rounded text-white font-bold' >Mannualy Input Data</button>
        </div>
      </div>
      <div className='h-[60vh] w-1/4 flex  items-start  flex-col  py-5 text-[#6e54a0] text-sm '>
        <div className='w-full h-0.5 bg-[#6e54a0] rounded ' ></div>
        <HiOutlineLightBulb className ='m-5 text-4xl'/>
        <p className='font-bold text-center text-xs px-8'> dolor sit amet consectetur adipisicing elit. Reiciendis, eaque eum? Magni magnam recusandae sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque quibusdam ab obcaecati, molestiae facilis?</p>
      </div>
    </div>
  )
}

export default Expense

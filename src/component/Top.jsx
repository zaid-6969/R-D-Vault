import React from 'react'
import image1 from '../assets/images/Screenshot_2025-11-27_193247-removebg-preview.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LuCircleCheckBig } from "react-icons/lu";

const Top = () => {
    return (
        <div className='min-h-[80vh] h-auto w-full bg-[linear-gradient(90deg,#7362E2,#8161AE)] flex flex-col justify-around items-center flex-wrap' >
            <div className='h-[6vh] w-full text-white flex justify-center items-center flex-wrap'>
                <ul className='h-full w-[35%]  flex flex-row  gap-2 items-end flex-wrap'>
                    <li>
                        <img className='h-full w-50 ' src={image1} alt="" />
                    </li>
                    <li>
                        <h1>R&D Tax Calim-Estimator</h1>
                    </li>
                </ul>
                <ul className='h-full w-[40%]  flex flex-row  justify-between items-center flex-wrap'>
                    <li className='flex'>
                        <p className='h-full bg-[#64b77f] text-[12px] p-1 px-2 rounded-full font-extrabold text-white '>NEED HELP ?</p>
                    </li>
                    <li className='flex flex-row  gap-2 items-center'>
                        <FaPhoneAlt /> <p> +9894427100</p>
                    </li>
                    <li className='hidden md:flex flex-row  gap-2 items-center'>
                        <IoMdMail /><p>bawasmohammedzaid@.com</p>
                    </li>
                </ul>
            </div>
            <div className='h-[8vh] bg-[#7258bb] w-full text-white text-center flex flex-row justify-center items-center bg-[linear-gradient(90deg, #7362e200, #8161ae4d)] '>
                <div className='h-full w-[70%]  flex flex-row justify-around items-center flex-wrap '>
                  <div className='flex gap-5 items-center opacity-[0.5]'>  <span className='w-full h-full flex rounded-full bg-[#64b77f] justify-center items-center'><LuCircleCheckBig /></span>  <div>Start</div> </div>
                  <div className='flex gap-5 items-center'>  <span className='w-5 h-5 flex rounded-full bg-[#64b77f] justify-center items-center'>2</span>  <div>Your Compnay</div> </div>
                  <div className='flex gap-5 items-center opacity-[0.5]'>  <span className='w-5 h-5 flex rounded-full bg-[#64b77f] justify-center items-center'>3</span>  <div>Your Estimated R&D Claim</div> </div>
                </div>
            </div>
            <div className='h-[30vh]   justify-center items-center text-5xl text-white font-extrabold  flex-wrap'>
                <h1>Tell Us About Your Copmany</h1>
            </div>
        </div>
    )
}

export default Top

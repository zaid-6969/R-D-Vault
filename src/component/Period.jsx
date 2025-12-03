import React, { useContext, useState, useEffect } from 'react'
import Calender from './Calender'
import { FcCheckmark } from "react-icons/fc";
import { CompanyContext } from '../context/CompanyContext';


const Period = () => {

    const {
        startInput, setStartInput,
        endInput, setEndInput,
        startDate, setStartDate,
        endDate, setEndDate,
        dateRange, setDateRange
    } = useContext(CompanyContext);


    const {
        scrollToCalendar,
        setScrollToCalendar
    } = useContext(CompanyContext);

    useEffect(() => {
        if (scrollToCalendar) {
            const section = document.getElementById("calendar-section");
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            setScrollToCalendar(false); // reset
        }
    }, [scrollToCalendar]);


    const handleInput = (value, setInput, setDate) => {
        let v = value.replace(/[^\d]/g, "");

        if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
        if (v.length >= 6) v = v.slice(0, 5) + "/" + v.slice(5, 9);

        setInput(v);

        if (v.length !== 10) return;

        const [dd, mm, yyyy] = v.split("/");
        const d = new Date(yyyy, mm - 1, dd);

        if (!isNaN(d)) setDate(d);
    };

    return (
        <div id="calendar-section" className='w-full flex flex-row' >
            <div className=' w-1/4 flex  items-center  flex-col  py-5 text-[#6e54a0] text-2xl '>
                <div className='w-full h-0.5 bg-[#6e54a0] rounded' ></div>
                <h1>Your R&D Claim Period</h1>
            </div>

            <div className=' w-1/2 flex p-5 justify-center items-center text-white text-sm'>
                <div className='h-full w-full rounded bg-white text-black flex shadow-black shadow-md flex-col p-5 gap-2'>

                    <div>
                        <h1>Please Enter Your R&D Claim Period to Estimate Your R&D Claim</h1>

                        <div className='w-full flex flex-col text-black gap-2 p-1'>

                            <div className='bg-[linear-gradient(90deg,#8161AE,#7362E2)] text-xs text-white w-full rounded-lg p-3 flex justify-between'>
                                <h1>Period 1: 1 April 2018 to 31 March 2019</h1>
                                <span className='bg-white rounded-full h-4 w-4 flex items-center justify-center'><FcCheckmark /></span>
                            </div>

                            <div className='bg-[linear-gradient(90deg,#8161AE,#7362E2)] text-xs text-white w-full rounded-lg p-3 flex justify-between'>
                                <h1>Period 2: 1 April 2019 to 31 March 2020</h1>
                                <span className='bg-white rounded-full h-4 w-4 flex items-center justify-center'><FcCheckmark /></span>
                            </div>

                            <div className='bg-[linear-gradient(90deg,#8161AE,#7362E2)] text-xs text-white w-full rounded-lg p-3 flex justify-between'>
                                <h1>Period 3: 1 April 2020 to 31 March 2021</h1>
                                <span className='bg-white rounded-full h-4 w-4 flex items-center justify-center'><FcCheckmark /></span>
                            </div>

                        </div>
                    </div>

                    <div className='w-2/3 flex flex-col items-start gap-2 text-[#6e54a0]'>

                        <div className='w-full flex justify-between text-xs items-center'>
                            <h1>Claim Period Started Date:</h1>
                            <input
                                type="text"
                                value={startInput}
                                onChange={(e) =>
                                    handleInput(e.target.value, setStartInput, setStartDate)
                                }
                                placeholder="DD/MM/YYYY"
                                className="bg-[#e9e9e9] p-2 rounded outline-none"
                            />
                        </div>

                        <div className='w-full flex justify-between text-xs items-center'>
                            <h1>Claim Period Ended Date:</h1>
                            <input
                                type="text"
                                value={endInput}
                                onChange={(e) =>
                                    handleInput(e.target.value, setEndInput, setEndDate)
                                }
                                placeholder="DD/MM/YYYY"
                                className="bg-[#e9e9e9] p-2 rounded outline-none"
                            />
                        </div>

                    </div>

                    <div className='w-full bg-[linear-gradient(90deg,#8161AE,#7362E2)] flex justify-between items-center p-1 gap-2'>
                        <div className='bg-white p-1 w-1/2 flex justify-center'><h1>Claim Period Started Date</h1></div>
                        <div className='bg-white p-1 w-1/2 flex justify-center'><h1>Claim Period Ended Date</h1></div>
                    </div>

                    <div className='h-60 w-full bg-red-500 flex justify-around'>
                        <div className='w-full  bg-white h-full px-2'>
                            <Calender />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Period


import React, { useContext, useEffect, useRef, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import { CompanyContext } from '../context/CompanyContext';
import { useNavigate } from "react-router-dom";


const Company = () => {

    const [data, setData] = useState([]);
    const [company, setCompany] = useState(null);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const {
        selectedCompanyIndex,
        setSelectedCompanyIndex,
        setScrollToCalendar
    } = useContext(CompanyContext);

    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch("https://692d6c24e5f67cd80a4b73cc.mockapi.io/calculate");
                let result = await response.json();
                setData(result);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, []);


    const handler = (e) => {
        setSearch(e.target.value);
    };


    const filteredData = data.filter(item =>
        item.company.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = filteredData.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (globalIndex) => {

        if (selectedCard === globalIndex) {
            setSelectedCard(null);
        } else {
            setSelectedCard(globalIndex);
        }

        setScrollToCalendar(true);

        // navigate("/period");
    };



    return (
        <div className='w-full flex flex-row'>

            {/* Left Side */}
            <div className='h-screen w-1/4 flex items-end flex-col py-5 text-[#6e54a0] font-bold text-2xl'>
                <div className='w-full h-0.5 bg-[#6e54a0] rounded'></div>
                <h1>Company</h1>
                <h1>Name</h1>
                <p className={`text-[10px] p-1 mt-5 bg-[#64b77f] ${selectedCard ? "flex" : "flex"} rounded-full text-white font-extrabold`}>COMPLETED</p>
            </div>

            {/* Center Content */}
            <div className='h-screen w-1/2 flex p-5 justify-center items-center text-white text-3xl'>
                <div className='overflow-y-scroll h-full w-full rounded bg-white flex justify-between shadow-black shadow-md flex-col p-5 gap-10'>

                    {/* Search Box */}
                    <div className='w-full flex rounded flex-col gap-5 text-black text-sm'>
                        <input
                            onChange={handler}
                            value={search}
                            className='w-full p-3 border-0 outline-0 text-[#6e54a0] bg-[#e8e4f3] rounded'
                            type="text"
                            placeholder='Enter Your Company Name'
                        />
                    </div>

                    {/* Cards */}
                    <div className='w-full h-[70%] flex flex-wrap items-start justify-start rounded gap-3  text-sm'>
                        {currentItems.map((item, index) => {

                            const globalIndex = startIndex + index;

                            return (
                                <div
                                    key={index}
                                    onClick={() => handleCardClick(globalIndex)}
                                    className={`w-40 h-20 p-3 rounded cursor-pointer flex justify-between items-center gap-2
                                    ${selectedCard === globalIndex ? "bg-[linear-gradient(90deg,#8161AE,#7362E2)] text-white" : "bg-gray-200 text-black"} `} >
                                    <div>
                                        <h1 className='font-bold text-sm ' >{item.company}</h1>
                                        <p className='font-bold text-[10px] ' >{item.place}</p>
                                    </div>
                                    <div className={`bg-white w-4 h-4 rounded-full ${selectedCard === globalIndex ? "flex" : "hidden"}  justify-center items-center`} >
                                        <FcCheckmark />
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                    <div className='w-full flex flex-col items-end'>
                        <div className='flex flex-col justify-center text-sm items-center text-[#6e54a0] gap-2'>

                            <p className='font-bold text-[20px]'>
                                {currentPage} / {totalPages}
                            </p>

                            <div className='bg-[linear-gradient(90deg,#8161AE,#7362E2)] px-8 text-white flex gap-5 justify-center items-center p-1 rounded-full'>
                                <button
                                    className='flex items-center disabled:opacity-40'
                                    onClick={prevPage}
                                    disabled={currentPage === 1}
                                >
                                    <MdArrowBackIos /> Back
                                </button>

                                <button
                                    className='flex items-center disabled:opacity-40'
                                    onClick={nextPage}
                                    disabled={currentPage >= totalPages}
                                >
                                    Next <MdArrowForwardIos />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;



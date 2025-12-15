import React, { useContext, useEffect } from "react";
import { FcCheckmark } from "react-icons/fc";
import { CompanyContext } from "../context/CompanyContext";
import Calender from "./Calender";

const Period = () => {
  const {
    startInput, setStartInput,
    endInput, setEndInput,
    startDate, setStartDate,
    endDate, setEndDate,
    scrollToCalendar, setScrollToCalendar
  } = useContext(CompanyContext);

  useEffect(() => {
    if (scrollToCalendar) {
      document.getElementById("calendar-section")
        ?.scrollIntoView({ behavior: "smooth" });
      setScrollToCalendar(false);
    }
  }, [scrollToCalendar]);

  const handleInput = (value, setInput, setDate) => {
    let v = value.replace(/[^\d]/g, "");
    if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
    if (v.length >= 6) v = v.slice(0, 5) + "/" + v.slice(5, 9);
    setInput(v);

    if (v.length === 10) {
      const [dd, mm, yyyy] = v.split("/");
      const d = new Date(yyyy, mm - 1, dd);
      if (!isNaN(d)) setDate(d);
    }
  };

  return (
    <section id="calendar-section" className="w-full flex flex-col lg:flex-row gap-6">

      {/* Left */}
      <div className="w-full lg:w-1/4 text-center lg:text-right">
        <div className="h-1 bg-[#6e54a0] mb-2"></div>
        <h2 className="text-xl font-bold text-[#6e54a0]">
          Your R&D Claim Period
        </h2>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 bg-white rounded shadow-md p-4 sm:p-6 flex flex-col gap-4">

        <p className="text-sm text-black">
          Please enter your R&D claim period
        </p>

        {/* Preset periods */}
        {[
          "1 April 2018 to 31 March 2019",
          "1 April 2019 to 31 March 2020",
          "1 April 2020 to 31 March 2021"
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-[#8161AE] to-[#7362E2]
              text-white text-xs rounded-lg p-3 flex justify-between"
          >
            <span>{item}</span>
            <span className="bg-white rounded-full h-4 w-4 flex items-center justify-center">
              <FcCheckmark />
            </span>
          </div>
        ))}

        {/* Inputs */}
        <div className="flex flex-col gap-3 text-xs text-[#6e54a0]">
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <span>Start Date</span>
            <input
              value={startInput}
              onChange={e => handleInput(e.target.value, setStartInput, setStartDate)}
              placeholder="DD/MM/YYYY"
              className="bg-[#e9e9e9] p-2 rounded outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <span>End Date</span>
            <input
              value={endInput}
              onChange={e => handleInput(e.target.value, setEndInput, setEndDate)}
              placeholder="DD/MM/YYYY"
              className="bg-[#e9e9e9] p-2 rounded outline-none"
            />
          </div>
        </div>

        {/* Calendar */}
        <div className="h-64 w-full bg-white">
          <Calender />
        </div>

      </div>
    </section>
  );
};

export default Period;

import React, { useContext } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CompanyContext } from "../context/CompanyContext";

const Calender = () => {
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setStartInput,
    setEndInput,
  } = useContext(CompanyContext);

  const handleRange = (ranges) => {
    const { startDate: s, endDate: e } = ranges.selection;

    setStartDate(s);
    setEndDate(e);

    setStartInput(s.toLocaleDateString("en-GB"));
    setEndInput(e.toLocaleDateString("en-GB"));
  };

  return (
    <div className="w-full h-full">
      <style>
        {`

          .calendar-wrapper {
            width: 670px;
            height: 289px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
            .rdrDateDisplayWrapper {
            background-color: #ffffff !important;
}

          .rdrCalendarWrapper {
            transform: scale(0.75);
            transform-origin: top left;
          }

          .rdrDateRangeWrapper {
            width: 100%;
          }

          .rdrMonth {
            width: 220px !important;
            justify-content: spacd-around !important;
            padding: 0px !important;
          }

           .rdrMonths {
              display: flex;
              justify-content: space-around;
             }
              
          .rdrDayNumber span {
            font-size: 10px !important;
          }

          .rdrMonthName {
            font-size: 12px !important;
          }
        `}
      </style>

      <div className="calendar-wrapper">
        <DateRange
          ranges={[
            {
              startDate: startDate,
              endDate: endDate,
              key: "selection",
            },
          ]}
          onChange={handleRange}
          months={2}
          direction="horizontal"
          moveRangeOnFirstSelection={false}
          rangeColors={["#8161AE"]}
        />
      </div>
    </div>
  );
};

export default Calender;

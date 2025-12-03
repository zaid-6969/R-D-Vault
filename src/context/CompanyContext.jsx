// import { createContext, useState } from "react";

// export const CompanyContext = createContext();

// export function CompanyProvider({ children }) {
//   const [startInput, setStartInput] = useState("");
//   const [endInput, setEndInput] = useState("");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//     const [dateRange, setDateRange] = useState([null, null]);

//   return (
//     <CompanyContext.Provider value={{ startInput, setStartInput, endInput, setEndInput, startDate, setStartDate, endDate, setEndDate , dateRange, setDateRange }} >
//       {children}
//     </CompanyContext.Provider>
//   );
// }


import { createContext, useState } from "react";

export const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [scrollToCalendar, setScrollToCalendar] = useState(false);


  // NEW → date range for DateRangePicker
  const [dateRange, setDateRange] = useState([null, null]);

  return (
    <CompanyContext.Provider value={{
      startInput, setStartInput,
      endInput, setEndInput,
      startDate, setStartDate,
      endDate, setEndDate,
      dateRange, setDateRange ,
      scrollToCalendar, setScrollToCalendar
    }}>
      {children}
    </CompanyContext.Provider>
  );
}


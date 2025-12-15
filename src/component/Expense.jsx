import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import image1 from "../assets/images/image.png";

const Expense = () => {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Title */}
      <div className="text-center lg:text-right">
        <div className="h-1 bg-[#6e54a0] mb-2"></div>
        <h2 className="text-xl font-bold text-[#6e54a0]">
          R&D Expenses
        </h2>
      </div>

      {/* Recommended */}
      <div className="bg-[#cfeef3] rounded shadow-md p-5 flex flex-col justify-between text-center">
        <h3 className="font-bold text-[#6e54a0]">Recommended</h3>
        <p className="text-xs font-bold mt-4">
          Connect to Xero to automatically estimate your R&D claim.
        </p>
        <button className="bg-[#04b7e2] text-white font-bold p-2 rounded mt-4">
          Connect to Xero
        </button>
      </div>

      {/* Manual */}
      <div className="bg-white rounded shadow-md p-5 flex flex-col items-center justify-between text-center">
        <img src={image1} alt="manual" className="h-24" />
        <p className="text-xs font-bold">
          Enter expenses manually to estimate your R&D claim.
        </p>
        <button className="
          bg-gradient-to-r from-[#8161AE] to-[#7362E2]
          text-white font-bold p-2 rounded
        ">
          Manual Input
        </button>
      </div>

      {/* Info */}
      <div className="bg-white rounded shadow-md p-5 flex flex-col items-center gap-3 text-center">
        <HiOutlineLightBulb className="text-4xl text-[#6e54a0]" />
        <p className="text-xs font-bold">
          Tip: Accurate expense data improves your R&D claim estimate.
        </p>
      </div>

    </section>
  );
};

export default Expense;

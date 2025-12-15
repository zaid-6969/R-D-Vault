import React from "react";

const Subsidies = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-6">

      {/* Left */}
      <div className="w-full lg:w-1/4 text-center lg:text-right">
        <div className="h-1 bg-[#6e54a0] mb-2"></div>
        <h2 className="text-xl font-bold text-[#6e54a0]">
          Grants & Subsidies
        </h2>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 bg-white rounded shadow-md p-6 flex flex-col gap-6">

        <p className="text-sm text-black">
          Has your company received any grants or subsidies?
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="
            w-full sm:w-1/2 p-3 font-bold text-white rounded
            bg-gradient-to-r from-[#8161AE] to-[#7362E2]
          ">
            No
          </button>

          <button className="
            w-full sm:w-1/2 p-3 font-bold text-white rounded
            bg-gradient-to-r from-[#8161AE] to-[#7362E2]
          ">
            Yes
          </button>
        </div>

      </div>
    </section>
  );
};

export default Subsidies;

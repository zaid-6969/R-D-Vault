import React, { useEffect, useState, useContext } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import { CompanyContext } from "../context/CompanyContext";

const Company = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const perPage = 9;

  const { setScrollToCalendar } = useContext(CompanyContext);

  useEffect(() => {
    fetch("https://692d6c24e5f67cd80a4b73cc.mockapi.io/calculate")
      .then(res => res.json())
      .then(setData);
  }, []);

  const filtered = data.filter(d =>
    d.company.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage) || 1;
  const items = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <section className="w-full flex flex-col lg:flex-row gap-6">

      {/* Left */}
      <div className="w-full lg:w-1/4 text-center lg:text-right">
        <div className="h-1 bg-[#6e54a0] mb-2"></div>
        <h2 className="text-xl font-bold text-[#6e54a0]">Company Name</h2>
      </div>

      {/* Center */}
      <div className="w-full lg:w-1/2 bg-white rounded shadow-md p-4 sm:p-6 flex flex-col gap-6">

        <input
          className="p-3 rounded bg-[#e8e4f3]"
          placeholder="Search company..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelected(idx);
                setScrollToCalendar(true);
              }}
              className={`p-3 rounded cursor-pointer flex justify-between items-center
                ${selected === idx
                  ? "bg-linear-to-r from-[#8161AE] to-[#7362E2] text-white"
                  : "bg-gray-200"
                }`}
            >
              <div>
                <h3 className="font-bold text-sm">{item.company}</h3>
                <p className="text-xs">{item.place}</p>
              </div>
              {selected === idx && (
                <span className="bg-white rounded-full p-1">
                  <FcCheckmark />
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end items-center gap-4 text-sm">
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
            <MdArrowBackIos />
          </button>
          <span>{page} / {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
            <MdArrowForwardIos />
          </button>
        </div>

      </div>

    </section>
  );
};

export default Company;

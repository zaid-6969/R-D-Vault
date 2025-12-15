import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CompanyProvider } from "./context/CompanyContext";
import Top from "./component/Top";
import Company from "./component/Company";
import Period from "./component/Period";
import Subsidies from "./component/Subsidies";
import Expense from "./component/Expense";

const App = () => {
  return (
    <BrowserRouter>
      <CompanyProvider>

        <Top />

        <main className="
          w-full bg-white
          px-4 sm:px-6 md:px-10 lg:px-16
          py-8
          flex flex-col gap-12
        ">
          <Company />
          <Period />
          <Subsidies />
          <Expense />
        </main>

        {/* Footer */}
        <footer className="relative w-full overflow-hidden bg-[#F6F4FB]">
          <svg className="absolute bottom-24 w-full h-40 sm:h-56" viewBox="0 0 1920 220" preserveAspectRatio="none">
            <path fill="#E9E4F6" d="M0,120 C400,200 1100,60 1920,140 L1920,0 L0,0 Z" />
          </svg>

          <svg className="absolute bottom-0 w-full h-52 sm:h-64" viewBox="0 0 1920 260" preserveAspectRatio="none">
            <defs>
              <linearGradient id="footerPurpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7A63EA" />
                <stop offset="40%" stopColor="#6C52DB" />
                <stop offset="100%" stopColor="#744BBE" />
              </linearGradient>
            </defs>
            <path fill="url(#footerPurpleGrad)" d="M0,160 C420,100 1200,60 1920,190 L1920,260 L0,260 Z" />
          </svg>

          <div className="relative z-10 text-center text-white py-8 text-xs sm:text-sm px-4">
            © 2020 RDvault · hello@rdvault.co.uk · Privacy Policy · Terms
          </div>
        </footer>

      </CompanyProvider>
    </BrowserRouter>
  );
};

export default App;

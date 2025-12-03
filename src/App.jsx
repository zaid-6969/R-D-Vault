import React from 'react'
import Top from './component/Top'
import Company from './component/Company'
import Period from './component/Period'
import Subsidies from './component/Subsidies'
import Expense from './component/Expense'
import { CompanyProvider } from "./context/CompanyContext";
import { BrowserRouter } from 'react-router-dom'




const App = () => {
  return (
    <BrowserRouter>
      <CompanyProvider>
        <>
          <Top />
          <div className='w-full flex bg-white px-10 flex-col gap-10' >
            <Company />
            <Period />
            <Subsidies />
            <Expense />
          </div>
          <div class="relative w-full overflow-hidden bg-[#F6F4FB]">
            <svg

              class="absolute bottom-20 left-0 w-full"

              viewBox="0 0 1920 220"

              preserveAspectRatio="none"
            >
              <path

                fill="#E9E4F6"

                d="M0,120 C400,200 1100,60 1920,140 L1920,0 L0,0 Z"

              />
            </svg>
            <svg

              class="absolute bottom-0 left-0 w-full"

              viewBox="0 0 1920 260"

              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="footerPurpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#7A63EA" />
                  <stop offset="40%" stop-color="#6C52DB" />
                  <stop offset="100%" stop-color="#744BBE" />
                </linearGradient>
              </defs>

              <path

                fill="url(#footerPurpleGrad)"

                d="M0,160 C420,100 1200,60 1920,190 L1920,260 L0,260 Z"

              />
            </svg>


            <div class="relative z-10 text-center text-white py-10 text-sm">

              © 2020 RDvault. All rights reserved │ hello@rdvault.co.uk │ Privacy Policy │ Terms & Conditions
            </div>
          </div>
        </>
      </CompanyProvider>
    </BrowserRouter>
  )
}

export default App

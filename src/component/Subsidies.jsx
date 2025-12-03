import React from 'react'

const Subsidies = () => {
  return (
    <div className='w-full flex flex-row' >
      <div className='h-50 w-1/4 flex  items-end  flex-col  py-5 text-[#6e54a0] font-bold text-2xl'>
        <div className='w-full h-0.5 bg-[#6e54a0] rounded' ></div>
        <h1>Grants & Subsidies</h1>
      </div>
      <div className='h-50 w-1/2 flex p-5  justify-center items-center  text-white text-3xl'>
        <div className='h-full w-full rounded bg-white flex justify-between shadow-black shadow-md flex-col py-10 p-5 gap-10' >
          <h1 className='text-xs text-black'>Has your company been in receipt of one or more Grants/subuidies in this period?</h1>
          <div className=' w-full flex rounded   gap-5 text-white text-sm' >
            <button className='w-1/2 rounded p-2 font-bold  bg-[linear-gradient(90deg,#8161AE,#7362E2)] ' >No</button>
            <button className='w-1/2 rounded p-2 font-bold  bg-[linear-gradient(90deg,#8161AE,#7362E2)] ' >Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subsidies


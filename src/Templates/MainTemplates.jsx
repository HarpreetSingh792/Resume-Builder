import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const MainTemplates = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className='m-auto w-11/12'>
      <h2 className="text-4xl font-extrabold font-mono text-blue-700 text-center mt-7 mb-7" >Templates</h2>
      <hr className=" mt-5 ml-5 text-blue-700 w-11/12 h-8" />

      <div className='w-full flex items-center justify-center flex-wrap gap-10 relative'>
        <div className='overflow-hidden w-56 h-56 cursor-pointer bg-cover [&>button]:hover:top-3/4 [&>button]:hover:transition-all [&>button]:hover:delay-100 [&>img]:hover:scale-110 [&>img]:hover:blur-2 relative'>
          <img src='/assets/template1.jpg' alt='template-1' className='z-100 scale-100 transition-all ease-in' />
          <button onClick={()=>navigate("/templates/1",{state:location.state})} className='z-90 w-3/4 absolute top-full left-1/2 -translate-x-1/2  p-1 pl-3 pr-3 rounded-sm bg-gradient-to-tl from-blue-400 to-blue-600 text-white'>Use Template</button>
        </div>
        {/* <div className='overflow-hidden w-56 h-56 cursor-pointer bg-cover [&>button]:hover:top-3/4 [&>button]:hover:transition-all [&>button]:hover:delay-100 [&>img]:hover:scale-110 [&>img]:hover:blur-2 relative'>
          <img src='./src/assets/template1.jpg' alt='template-1' className='z-100 scale-100 transition-all ease-in' />
          <button onClick={()=>console.log("Hii")} className='z-90 w-3/4 absolute top-full left-1/2 -translate-x-1/2  p-1 pl-3 pr-3 rounded-sm bg-gradient-to-tl from-blue-400 to-blue-600 text-white'>Use Template</button>
        </div> */}
       
      </div>
    </div>
  )
}

export default MainTemplates
import React from 'react'
import { useLocation } from 'react-router-dom';

const ImageLoader = () => {
    const { state } = useLocation();
    return (
        <div className=' bg-slate-100 p-5 flex flex-col items-center justify-center'>
            <img src={state.cv} alt="resume-image" className="m-auto" />
            <div className='sm:w-3/4 md:w-1/3 mt-7'>
                <a className="flex justify-center items-center mr-7 w-full cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white " href={state.cv} download={"resume.jpeg"} >Download</a>
            </div>
        </div>
    )
}

export default ImageLoader
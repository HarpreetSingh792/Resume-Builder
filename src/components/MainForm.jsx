import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const MainForm = ({ children }) => {
    const location = useLocation();
    const { pathname } = location;
    const path = pathname.split("/")[1]
    return (
        <>
            <div className="flex justify-between">
                <div className="fixed sm:w-1/3 md:w-1/5 border border-r-blue-400 pr-2 sm:hidden md:block">
                    <aside className="py-3  top-0 h-screen flex flex-col gap-3 " >
                        <NavLink to="/person" className={`flex justify-center transition-all ease-out border ${path === "person" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"} p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state}>Personal Info</NavLink>
                        <NavLink to="/experience" className={`flex justify-center transition-all ease-out border ${path === "experience" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"}   p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state}>Work Experience</NavLink>
                        <NavLink to="/education" className={`flex justify-center transition-all ease-out border ${path === "education" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"}   p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state}>Education</NavLink>
                        <NavLink to="/projects" className={`flex justify-center transition-all ease-out border ${path === "projects" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"}   p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state}>Projects</NavLink>
                        <NavLink to="/lang" className={`flex justify-center transition-all ease-out border ${path === "lang" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"}   p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state}>Language</NavLink>
                        <NavLink to="/skills" className={`flex justify-center transition-all ease-out border ${path === "skills" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"}   p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state}>Key Skills</NavLink>
                    </aside>
                </div>
               
                <div className='invisible md:w-1/5 sm:hidden md:block min-w-40 border border-red-900 '></div>
                <div className='h-full sm:ml-0 sm:w-full md:ml-3 md:w-10/12'>
                    {
                        children
                    }
                </div>

            </div>
        </>
    )
}

export default MainForm
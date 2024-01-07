import React, { useEffect, useState } from "react";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import { ContextProvider } from "./context";
import Home from "./components/Home/Home";
import PersonalInfo from "./components/Personal/PersonalInfo";
import WorkExperience from "./components/Experience/WorkExperience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import MainTemplates from "./Templates/MainTemplates";
import Lang from "./components/lang/Lang";
import ProjectsSummary from "./components/proSummary/ProjectsSummary";
import Template1 from "./Templates/Template1";
import ImageLoader from "./Templates/ImageLoader";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function App() {
  const [details, setDetails] = useState([]);
  const [navToggler, setNavToggler] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/")[1]

  const addDetails = (item, id = null) => {
    if (id) {
      const subDetailData = details.filter((ele) => ele.id === id);
      const data = subDetailData ? Object.assign({}, subDetailData[0], item) : details;
      setDetails((prev) => prev.map((ele) => ele.id === id ? data : ele))
    }
    else {
      setDetails((prev) => [...prev, item]);
    }
  }

  const deleteDetails = (id) => {
    setDetails((prev) => prev.filter((item) => item.id !== id))
    const data = details.filter((item) => item.id !== id);

    localStorage.setItem("details", JSON.stringify(data))
  }


  useEffect(() => {
    if (details.length > 0) localStorage.setItem("details", JSON.stringify(details));

  }, [details])
  // To do .....
  useEffect(() => {

    if (localStorage.getItem("details")) setDetails(JSON.parse(localStorage.getItem("details")))

  }, [])

  const toggleHandler = () => {
    setNavToggler(prev => !prev);

  }


  return (
    <ContextProvider value={{ details, addDetails,deleteDetails }}>

      <header className="z-50 sticky top-0 bg-white/10 backdrop-blur-lg shadow-sm shadow-blue-300 w-full flex justify-between items-center ">
        <nav className="ml-3">
          <NavLink to="/">
            <img src="/assets/logo.png" alt="logo" className=" sm:h-9 sm:w-40 md:h-10 md:w-44" />
          </NavLink>
        </nav>
        {path.length > 0 ? <div className="mr-5 border rounded-lg cursor-pointer sm:block md:hidden" onClick={toggleHandler}>
          <GiHamburgerMenu />
        </div> : ""}
      </header>
      <main>
        {navToggler ?
          (<motion.div initial={{ x: 100 }} animate={{ x: 10 }} className="border h-screen right-0 top-0 backdrop-blur-3xl z-50 fixed w-full">
            <RxCross2 className="text-4xl ml-4 mt-5 cursor-pointer" onClick={toggleHandler} />
            <aside className="ml-3 mt-5 py-3 top-0 h-screen flex flex-col gap-3 w-11/12" >
              <NavLink to="/person" className={`rounded-lg flex justify-center transition-all ease-out border ${path === "person" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"} p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state} onClick={toggleHandler}>Personal Info</NavLink>
              <NavLink to="/experience" className={`rounded-lg flex justify-center transition-all ease-out border ${path === "experience" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"}   p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state} onClick={toggleHandler}>Work Experience</NavLink>
              <NavLink to="/education" className={`rounded-lg flex justify-center transition-all ease-out border ${path === "education" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"}   p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state} onClick={toggleHandler}>Education</NavLink>
              <NavLink to="/projects" className={`rounded-lg flex justify-center transition-all ease-out border ${path === "projects" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"}   p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state} onClick={toggleHandler}>Projects</NavLink>
              <NavLink to="/lang" className={`rounded-lg flex justify-center transition-all ease-out border ${path === "lang" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"}   p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state} onClick={toggleHandler}>Language</NavLink>
              <NavLink to="/skills" className={`rounded-lg flex justify-center transition-all ease-out border ${path === "skills" ? "bg-gradient-to-tl from-blue-400 to-blue-600 text-white" : "border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400"}   p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white`} state={location.state} onClick={toggleHandler}>Key Skills</NavLink>
            </aside>
          </motion.div>)
          : ""}
        <Routes>
          <Route path="/" element={<Home details={details} />} />
          <Route path="/person" element={<PersonalInfo item={details} />} />
          <Route path="/experience" element={<WorkExperience item={details} />} />
          <Route path="/education" element={<Education item={details} />} />
          <Route path="/projects" element={<ProjectsSummary item={details} />} />
          <Route path="/lang" element={<Lang item={details} />} />
          <Route path="/skills" element={<Skills item={details} />} />
          <Route path="/templates" element={<MainTemplates />} />
          <Route path="/templates/1" element={<Template1 />} />
          <Route path="/templates/1/show" element={<ImageLoader />} />
        </Routes>
      </main>
    </ContextProvider>
  )
}

export default App

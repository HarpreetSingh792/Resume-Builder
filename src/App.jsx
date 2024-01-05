import React, { useEffect, useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
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

function App() {
  const [details, setDetails] = useState([]);

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

  const updateDetails = (id, updateItem) => {
    setDetails((prev) => prev.map((item) => item.id === id ? updateItem : item))
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
  return (
    <ContextProvider value={{ details, addDetails, updateDetails, deleteDetails }}>

      <header className="z-50 sticky top-0 bg-white/10 backdrop-blur-lg shadow-sm shadow-blue-300 w-full flex justify-center items-center ">
        <nav className="w-11/12">
          <NavLink to="/">
            <img src="/assets/logo.png" alt="logo" className=" sm:h-9 sm:w-40 md:h-10 md:w-44"/>
          </NavLink>
        </nav>
      </header>
      <main>
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

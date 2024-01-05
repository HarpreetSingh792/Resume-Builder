import React, { useState } from 'react'
import MainForm from '../MainForm'
import { useLocation, useNavigate } from 'react-router-dom';
import { useProfile } from '../../context';
import ProjectsSummaryTemplate from './ProjectsSummaryTemplate';

const ProjectsSummary = ({ item }) => {
    const { addDetails } = useProfile();
    const location = useLocation();
    const navigate = useNavigate();
    const [projectsForm, setProjectsForm] = useState(item?.projects?.length > 0 ? item?.projects : (location.state?.projects?.length > 0 ? location.state?.projects : [
        {
            "id": Date.now(),
            "title": "",
            "role": "",
            "des": [],
            "startYear": "",
            "endYear": ""
        }
    ]));
    const [isSave, setIsSave] = useState((location.state?.projects || item.projects) ? true : false);

    const delForm = (e, id) => {
        e.preventDefault();
        if (projectsForm.length > 1) setProjectsForm((prev) => prev.filter((items) => items.id !== id))
        setIsSave(false)

    }

    const submitEduDetailsHandler = (e) => {
        e.preventDefault();
        const data = {
            ...location.state,
            "projects": projectsForm
        }
        location.state?.id ? addDetails(data, location.state.id) : addDetails(data)
        navigate("/projects", { state: location.state?.length > 0 ? location.state : data });
        setIsSave(true);
    }


    return (
        <MainForm>
            <form className='m-auto w-11/12' onSubmit={submitEduDetailsHandler}>
                <h2 className="text-4xl font-extrabold font-mono text-blue-700 text-center mt-7 mb-7" >Projects Summary</h2>
                <hr className=" mt-5 ml-5 text-blue-700 w-11/12 h-8" />
                {
                    projectsForm.map((item, index) => <ProjectsSummaryTemplate item={item} index={index} delForm={delForm} setProjectsForm={setProjectsForm} projectsForm={projectsForm} key={item.id} />)
                }

                <div className='w-full flex sm:justify-center sm:ml-2 md:ml-0 md:justify-end mb-5'>
                    <button onClick={(e) => { e.preventDefault(); navigate("/education", { state: location?.state }) }} className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white" >Previous</button>
                    <button className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Save</button>
                    <button disabled={!isSave} onClick={(e) => { e.preventDefault(); navigate("/lang", { state: location?.state }) }} className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">Next</button>
                </div>

            </form>
        </MainForm>
    )
}

export default ProjectsSummary;
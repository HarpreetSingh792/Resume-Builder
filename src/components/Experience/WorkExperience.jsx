import React, {useState } from 'react'
import MainForm from '../MainForm'
import ExpInp from './ExpInp';
import { useLocation, useNavigate } from 'react-router-dom';
import { useProfile } from '../../context';

const WorkExperience = ({ item }) => {
    const { addDetails } = useProfile();
    const location = useLocation();
    const navigate = useNavigate();
    const [addExpForm, setAddExpForm] = useState(item?.experience?.length > 0 ? item?.experience : (location.state?.experience?.length > 0 ? location.state?.experience : [
        {
            "id": Date.now(),
            "job": "",
            "organization": "",
            "startYear": "",
            "endYear": "",
            "desc": ""
        }
    ]));
    const [isSave, setIsSave] = useState((location.state?.experience || item.experience) ? true : false);

    const delForm = (e, id) => {
        e.preventDefault();
        if (addExpForm.length > 1) setAddExpForm((prev) => prev.filter((items) => items.id !== id))
        setIsSave(false)
    }

    const submitExperienceDetailsHandler = (e) => {
        e.preventDefault();
        const data = {
            ...location.state,
            "experience": addExpForm
        }
        
        location.state?.id ? addDetails(data, location.state.id) : addDetails(data);
        navigate("/experience",{state:location.state?.length>0?location.state:data});
        setIsSave(true);
    }

    return (
        <MainForm>
            <form onSubmit={submitExperienceDetailsHandler} className='m-auto w-11/12'>
                <h2 className="text-4xl font-extrabold font-mono text-blue-700 text-center mt-7 mb-7" >Work Experience</h2>
                {
                    addExpForm.map((item, index) => <ExpInp item={item} index={index} delForm={delForm} setAddExpForm={setAddExpForm} addExpForm={addExpForm} key={item.id} />)
                }
                <hr className="ml-5 w-11/12 h-8" />
                <div className='w-full flex sm:justify-center sm:ml-2 md:ml-0 md:justify-end mb-5'>

                    <button onClick={(e) => { e.preventDefault(); navigate("/person", { state: location?.state }) }} className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white" >Previous</button>

                    <button className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Save</button>

                    <button disabled={!isSave} onClick={(e) => { e.preventDefault(); navigate("/education", { state: location?.state }) }} className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">Next</button>
                </div>
            </form>
        </MainForm>
    )
}

export default WorkExperience
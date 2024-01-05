import React, { useState } from 'react'
import MainForm from '../MainForm'
import { useLocation, useNavigate } from 'react-router-dom';
import SkillsFormTemp from './SkillsFormTemp';
import { useProfile } from '../../context';



const Skills = ({ item }) => {
    const { addDetails } = useProfile();
    const location = useLocation();
    const navigate = useNavigate();
    const [addSkillsForm, setAddSkillsForm] = useState(item?.skills?.length > 0 ? item?.skills : (location.state?.skills?.length > 0 ? location.state?.skills : [
        {
            "id":Date.now(),
            "skillName": "",
            "level": 0
        }
    ]));


    const delForm = (e, id) => {
        e.preventDefault();
        if (eduCountForm.length > 1) setEduCountForm((prev) => prev.filter((items) => items.id !== id))
    }

    const submitSkillsDetailsHandler = (e) => {
        e.preventDefault();
        const data = {
            ...location.state,
            "skills": addSkillsForm
        }
        location.state?.id ? addDetails(data, location.state.id) : addDetails(data)
        navigate("/templates", { state: location.state?.length > 0 ? location.state : data });
    }
    return (
        <MainForm>
            <form className='m-auto w-11/12' onSubmit={submitSkillsDetailsHandler}>

                <h2 className="text-4xl font-extrabold font-mono text-blue-700 text-center mt-7 mb-7" >Key Skills</h2>
                <hr className=" mt-5 ml-5 text-blue-700 w-11/12 h-8" />

                {
                    addSkillsForm.map((item,index) => <SkillsFormTemp item={item} index={index} delForm={delForm} setAddSkillsForm={setAddSkillsForm} addSkillsForm={addSkillsForm} key={item.id} />)
                }

                <div className='w-full flex sm:justify-center sm:ml-2 md:ml-0 md:justify-end mb-5'>

                    <button onClick={(e) => { e.preventDefault(); navigate("/lang", { state: location?.state }) }} className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white" >Previous</button>

                    <button className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">Preview</button>
                </div>

            </form>
        </MainForm>
    )
}

export default Skills
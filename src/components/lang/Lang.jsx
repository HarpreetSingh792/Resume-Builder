import React, { useState } from 'react'
import MainForm from '../MainForm'
import { useLocation, useNavigate } from 'react-router-dom';
import LangTemplate from './LangTemplate';
import { useProfile } from '../../context';



const Lang = ({ item }) => {
    const { addDetails } = useProfile();
    const location = useLocation();
    const navigate = useNavigate();
    const [langData, setLangData] = useState(item?.lang?.length > 0 ? item?.lang : (location.state?.lang?.length > 0 ? location.state?.lang : [
        {
            "id": Date.now(),
            "langName": "",
        }
    ]));


    const delForm = (e, id) => {
        e.preventDefault();
        if (langData.length > 1) setLangData((prev) => prev.filter((items) => items.id !== id))
    }

    const submitSkillsDetailsHandler = (e) => {
        e.preventDefault();
        const data = {
            ...location.state,
            "lang": langData
        }
        location.state?.id ? addDetails(data, location.state.id) : addDetails(data)
        navigate("/skills", { state: location.state?.length > 0 ? location.state : data });
    }
    return (
        <MainForm>
            <form className='m-auto w-11/12' onSubmit={submitSkillsDetailsHandler}>

                <h2 className="text-4xl font-extrabold font-mono text-blue-700 text-center mt-7 mb-7" >Languages</h2>
                <hr className=" mt-5 ml-5 text-blue-700 w-11/12 h-8" />

                {
                    langData.map((item, index) => <LangTemplate item={item} index={index} delForm={delForm} setLangData={setLangData} langData={langData} key={item.id} />)
                }

                <div className='w-full flex justify-end'>

                    <button onClick={(e) => { e.preventDefault(); navigate("/projects", { state: location?.state }) }} className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white" >Previous</button>

                    <button className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">Next</button>
                </div>
            </form>
        </MainForm>
    )
}

export default Lang
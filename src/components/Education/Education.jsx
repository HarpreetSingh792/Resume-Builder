import React, { useState } from 'react'
import MainForm from '../MainForm'
import { useLocation, useNavigate } from 'react-router-dom';
import EdFormTemplate from './EdFormTemplate';
import { useProfile } from '../../context';

const Education = ({ item }) => {
    const { addDetails } = useProfile();
    const location = useLocation();
    const navigate = useNavigate();
    const [addEduForm, setAddEduForm] = useState(item?.edu?.length > 0 ? item?.edu : (location.state?.edu?.length > 0 ? location.state?.edu : [
        {
            "id": Date.now(),
            "type": "",
            "university": "",
            "degreeType": "",
            "startYear": "",
            "endYear": ""
        }
    ]));
    const [isSave, setIsSave] = useState((location.state?.edu || item.edu) ? true : false);

    const delForm = (e, id) => {
        e.preventDefault();
        if (addEduForm.length > 1) setAddEduForm((prev) => prev.filter((items) => items.id !== id))
        setIsSave(false)

    }

    const submitEduDetailsHandler = (e) => {
        e.preventDefault();
        const data = {
            ...location.state,
            "edu": addEduForm
        }
        location.state?.id ? addDetails(data, location.state.id) : addDetails(data)
        navigate("/education", { state: location.state?.length > 0 ? location.state : data });
        setIsSave(true);
    }


    return (
        <MainForm>
            <form className='m-auto w-11/12' onSubmit={submitEduDetailsHandler}>
                <h2 className="text-4xl font-extrabold font-mono text-blue-700 text-center mt-7 mb-7" >Education Details</h2>
                <hr className=" mt-5 ml-5 text-blue-700 w-11/12 h-8" />
                {
                    addEduForm.map((item, index) => <EdFormTemplate item={item} index={index} delForm={delForm} setAddEduForm={setAddEduForm} addEduForm={addEduForm} key={item.id} />)
                }

                <div className='mt-12 w-full flex sm:justify-center sm:ml-2 md:ml-0 md:justify-end mb-5'>
                    <button onClick={(e) => { e.preventDefault(); navigate("/experience", { state: location?.state }) }} className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white" >Previous</button>
                    <button className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Save</button>
                    <button disabled={!isSave} onClick={(e) => { e.preventDefault(); navigate("/projects", { state: location?.state }) }} className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">Next</button>
                </div>

            </form>
        </MainForm>
    )
}

export default Education
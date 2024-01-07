import React, { useState } from 'react'

const ExpInp = ({ item, index, delForm, setAddExpForm, addExpForm }) => {

    const [jobTitle, setJobTitle] = useState(item?.job || "");
    const [orgName, setOrgName] = useState(item?.organization || "");
    const [startYear, setStartYear] = useState(item?.startYear || "");
    const [endYear, setEndYear] = useState(item?.endYear || "");
    const [jobDesc, setJobDesc] = useState(item?.desc || "");

    const addForm = (e) => {
        e.preventDefault();
        setAddExpForm((prev) => [...prev, {
            "id": Date.now(),
            "job": "",
            "organization": "",
            "startYear": "",
            "endYear": "",
            "desc": ""
        }]);
    }


    const changeHandler = (e, stateHandler, i) => {
        const data = [...addExpForm];
        data[i][e.target.name] = e.target.value
        stateHandler(e.target.value);
    }



    return (
        <div className='sm:ml-0 md:ml-5 mb-5'>

            <h2 className=' text-gray-700 font-semibold'>Experience {index + 1}</h2>
            <hr className="w-11/12 h-8" />
            <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between sm:mb-0 md:mb-5">
                <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                    <label className=" text-lg font-semibold w-full">Job Title</label>
                    <input type="text" value={jobTitle} name='job' onChange={(e) => { changeHandler(e, setJobTitle, index) }} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: Senior Developer' />
                </div>
                <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5">
                    <label className=" text-lg font-semibold w-full">Organization Name</label>
                    <input type="text" value={orgName} name='organization' onChange={(e) => { changeHandler(e, setOrgName, index) }} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 md:mb-0 sm:mb-5 placeholder:text-gray-500/60"  placeholder='Eg: Microsoft' />
                </div>
            </div>
            <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between sm:mb-0 md:mb-5">
                <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                    <label className=" text-lg font-semibold w-full">Start Year</label>
                    <input type="text" value={startYear} name='startYear' onChange={(e) => { changeHandler(e, setStartYear, index) }} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: 2024' />
                </div>
                <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5 md:mb-0 sm:mb-5">
                    <label className=" text-lg font-semibold w-full">End Year</label>
                    <input type="text" value={endYear} name='endYear' onChange={(e) => { changeHandler(e, setEndYear, index) }} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: 2030' />
                </div>
            </div>
            <div className="w-full flex  items-center justify-between mb-5">
                <div className="w-full flex flex-col  justify-between">
                    <label className="text-xl font-semibold mr-2 mb-0.5">Job Description</label>
                    <textarea name='desc' className="sm:w-full md:w-1/2 p-2 sm:h-36 md:h-20 rounded-md border-2 border-blue-400 outline-none placeholder:text-gray-500/60" placeholder='Eg: Enter job description here...' value={jobDesc} onChange={(e) => { changeHandler(e, setJobDesc, index) }}></textarea>
                </div>
            </div>
            <div className='mt-4 flex sm:justify-between md:justify-start items-center'>
                <button onClick={(e) => { addForm(e, jobTitle, orgName, startYear, endYear, jobDesc) }} className="mr-7 sm:w-1/2 md:w-1/5 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Add more</button>
                <button onClick={(e) => { delForm(e, item?.id) }} className="mr-7 sm:w-1/2 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Remove</button>
            </div>
        </div>
    )
}

export default ExpInp;
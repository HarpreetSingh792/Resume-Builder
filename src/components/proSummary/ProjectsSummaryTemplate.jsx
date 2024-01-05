import React, { useState } from 'react'

const ProjectsSummaryTemplate = ({ item, index, delForm, setProjectsForm, projectsForm }) => {
    const [title, setTitle] = useState(item?.title || "");
    const [role, setRole] = useState(item?.role || "");
    const [point1, setPoint1] = useState(item?.des[0] || "");
    const [point2, setPoint2] = useState(item?.des[1] || "");
    const [point3, setPoint3] = useState(item?.des[2] || "");
    const [startYear, setStartYear] = useState(item?.startYear || "");
    const [endYear, setEndYear] = useState(item?.endYear || "");


    const addForm = (e) => {
        e.preventDefault();
        const data = {
            "id": Date.now(),
            "title": "",
            "role": "",
            "des": [],
            "startYear": "",
            "endYear": ""
        }
        setProjectsForm((prev) => [...prev, data]);
    }

    const changeHandler = (e, stateHandler, index, subIndex) => {
        const data = [...projectsForm];
        const { name, value } = e.target;
        if (name === "des") {
            data[index][name][subIndex] = value;
        }
        else {

            data[index][name] = value;
        }
        stateHandler(e.target.value);
    }

    return (
        <div className='sm:ml-0 md:ml-5 mb-10'>

            <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between sm:mb-0 md:mb-5">
                <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                    <label className=" text-lg font-semibold w-full">Title</label>
                    <input type="text" name='title' value={title} onChange={(e) => { changeHandler(e, setTitle, index) }} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9" />
                </div>
                <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5 md:mb-0 sm:mb-5">
                    <label className=" text-lg font-semibold w-full">Role</label>
                    <input type="text" name='role' value={role} onChange={(e) => { changeHandler(e, setRole, index) }} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9" />
                </div>
            </div>
            <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between sm:mb-0 md:mb-5">
                <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                    <label className=" text-lg font-semibold w-full">Start Year</label>
                    <input type="text" name='startYear' value={startYear} onChange={(e) => { changeHandler(e, setStartYear, index) }} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9" />
                </div>
                <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5 md:mb-0 sm:mb-5">
                    <label className=" text-lg font-semibold w-full">End Year</label>
                    <input type="text" name='endYear' value={endYear} onChange={(e) => { changeHandler(e, setEndYear, index) }} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9" />
                </div>
            </div>
            <div className='mt-16'>
                <h2 className='text-xl text-gray-500 font-bold'>Key Points</h2>
                <hr className=" ml-5 text-blue-700 w-11/12 h-8" />
                <div className="w-full flex  items-center justify-between mb-5">
                    <div className="w-full flex flex-col  justify-between">
                        <label className="text-gray-500 text-lg font-semibold w-full">Key Point 1</label>
                        <textarea maxLength={500} type="text" className="w-full p-2 sm:h-40 md:h-20 rounded-md border-2 border-blue-400 outline-none" name='des' value={point1} onChange={(e) => { changeHandler(e, setPoint1, index, 0) }} />
                    </div>
                </div>
                <div className="w-full flex  items-center justify-between mb-5">
                    <div className="w-full flex flex-col  justify-between">
                        <label className="text-gray-500 text-lg font-semibold w-full">Key Point 2</label>
                        <textarea maxLength={500} type="text" className="w-full p-2 sm:h-40 md:h-20 rounded-md border-2 border-blue-400 outline-none" name='des' value={point2} onChange={(e) => { changeHandler(e, setPoint2, index, 1) }} />
                    </div>
                </div>
                <div className="w-full flex  items-center justify-between mb-5">
                    <div className="w-full flex flex-col  justify-between">
                        <label className="text-gray-500 text-lg font-semibold w-full">Key Point 3</label>
                        <textarea maxLength={500} type="text" className="w-full p-2 sm:h-40 md:h-20 rounded-md border-2 border-blue-400 outline-none" name='des' value={point3} onChange={(e) => { changeHandler(e, setPoint3, index, 2) }} />
                    </div>
                </div>
            </div>


            <div className='mt-4 flex sm:justify-between md:justify-start items-center'>
                <button onClick={(e) => { addForm(e) }} className="mr-7 sm:w-1/2 md:w-1/5 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Add more</button>
                <button onClick={(e) => { delForm(e, item?.id) }} className="mr-7 sm:w-1/2 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Remove</button>
            </div>
        </div>
    )
}

export default ProjectsSummaryTemplate
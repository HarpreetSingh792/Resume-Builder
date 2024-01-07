import React, { useState } from 'react'

const SkillsFormTemp = ({ item, index, delForm, setAddSkillsForm, addSkillsForm }) => {
    const [skillName, setSkillName] = useState(item?.skillName || "");
    const [level, setLevel] = useState(item?.level || "");
    const [checked, setChecked] = useState(item?.level || "");

    const addForm = (e) => {
        e.preventDefault();
        const data = {
            "id": Date.now(),
            "skillName": "",
            "level": "",
        }
        setAddSkillsForm((prev) => [...prev, data]);
    }

    const changeHandler = (e, stateHandler, i) => {
        stateHandler(e.target.value);
        const { name, value } = e.target;
        const data = [...addSkillsForm];
        data[i][name] = value;
        setAddSkillsForm(data);

    }
    const checkHandler = (e) => {
        setChecked(e.target.value)
    }
    return (
        <div className='sm:ml-0 md:ml-5 mb-10'>

            <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between sm:mb-0 md:mb-5 ">
                <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                    <label className=" text-lg font-semibold w-full"></label>
                    <input type="text" name='skillName' value={skillName} onChange={(e) => { changeHandler(e, setSkillName, index) }} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: React' />
                </div>
                <div className="w-full flex flex-col  justify-center mr-5"></div>
            </div>


            <div className='w-full my-7 flex items-center justify-evenly sm:gap-1 md:gap-0 p-4'>
                <h2 className='text-gray-600 font-semibold md:ml-0 sm:-ml-2'>Level</h2>
                <div className='flex flex-col justify-center items-center'>
                    <input className='sm:w-5 sm:h-5 md:h-7 md:w-7 cursor-pointer accent-blue-700 outline-none border rounded-xl' type="checkbox" name='level' value="25" onChange={(e) => { changeHandler(e, setLevel, index) }} onClick={checkHandler} checked={checked === "25"}/>
                    <label className='text-gray-600 sm:text-xs md:text-base'>Average</label>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <input className='sm:w-5 sm:h-5 md:h-7 md:w-7 cursor-pointer accent-blue-700 outline-none border rounded-xl' type="checkbox" name='level' value="50" onChange={(e) => { changeHandler(e, setLevel, index) }} onClick={checkHandler} checked={checked === "50"} />
                    <label className='text-gray-600 sm:text-xs md:text-base'>Excellent</label>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <input className='sm:w-5 sm:h-5 md:h-7 md:w-7 cursor-pointer accent-blue-700 outline-none border rounded-xl' type="checkbox" name='level' value="75" onChange={(e) => { changeHandler(e, setLevel, index) }} onClick={checkHandler} checked={checked === "75"} />
                    <label className='text-gray-600 sm:text-xs md:text-base'>Advanced</label>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <input className='sm:w-5 sm:h-5 md:h-7 md:w-7 cursor-pointer accent-blue-700 outline-none border rounded-xl' type="checkbox" name='level' value="100" onChange={(e) => { changeHandler(e, setLevel, index) }} onClick={checkHandler} checked={checked === "100"} />
                    <label className='text-gray-600 sm:text-xs md:text-base'>Proficient</label>
                </div>
            </div>
            <div className='mt-4 flex justify-start items-center'>

                <button onClick={addForm} className="mr-7 sm:w-1/2 md:w-1/5 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Add more</button>
                <button onClick={(e) => { delForm(e, item?.id) }} className="mr-7 sm:w-1/2 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Remove</button>
            </div>
        </div>
    )
}

export default SkillsFormTemp
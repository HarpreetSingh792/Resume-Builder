import React, { useState } from 'react'

const EdFormTemplate = ({item,index,delForm,setAddEduForm,addEduForm}) => {
    const [eduType,setEduType] = useState(item?.type||"");
    const [uniName,setUniName] = useState(item?.university||"");
    const [degreeType,setDegreeType] = useState(item?.degreeType||"");
    const [startYear,setStartYear] = useState(item?.startYear||"");
    const [endYear,setEndYear] = useState(item?.endYear||"");


    const addForm = (e) => {
        e.preventDefault();
        const data = {
            "id": Date.now(),
            "type":"",
            "university":"",
            "degreeType":"",
            "startYear":"",
            "endYear":""
        }
        setAddEduForm((prev) => [...prev, data]);
    }

    const changeHandler=(e,stateHandler,i)=>{
        const data = [...addEduForm];
        data[i][e.target.name] = e.target.value;
        stateHandler(e.target.value);
    }

    return (
        <div className='sm:ml-0 md:ml-5 mb-5'>

            <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between sm:mb-0 md:mb-5">
                <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                    <label className=" text-lg font-semibold w-full">Type</label>
                    <input type="text" name='type' value={eduType} onChange={(e)=>{changeHandler(e,setEduType,index)}} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9" />
                </div>
                <div className="w-full flex flex-col  justify-center mr-5">
                </div>
            </div>
            <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between sm:mb-0 md:mb-5">
                <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                    <label className=" text-lg font-semibold w-full">University</label>
                    <input type="text" name='university' value={uniName} onChange={(e)=>{changeHandler(e,setUniName,index)}} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9" />
                </div>
                <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5 md:mb-0 sm:mb-5">
                    <label className=" text-lg font-semibold w-full">Degree</label>
                    <input type="text" name='degreeType' value={degreeType} onChange={(e)=>{changeHandler(e,setDegreeType,index)}} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9" />
                </div>
            </div>
            <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between sm:mb-0 md:mb-5">
                <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                    <label className=" text-lg font-semibold w-full">Start Year</label>
                    <input type="text" name='startYear' value={startYear} onChange={(e)=>{changeHandler(e,setStartYear,index)}} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9" />
                </div>
                <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5 md:mb-0 sm:mb-5">
                    <label className=" text-lg font-semibold w-full">End Year</label>
                    <input type="text" name='endYear' value={endYear} onChange={(e)=>{changeHandler(e,setEndYear,index)}} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9" />
                </div>
            </div>
            <div className='flex sm:justify-between md:justify-start items-center'>
                <button onClick={(e)=>{addForm(e)}} className="mr-7 sm:w-1/2 md:w-1/5 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Add more</button>
                <button onClick={(e)=>{delForm(e,item?.id)}} className="mr-7 sm:w-1/2 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Remove</button>
            </div>
        </div>
    )
}

export default EdFormTemplate
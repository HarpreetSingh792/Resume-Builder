import React, { useState } from 'react'

const LangTemplate = ({ item, index, delForm, setLangData, langData }) => {
    const [langName, setLangName] = useState(item?.langName || "");

    const addForm = (e) => {
        e.preventDefault();
        const data = {
            "id": Date.now(),
            "langName": "",
        }
        setLangData((prev) => [...prev, data]);
    }

    const changeHandler = (e, stateHandler, i) => {
        stateHandler(e.target.value);
        const { name, value } = e.target;
        const data = [...langData];
        data[i][name] = value;
        setLangData(data);

    }
    return (
        <div className='sm:ml-0 md:ml-5 mb-10'>

            <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between sm:mb-0 md:mb-5">
                <div className="w-full flex flex-col  justify-center">
                    <label className=" text-lg font-semibold w-full"></label>
                    <input type="text" name='langName' value={langName} onChange={(e) => { changeHandler(e, setLangName, index) }} className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: English' />
                </div>
                <div className="w-full flex flex-col  justify-center"></div>
            </div>
            <div className='mt-4 flex sm:justify-between md:justify-start items-center'>
                <button onClick={addForm} className="mr-7 sm:w-1/2 md:w-1/5 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Add more</button>
                <button onClick={(e) => { delForm(e, item?.id) }} className="mr-7 sm:w-1/2 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Remove</button>
            </div>
        </div>
    )
}

export default LangTemplate;
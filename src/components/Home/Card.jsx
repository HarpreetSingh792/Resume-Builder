import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useProfile } from '../../context';
import { useNavigate, Navigate } from 'react-router-dom';

const Card = ({ item, index }) => {

    const navigate = useNavigate();
    const { deleteDetails } = useProfile();
    const [iconClick, setIconClick] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const popUp = () => {
        setIconClick((prev) => !prev);
    }
    const delHandler = () => {
        setIconClick(false);
        deleteDetails(item.id)
    }
    const editHandler = () => {
        setIsEditing((prev) => !prev);
    }
    return (
        <>
            {
                index >= 0 ? (<div className='sm:w-11/12 md:w-1/2'>
                    {
                        !isEditing ?
                            (<div className="mt-7 m-auto flex-col justify-items-center items-center justify-center">

                                <div className="px-4 border border-slate-300 w-11/12 m-auto h-56 rounded-md shadow-md shadow-slate-400 grid place-items-start">
                                    {/* Image Profile section */}
                                    <div className=" relative flex w-full items-start justify-between ">
                                        <p className="bg-blue-700 text-white ml-4 mt-3 rounded-full w-7 h-7 flex items-center justify-center">{index + 1}</p>
                                        <img src={item.profileImage?item.profileImage:"vite.svg"} alt="logo" className="bg-contain mt-3 rounded-full w-20 h-20 border-2" />
                                        <BsThreeDotsVertical className=' mr-3 mt-3 hover:cursor-pointer' onClick={popUp} />
                                        {
                                            iconClick ? <div className="transition-all ease-in w-36 top-9 z-30 bg-white -right-5 h-10 absolute">
                                                <button className="h-full w-full transition-all ease-in cursor-pointer border-2 border-red-500 p-1 pl-3 pr-3 text-red-500 hover:bg-red-500 hover:text-white" onClick={delHandler}>Delete</button>
                                            </div> : ""
                                        }
                                    </div>

                                    {/* Email and Name Section */}
                                    <div className="w-full pl-5 grid place-items-center">
                                        <p className="text-gray-400 text-center">{item.name}</p>
                                        <p className="text-gray-400">{item.email}</p>
                                    </div>

                                    {/* Buttons Section.. */}
                                    <div className=" sm:w-full h-16 md:w-1/2 flex justify-between items-center m-auto">
                                        <button className=" min-w-24  h-8 w-11/12 transition-all ease-in cursor-pointer text-blue-500 border border-blue-400 p-1 pl-3 pr-3 rounded-2xl hover:bg-blue-400 hover:text-white" onClick={editHandler}>Edit</button>
                                        <button className=" min-w-24 ml-4 h-8 w-11/12 transition-all ease-in cursor-pointer text-blue-500 border border-blue-400 p-1 pl-3 pr-3 rounded-2xl hover:bg-blue-400 hover:text-white" onClick={() => { navigate("/templates/1", { state:  item }) }}>View CV</button>
                                    </div>
                                </div>
                            </div>) :
                            (<>
                                <Navigate to="person" state={item}></Navigate>
                            </>)
                    }

                </div>
                ) : ""

            }
        </>
    )
}

export default Card
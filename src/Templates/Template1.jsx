import React, { useEffect, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { useLocation, useNavigate } from 'react-router-dom'
import { FaPhoneAlt, FaHome, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Template1 = () => {
    const location = useLocation();
    const { name, role, email, address1, socials, city, pincode, phone, edu, experience, lang, objective, projects, skills, state, profileImage } = location.state;
    const navigate = useNavigate();
    const [imgUrl, seImgUrl] = useState("");
    const [isReady, setIsReady] = useState(false);
    const ref = useRef(null);
    const canvaEle = ref.current;

    if (canvaEle) {
        canvaEle.style.width = "100%";
        canvaEle.style.height = "100%"
        htmlToImage.toJpeg(canvaEle, { cacheBust: true, quality: "0.9" }).then((dataUrl) => {
            seImgUrl(dataUrl)
        }).catch((err) => console.error(err));
    }
    useEffect(() => {
        setIsReady(true)
    }, [imgUrl]);

    useEffect(() => {
        if (isReady) {
            const data = { ...location.state, "cv": imgUrl }
            navigate("/templates/1/show", { state: data })
        }
    }, [imgUrl])

    return (
        <>
            <div className="flex flex-col items-center m-auto justify-center min-w-96 w-80rem p-10 bg-slate-100">
                <div ref={ref} className=" font-arial bg-white  box-border p-5 m-auto ">

                    {/* Profile Section */}
                    <div className='flex items-center justify-start border-2'>
                        {/* Profile Pic */}
                        {profileImage?.length > 0 ? <div className='flex justify-center items-center'>
                            <img src={profileImage} alt='profile-pic' className=' w-64 h-56 border-2' />
                        </div> : ""}
                        {/* Profile Details and set margin left 4 to 0 if no pic is there */}
                        <section className={`${profileImage?.length > 0 ? "ml-4" : "ml-0"} w-full h-full flex flex-col justify-start  p-2`}>
                            {/* Heading */}
                            <h2 className='text-left font-arial text-black text-xl font-bold'>PROFILE</h2>
                            <hr className='mb-2 bg-gray-500/30 w-full h-0.5 ' />

                            {/* About Section */}
                            {objective?.length > 0 ? <p className=' text-lg text-justify mb-3 text-gray-900'>{objective}</p> : ""}

                            {/* Contacts and Address */}
                            <div className='flex flex-wrap gap-2 w-full h-full text-lg'>
                                {address1?.length > 0 ? <div className='h-full flex items-center justify-start w-full'>
                                    <div>
                                        <FaHome className='p-1 w-7 h-7 bg-zinc-700 text-white' />
                                    </div>
                                    <div className='px-3 ml-1 bg-zinc-700 text-white'>
                                        <p>{`${address1}  ${city?.length > 0 ? "," : ""} ${city} ${state?.length > 0 ? "," : ""}  ${state} ${pincode?.length > 0 ? "," : ""} ${pincode}`}</p>
                                    </div>
                                </div> : ""}
                                {socials?.length > 0 ? <div className='h-full flex items-center justify-start'>
                                    <div>
                                        <FaLinkedin className='p-1 w-7 h-7 bg-zinc-700 text-white' />
                                    </div>
                                    <div className='px-3 ml-1 bg-zinc-700 text-white'>
                                        <p>{socials}</p>
                                    </div>
                                </div> : ""}
                                {phone?.length > 0 ? <div className={`${socials?.length > 0 ? "ml-7" : "ml-0"} h-full flex items-center justify-start`}>
                                    <div>
                                        <FaPhoneAlt className='p-1 w-7 h-7 bg-zinc-700 text-white' />
                                    </div>
                                    <div className='px-3 ml-1 bg-zinc-700 text-white'>{phone}</div>
                                </div> : ""}
                                {email?.length > 0 ? <div className={`${phone?.length > 0 ? "ml-7" : "ml-0"} h-full flex items-center justify-start`}>
                                    <div>
                                        <IoMdMail className='p-1 w-7 h-7 bg-zinc-700 text-white' />
                                    </div>
                                    <div className=' px-3 ml-1 bg-zinc-700 text-white'>{email}</div>
                                </div> : ""}
                            </div>
                        </section>
                    </div>

                    {/* Name Banner and Role */}
                    <div className={`py-2 px-12 bg-dark-sea-green text-whiteSmoke1 font-arial h-20 w-full`}>
                        {name?.length > 0 ? <p className='text-4xl font-bold'>{name}</p> : ""}
                        {role?.length > 0 ? <p className='text-xl font-thin leading-3'>{role}</p> : ""}
                    </div>
                    <div className='flex '>
                        {/* Education and Tech Skills  and Languages*/}
                        <div className='py-10 px-5 bg-gray-300/50'>
                            {/* Educations  */}
                            {edu?.length > 0 ? <div className=' w-56'>
                                <h2 className='text-left font-arial text-black text-xl font-bold'>EDUCATION</h2>
                                <hr className='mt-1 bg-gray-500/30 w-full h-1' />
                                {
                                    edu?.map((item) => {
                                        return (
                                            <div className='mb-5 mt-4 flex flex-col justify-center gap-1' key={item.id}>
                                                <p className='font-extrabold text-lg text-gray-800'>{item.type}</p>
                                                <p className='font-bold text-lg text-gray-800'>{item.university}</p>
                                                <p className='font-bold text-lg text-gray-800 '>{item.degreeType}</p>
                                                <p className='font-bold text-lg text-gray-800'>{item.startYear + " - " + item.endYear}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div> : ""
                            }

                            {/* Technical Skills */}
                            {skills?.length > 0 ? <div className='mt-16'>
                                <h2 className='text-left font-arial text-black text-xl font-bold'>TECH. SKILL</h2>
                                <hr className='mt-1 bg-gray-500/30 w-full h-1' />

                                {
                                    skills?.map((item) => {
                                        return (
                                            <div className='mb-5 mt-4 flex flex-col justify-center gap-1' key={item.id}>
                                                <p className='font-extrabold text-lg text-gray-900'>{item.skillName}</p>
                                                <hr className={`mt-1 bg-gray-700 ${item.level === '25' ? 'w-1/4' : item.level === '50' ? 'w-1/2' : item.level === '75' ? 'w-3/4' : 'w-full'} h-1`} />
                                            </div>)
                                    })
                                }
                            </div> : ""}

                            {/* Languages */}
                            {
                                lang?.length > 0 ? <div className='mt-16'>
                                    <h2 className='text-left font-arial text-black text-lg font-bold'>Languages</h2>
                                    <hr className='mt-1 bg-gray-500/30 w-full h-1' />

                                    {
                                        lang.map((item) => {
                                            return (
                                                <div className='mb-5 mt-4 flex flex-col justify-center gap-1' key={item.id}>
                                                    <p className='font-extrabold text-lg text-gray-900'>{item.langName}</p>
                                                </div>)
                                        })
                                    }
                                </div> : ""
                            }
                        </div>

                        {/* Work Experience  and Projects */}
                        <div className="py-10 px-5 bg-white h-full w-3/4">

                            {/* Work Exp. */}

                            {experience?.length > 0 ? <div className='w-full'>
                                <h2 className='text-left font-arial text-black text-xl font-bold'>WORK EXPERIENCE</h2>
                                <hr className='mt-1 bg-gray-500/30 w-full h-1' />
                                {
                                    experience.map((item) => {
                                        return (
                                            <div className='mb-5 mt-4 flex flex-col justify-center gap-1' key={item.id}>
                                                <div className='flex justify-between'>
                                                    <div className='flex flex-col'>
                                                        <p className='font-extrabold text-lg text-gray-900'>{item.job}</p>
                                                        <p className='font-bold text-lg text-gray-800'>{item.organization}</p>
                                                    </div>
                                                    <p className='h-8 px-3 ml-1 text-lg flex justify-center items-center bg-zinc-600 text-white'>{item.startYear + " - " + item.endYear}</p>
                                                </div>
                                                <ul className="mt-4 ml-5">
                                                    <li className='font-bold text-lg text-gray-900 text-justify list-none'>{item.desc}</li>
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div> : ""}

                            {/* Projects */}

                            {
                                projects?.length > 0 ?
                                    <div className='w-full mt-16'>
                                        <h2 className='text-left font-arial text-black text-xl font-bold'>PROJECTS</h2>
                                        <hr className='mt-1 bg-gray-500/30 w-full h-1' />
                                        {
                                            projects?.map((item) => {
                                                return (
                                                    <div className='mb-5 mt-4 flex flex-col justify-center gap-1' key={item.id}>
                                                        <div className='flex justify-between'>
                                                            <div className='flex flex-col'>
                                                                <p className='font-extrabold text-lg text-gray-900'>{item.title}</p>
                                                                <p className='font-bold text-lg text-gray-800'>{item.role}</p>
                                                            </div>
                                                            <p className='h-8 text-lg flex justify-center items-center px-3 ml-1 bg-zinc-600 text-white'>{item.startYear + " - " + item.endYear}</p>
                                                        </div>
                                                        <div className="w-full">
                                                            <ul className="mt-4 ml-5 w-full">
                                                                {
                                                                    item.des.map((item, index) => <li className='font-bold text-lg text-gray-900 text-start list-disc' key={index}>{
                                                                        item
                                                                    }</li>)
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div> : ""
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Template1
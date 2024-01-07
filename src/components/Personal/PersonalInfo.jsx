import React, { useRef, useState } from 'react'
import MainForm from '../MainForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { useProfile } from '../../context'

const PersonalInfo = ({ item }) => {
    const profileImg = useRef();
    const { addDetails } = useProfile();
    const location = useLocation();
    const navigate = useNavigate();
    const [isSave, setIsSave] = useState(location?.state ? true : false);
    const [firstName, setFirstName] = useState(item?.name?.split(" ")[0] || location?.state?.name?.split(" ")[0] || "");
    const [lastName, setLastName] = useState(item?.name?.split(" ")[1] || location?.state?.name?.split(" ")[1] || "");
    const [role, setRole] = useState(item?.role || location?.state?.role || "");
    const [email, setEmail] = useState(item?.email || location?.state?.email || "");
    const [phone, setPhone] = useState(item?.phone || location?.state?.phone || "");
    const [address1, setAddress1] = useState(item?.address1 || location?.state?.address1 || "");
    const [socials, setSocials] = useState(item?.socials || location?.state?.socials || "");
    const [city, setCity] = useState(item?.city || location?.state?.city || "");
    const [state, setState] = useState(item?.state || location?.state?.state || "");
    const [pincode, setPincode] = useState(item?.pincode || location?.state?.pincode || "");
    const [objective, setObjective] = useState(item?.objective || location?.state?.objective || "");
    const [profileImage, setProfileImage] = useState(item?.profileImage || location?.state?.profileImage || "");


    const submitPersonalDetailsHandler = (e) => {
        e.preventDefault();
        const data = {
            ...location.state,
            "id": Date.now(),
            "name": firstName.concat(" " + lastName),
            "role": role,
            "email": email,
            "phone": phone,
            "address1": address1,
            "socials": socials,
            "city": city,
            "state": state,
            "pincode": pincode,
            "objective": objective,
            "profileImage": profileImage
        }
        location.state?.id ? addDetails(data, location.state.id) : addDetails(data);
        navigate("/person", { state: location.state?.length > 0 ? location.state : data });
        setIsSave(true);
    }

    const changeHandler = (e, stateHandler, blob = null) => {
        if (blob) {
            const fr = new FileReader();
            fr.readAsDataURL(e.target.files[0]);
            fr.addEventListener("load", () => {

                const url = fr.result;
                stateHandler(url);
            })
            setIsSave(false)
        }
        else {
            stateHandler(e.target.value);
            setIsSave(false)
        }
    }


    return (
        <MainForm>
            <form className=" flex flex-col sm:gap-5 md:gap-11 items-center justify-center p-3" onSubmit={submitPersonalDetailsHandler}>
                <h2 className="text-4xl font-extrabold font-mono text-blue-700 text-center mt-7 mb-7" >Personal Info</h2>
                <div className='self-start'>
                    <img ref={profileImg} src={profileImage.length > 0 ? profileImage : `vite.svg`} alt="profile-pic" className=' w-32 h-40 border border-black/40 rounded-sm mb-1 flex items-end ' />
                    <input type='file' accept='image/*' onChange={(e) => changeHandler(e, setProfileImage, true)} />
                </div>
                <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between">
                    <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                        <label className="w-full text-lg font-semibold">First Name</label>
                        <input onChange={(e) => changeHandler(e, setFirstName)} value={firstName} type="text" className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: Rigel' />
                    </div>
                    <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5">
                        <label className="w-full text-lg font-semibold">Last Name</label>
                        <input onChange={(e) => changeHandler(e, setLastName)} value={lastName} type="text" className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: M87' />
                    </div>
                </div>
                <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between ">
                    <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5 relative">
                        <label className="w-full text-lg font-semibold">Email</label>
                        <input onChange={(e) => changeHandler(e, setEmail)} value={email} type="email"  className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60  invalid:border-red-700 invalid:text-red-700 [&:invalid+p]:block" placeholder='Eg: rigel87@gmail.com' />
                        <p className='text-red-700 absolute right-0 hidden'>Enter data in correct format</p>
                    </div>
                    <div className="w-full flex flex-col   justify-between sm:mr-0 md:mr-5 relative">
                        <label className="w-full text-lg font-semibold">Phone</label>
                        <input onChange={(e) => changeHandler(e, setPhone)} value={phone} type="tel" pattern="[0-9][0-9]{9}" className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60  invalid:border-red-700 invalid:text-red-700 [&:invalid+p]:block" placeholder='Eg: 1544070902' />
                        <p className='text-red-700 absolute right-0 hidden'>Enter data in correct format</p>
                    </div>
                </div>
                <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between ">
                    <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                        <label className="w-full text-lg font-semibold">Address 1</label>
                        <input onChange={(e) => changeHandler(e, setAddress1)} value={address1} type="text" className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: H:no-98 x-stallic-83 gallactic road' />
                    </div>
                    <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5 relative">
                        <label className="w-full text-lg font-semibold">Linkdin</label>
                        <input onChange={(e) => changeHandler(e, setSocials)} value={socials} type="text" pattern='[a-z]*\.[a-z]{3}/[a-z]{2}/[a-z A-Z 0-9\-]*' className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60 invalid:border-red-700 invalid:text-red-700 [&:invalid+p]:block" placeholder='Eg: linkdin.com/in/rigel0715' />
                        <p className='text-red-700 absolute right-0 hidden'>Enter data in correct format</p>
                    </div>
                </div>
                <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between ">
                    <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                        <label className="w-full text-lg font-semibold">City</label>
                        <input onChange={(e) => changeHandler(e, setCity)} value={city} type="text" className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: Amritsar' />
                    </div>
                    <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5">
                        <label className="w-full text-lg font-semibold">State</label>
                        <input onChange={(e) => changeHandler(e, setState)} value={state} type="text" className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: Punjab' />
                    </div>
                </div>
                <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between ">
                    <div className="w-full flex flex-col md:mb-0 sm:mb-5 justify-between sm:mr-0 md:mr-5">
                        <label className="w-full text-lg font-semibold">Pincode</label>
                        <input onChange={(e) => changeHandler(e, setPincode)} value={pincode} type="text" className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: 143001' />
                    </div>

                    <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5">
                        <label className="w-full text-lg font-semibold">Role</label>
                        <input onChange={(e) => changeHandler(e, setRole)} value={role} type="text" className="rounded-md border-2 border-blue-400 w-full outline-none pl-3 h-9 placeholder:text-gray-500/60" placeholder='Eg: Software Developer' />
                    </div>
                </div>
                <div className="w-full flex md:flex-row sm:flex-col md:gap-0 items-center justify-between ">
                    <div className="w-full flex flex-col justify-between sm:mr-0 md:mr-5">
                        <label className="w-full text-xl font-semibold mr-2">Objective</label>
                        <textarea onChange={(e) => changeHandler(e, setObjective)} value={objective} rows="4" className="w-full p-2 sm:h-36 md:h-20 rounded-md border-2 border-blue-400 outline-none placeholder:text-gray-500/60" placeholder='Eg: Enter the objective here...'></textarea>
                    </div>
                </div>
                <hr className=" text-blue-700 w-11/12 h-8"></hr>
                <div className='w-full sm:ml-5 md:ml-0 flex sm:justify-between md:justify-end'>
                    <button onClick={(e) => { e.preventDefault(); navigate("/person", { state: location?.state }) }} className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Previous</button>
                    <button className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">Save</button>
                    <button disabled={!isSave} onClick={(e) => {
                        e.preventDefault(); navigate("/experience", { state: location?.state });
                    }} className="mr-7 sm:w-1/3 md:w-1/6 cursor-pointer transition-all ease-out border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600  text-blue-400  p-1 pl-3 pr-3 rounded-sm hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">Next</button>
                </div>
            </form>
        </MainForm>
    )
}

export default PersonalInfo
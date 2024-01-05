import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from "./Card"
const Home = ({ details }) => {
  const navigate = useNavigate();
  return (
    <main className="w-full">

      <h2 className="text-blue-500 font-sans font-semibold text-4xl text-center mt-3 ">Choose Profile</h2>
      <div className="w-full flex  flex-wrap justify-center items-center">

        {
          // Profile section....
          details.map((item, index) => {
            return <Card item={item} index={index} key={index} />
          })
        }
      </div>
      <div className="w-full flex justify-center">
        <button onClick={() => { navigate("/person") }} className="transition-all ease-out  mt-16 ml-4 mb-5 h-8 sm:w-3/4 md:w-1/4 border border-r-blue-400 border-t-blue-600 border-b-blue-400 border-l-blue-600 cursor-pointer  text-blue-400  p-1 pl-3 pr-3 rounded-2xl hover:bg-gradient-to-tl from-blue-400 to-blue-600 hover:text-white">+Create New Profile</button>
      </div>
    </main>
  )
}

export default Home
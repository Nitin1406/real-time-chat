import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
const Userinfo = () => {
  return (
    <div className='userInfo gap-10 p-5 flex justify-cenetr items-center'>
        <div className='user flex items-center gap-3 cover'>
            <img src="/assests/avatar.png" alt="" className='w-[50px] h-[50px] rounded-full'/>
            <p className='font-bold text-lg'>Nitin</p>
        </div>
        <div className='icons flex gap-4'>
         <BsThreeDots size={20}/>
         <BsCameraVideoFill size={20}/>
         <FaRegEdit size={20}/>
        </div>
    </div>
  )
}

export default Userinfo
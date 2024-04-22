import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
const ChatList = () => {
    const [addMode, setAddMode]= useState(false);

    const handleAddMode= ()=>{
        setAddMode(!addMode);
    }

  return (
    <div className='chatList justify-between items-center '>

        <div className='flex gap-2 p-4'>
        <div className='search  flex gap-2 p-2 items-center bg-gray-300 h-10 rounded-lg'>
            <IoSearchSharp size={24}/>
            <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-full  border-hidden'/>
            
        </div>
        <div className='bg-gray-300 p-2 rounded-lg'>
            {addMode ? <FaPlus size={24} onClick={handleAddMode}/> : <FaMinus size={24} onClick={handleAddMode}/>}
        </div>
        </div>
        
        <div className='overflow-y-scroll overflow-hidden h-[65vh]'>
        <div className="item flex gap-5 items-center p-5 cursor-pointer border-b-2 border-gray-300">
            <img src="/assests/avatar.png" alt="" width="50px" className='rounded-full'/>
            <div className="texts">
                <span className='text-xl font-bold'>Aman</span>
                <p className='text-xs'>Hello Nitin</p>
            </div>
        </div>

        <div className="item flex gap-5 items-center p-5 cursor-pointer border-b-2 border-gray-300">
            <img src="/assests/avatar.png" alt="" width="50px" className='rounded-full'/>
            <div className="texts">
                <span  className='text-xl font-bold'>Aman</span>
                <p className='text-xs'>Hello Nitin</p>
            </div>
        </div>
        <div className="item flex gap-5 items-center p-5 cursor-pointer border-b-2 border-gray-300">
            <img src="/assests/avatar.png" alt="" width="50px" className='rounded-full'/>
            <div className="texts">
                <span className='text-xl font-bold'>Aman</span>
                <p className='text-xs'>Hello Nitin</p>
            </div>
        </div>
        <div className="item flex gap-5 items-center p-5 cursor-pointer border-b-2 border-gray-300">
            <img src="/assests/avatar.png" alt="" width="50px" className='rounded-full'/>
            <div className="texts">
                <span className='text-xl font-bold'>Aman</span>
                <p className='text-xs'>Hello Nitin</p>
            </div>
        </div>

        <div className="item flex gap-5 items-center p-5 cursor-pointer border-b-2 border-gray-300">
            <img src="/assests/avatar.png" alt="" width="50px" className='rounded-full'/>
            <div className="texts">
                <span className='text-xl font-bold'>Aman</span>
                <p className='text-xs'>Hello Nitin</p>
            </div>
        </div>
        <div className="item flex gap-5 items-center p-5 cursor-pointer border-b-2 border-gray-300">
            <img src="/assests/avatar.png" alt="" width="50px" className='rounded-full'/>
            <div className="texts">
                <span className='text-xl font-bold'>Aman</span>
                <p className='text-xs'>Hello Nitin</p>
            </div>
        </div>
        <div className="item flex gap-5 items-center p-5 cursor-pointer border-b-2 border-gray-300">
            <img src="/assests/avatar.png" alt="" width="50px" className='rounded-full'/>
            <div className="texts">
                <span className='text-xl font-bold'>Aman</span>
                <p className='text-xs'>Hello Nitin</p>
            </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default ChatList
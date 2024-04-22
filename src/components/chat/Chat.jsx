import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { FaCamera, FaMicrophone, FaImage } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [emoji, setEmoji] = useState(false);
  const [text, setText] = useState("");

  const endRef= useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"});
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setEmoji(false);
  };
  return (
    <div className="border-l border-gray-300 border-r h-full py-2 flex flex-col">
      <div className="top flex justify-between items-center border-b p-4">
        <div className="user flex justify-center items-center gap-4">
          <img
            src="/assests/avatar.png"
            alt=""
            width="60px"
            className="rounded-full"
          />
          <div className="texts">
            <span className="font-bold text-xl">Aman</span>
            <p className="text-gray-100 text-xs">
              Lorem ipsum adipisicing elit. Veniam, accusantium.
            </p>
          </div>
        </div>
        <div className="icons flex gap-4">
          <FaPhoneAlt />
          <IoVideocam />
          <FaCircleInfo />
        </div>
      </div>
      <div className="center  p-5 h-full flex flex-col gap-4 overflow-y-scroll overflow-hidden">
        <div className="message align-left flex gap-4">
            <img src="/assests/avatar.png" alt="" width="40px"  className="rounded-full h-fit"/>
            <div className="texts border px-4 py-1 rounded-md max-w-[80%] w-fit">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem dolore, molestias repellendus, necessitatibus numquam ullam rerum saepe, incidunt cupiditate ea exercitationem deserunt ipsa id.</p>
                <span> 1 min ago</span>
            </div>
        </div>
        <div className="message text-right border w-fit border px-4 py-1 rounded-md ml-auto max-w-[80%]">
            
            <div className="texts">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, ipsum?</p>
                <span> 1 min ago</span>
            </div>
        </div>
        <div className="message align-left flex gap-4">
            <img src="/assests/avatar.png" alt="" width="40px"  className="rounded-full h-fit"/>
            <div className="texts border px-4 py-1 rounded-md max-w-[80%] w-fit">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem dolore, molestias repellendus, necessitatibus numquam ullam rerum saepe, incidunt cupiditate ea exercitationem deserunt ipsa id.</p>
                <span> 1 min ago</span>
            </div>
        </div>
        <div className="message text-right border w-fit border px-4 py-1 rounded-md ml-auto max-w-[80%]">
            
            <div className="texts">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, ipsum?</p>
                <span> 1 min ago</span>
            </div>
        </div>
        <div className="message align-left flex gap-4">
            <img src="/assests/avatar.png" alt="" width="40px"  className="rounded-full h-fit"/>
            <div className="texts border px-4 py-1 rounded-md max-w-[80%] w-fit">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quidem dolore, molestias repellendus, necessitatibus numquam ullam rerum saepe, incidunt cupiditate ea exercitationem deserunt ipsa id.</p>
                <span> 1 min ago</span>
            </div>
        </div>
        <div className="message text-right border w-fit  px-4 py-1 rounded-md ml-auto max-w-[80%]">
            
            <div className="texts ">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, ipsum?</p>
                <span> 1 min ago</span>
            </div>
        </div>
        <div ref={endRef}></div>
      </div>
      
      <div className="bottom  flex gap-5 p-5 justify-between items-center border-t border-gray-300">
        <div className="icons flex gap-3">
          <FaImage />
          <FaCamera />
          <FaMicrophone />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          className="w-full h-10 bg-gray-300 px-2 rounded-md focus:outline-none"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji relative">
          <BsEmojiSmileFill onClick={() => setEmoji(!emoji)} />
          <div className="picker absolute bottom-[50px] left-0">
            {emoji && <EmojiPicker onEmojiClick={handleEmoji} />}
          </div>
        </div>
        
        <button className="py-2 px-4 rounded-md bg-blue-500">Send</button>
      </div>
    </div>
  );
};

export default Chat;

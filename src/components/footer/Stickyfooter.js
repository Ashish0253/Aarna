import React, { useState } from "react";
import Popup from "../popup/Popup";

export default function Stickyfooter() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-[#1ebaba] flex flex-col items-center fixed bottom-0 w-[100%] border-transparent">
      <button
        onClick={handleClick}
        className="text-lg rounded border-transparent bg-[#ee5152] border-2 py-1 px-5 m-2 text-white font-semibold hover:shadow-lg transform hover:scale-110 hover:bg-red-600 ease-out duration-500"
      >
        Get a free call
      </button>

      {isOpen && <Popup handleClose={handleClick} open={isOpen} />}
    </div>
  );
}

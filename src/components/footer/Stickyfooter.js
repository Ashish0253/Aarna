import React from "react";

export default function Stickyfooter() {
  function handleClick() {}

  return (
    <div className="bg-[#1ebaba] flex flex-col items-center fixed bottom-0 w-[100%] border-transparent">
      <button
        onClick={handleClick}
        className="text-lg rounded border-transparent bg-[#ee5152] border-2 py-1 px-5 m-2 text-white font-semibold hover:bg-red-600 transition ease-out duration-500"
      >
        Get a free call
      </button>
    </div>
  );
}

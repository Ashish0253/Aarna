import React, { useState } from "react";
import Logo from "../../Assets/ARNA-LOGO.png";
import Popup from "../popup/Popup";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-[white]">
      <div
      // className="bg-[#3464d9]"
      // style={{ backgroundImage: "linear-gradient(to right, white, #1ebaba)" }}
      >
        {/* first row */}
        <div className="flex justify-between">
          <a href="/">
            <img
              src={Logo}
              alt="aarna logo"
              className="w-[220px] mx-[100px] py-6 cursor-pointer"
            />
          </a>
          <button
            onClick={handleClick}
            className="mx-[100px] my-6 px-10 py-0 border-primary text-primary text-lg font-bold rounded-xl border-2  hover:shadow-lg transform hover:text-white hover:scale-110 hover:bg-primary ease-out duration-500"
          >
            GET A FREE CALL
          </button>

          {isOpen && <Popup handleClose={handleClick} open={isOpen} />}
        </div>
      </div>
    </div>
  );
}

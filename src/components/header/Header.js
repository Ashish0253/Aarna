import React from "react";
import Logo from "../../Assets/ARNA-LOGO.png";
import Navbar from "./Navbar";

console.log(Logo);

function Header() {
  return (
    <div className="bg-[#f0f8ff]">
      <div className="bg-[#f0f8ff]">
        {/* first row */}
        <div className="flex justify-between">
          <a href="/">
            <img
              src={Logo}
              alt="aarna logo"
              className="w-[220px] mx-[100px] py-6 cursor-pointer"
            />
          </a>
          <button className="mx-[100px] my-6 px-10 py-0 border-transparent text-white text-lg font-bold rounded-xl border-2 bg-red-600 hover:shadow-lg transform hover:scale-110 hover:bg-red-600 ease-out duration-500">
            GET A FREE CALL
          </button>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;

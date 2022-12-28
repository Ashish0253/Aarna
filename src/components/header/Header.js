import React from "react";
import Logo from "../../Assets/ARNA-LOGO.png";
// import Navbar from "./Navbar";

console.log(Logo);

function Header() {
  return (
    <div className="bg-[#f0f8ff]">
      <div
        className="bg-[#3464d9]"
        style={{ backgroundImage: "linear-gradient(to right, white, #1ebaba)" }}
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
          <button className="mx-[100px] my-6 px-10 py-0 border-transparent bg-primary text-white bg- bg-blu text-lg font-bold rounded-xl border-2  hover:shadow-lg transform hover:text-white hover:scale-110 hover:bg-red-600 ease-out duration-500">
            GET A FREE CALL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

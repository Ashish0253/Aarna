import React from "react";
import Logo from "../../Assets/ARNA-LOGO.png";
import User from "../../Assets/user.png";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 bg-[#f0f8ff]">
      <div className="ml-20">
        <a href="/">
          <img
            src={Logo}
            alt="aarna logo"
            className="w-[202px] mx-[100px] my-[30px] cursor-pointer"
          />
        </a>
      </div>

      <div className="col-span-2">
        <div className="mt-10 text-black">
          <a
            href="/"
            className="m-2 font-semibold text-lg ml-6 hover:text-[#23138f] "
          >
            <button className="transform hover:scale-110 ease-out duration-300">
              Home
            </button>
          </a>
          <a
            href="/"
            className="m-2 font-semibold text-lg ml-6 hover:text-[#23138f] "
          >
            <button className="transform hover:scale-110 ease-out duration-300">
              Health Packages
            </button>
          </a>
          <a
            href="/"
            className="m-2 font-semibold text-lg ml-6 hover:text-[#23138f] "
          >
            <button className="transform hover:scale-110 ease-out duration-300">
              Doctors
            </button>
          </a>
          <a
            href="/"
            className="m-2 font-semibold text-lg ml-6 hover:text-[#23138f] "
          >
            <button className="transform hover:scale-110 ease-out duration-300">
              Services
            </button>
          </a>
          <a
            href="/"
            className="m-2 font-semibold text-lg ml-6 hover:text-[#23138f] "
          >
            <button className="transform hover:scale-110 ease-out duration-300">
              Book a Test
            </button>
          </a>
          <a
            href="/"
            className="m-2 font-semibold text-lg ml-6 hover:text-[#23138f] "
          >
            <button className="transform hover:scale-110 ease-out duration-300">
              Contact Us
            </button>
          </a>
          <a
            href="/"
            className="m-2 font-semibold text-lg ml-6 hover:text-[#23138f] "
          >
            <button className="transform hover:scale-110 ease-out duration-300">
              Login / Signup
              <img src={User} alt="users" className="w-5 inline mx-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

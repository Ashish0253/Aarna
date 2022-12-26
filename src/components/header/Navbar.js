import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="bg-[white] font-[1000]">
      <div className="flex justify-around py-2 px-[150px] text-black font-bold">
        <a href="/" className=" text-xl hover:text-[#23138f] ">
          <button className="h-10 transform hover:scale-110 ease-out duration-300">
            <AiOutlineHome className="inline w-10 h-5" />
          </button>
        </a>
        <a href="/" className=" text-lg hover:text-[#23138f] ">
          <button className="transform hover:scale-110 ease-out duration-300">
            Health Packages
            <MdArrowDropDown className="h-10 inline" />
          </button>
        </a>
        <a href="/" className=" text-lg hover:text-[#23138f] ">
          <button className="transform hover:scale-110 ease-out duration-300">
            Departments
            <MdArrowDropDown className="h-10 inline" />
          </button>
        </a>
        <a href="/" className="text-lg hover:text-[#23138f] ">
          <button className="transform hover:scale-110 ease-out duration-300">
            Scans
            <MdArrowDropDown className="h-10 inline" />
          </button>
        </a>
        <a href="/" className="text-lg hover:text-[#23138f] ">
          <button className="h-10 transform hover:scale-110 ease-out duration-300">
            Doctors
          </button>
        </a>
        <a href="/" className="text-lg  hover:text-[#23138f] ">
          <button className="h-10 transform hover:scale-110 ease-out duration-300">
            Services
          </button>
        </a>
        <a href="/" className=" text-lg  hover:text-[#23138f] ">
          <button className="h-10 transform hover:scale-110 ease-out duration-300">
            Contact Us
          </button>
        </a>
        <a href="/" className=" text-lg  hover:text-[#23138f] ">
          <button className="h-10 transform hover:scale-110 ease-out duration-300">
            <FaRegUser className="w-5 inline mx-2" />
          </button>
        </a>
      </div>
    </div>
  );
}

import React from "react";
import Logo from "../../Assets/ARNA-LOGO.png";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3">
      <div className="">
        <a href="/">
          <img
            src={Logo}
            alt="aarna logo"
            className="w-[202px] mx-[100px] my-[30px] cursor-pointer"
          />
        </a>
      </div>

      <div className="col-span-2">
        <div className="grid grid-rows-2">
          <div className="m-2">
            <a href="/" className="m-2">
              Doctors
            </a>
            <a href="/" className="m-2">
              Services
            </a>
            <a href="/" className="m-2">
              Free call: 1800-572-0005 / 999-888-000-5
            </a>
            <a href="/" className="m-2">
              Contact Us
            </a>
          </div>
          <div className="m-2">
            <a href="/" className="m-2">
              Book a Test
            </a>
            <a href="/" className="m-2">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

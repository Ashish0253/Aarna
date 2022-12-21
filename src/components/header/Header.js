import React from "react";
import Logo from "../../Assets/ARNA-LOGO.png";
import Navbar from "./Navbar";
import "./Header.css";

console.log(Logo);

function Header() {
  return (
    <div className="container">
      <img src={Logo} alt="logo" height="auto" width="auto" />
      <Navbar />
      <h1>AARNA DIAGNOSTIC CENTRE</h1>
    </div>
  );
}

export default Header;

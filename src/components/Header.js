import React from "react";
import Logo from "../Assets/ARNA-LOGO.png";

console.log(Logo);

function Header() {
  return (
    <div>
      <img src={Logo} alt="logo" height="auto" width="auto" />
      <h1>AARNA DIAGNOSTIC CENTRE</h1>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="bg-[white] font-[1000] sticky top-0 z-[2]  ease-out 200">
      <div className="flex justify-around px-[170px] pt-3 text-black font-bold">
        <NavItem title="Home" link="/" />
        <NavItem title="Book a Test" link="/#" />
        <NavItem
          title="Health Packages"
          icon={<RiArrowDropDownLine className="h-10 inline" />}
          link="/#"
        >
          <DropdownMenu state="packages" />
        </NavItem>
        <NavItem
          title="Departments"
          icon={<RiArrowDropDownLine className="h-10 inline" />}
          link="/#"
        >
          <DropdownMenu state="departments" />
        </NavItem>
        <NavItem
          title="Scans"
          icon={<RiArrowDropDownLine className="h-10 inline" />}
          link="/#"
        >
          <DropdownMenu state="scans" />
        </NavItem>
        <NavItem title="Doctors" link="/#" />
        <NavItem title="Contact Us" link="/#" />
        <NavItem icon={<FaRegUser className="w-5 inline mx-2" />} link="/#" />
      </div>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="list-none pb-[2px]"
      onMouseEnter={() => setOpen(!open)}
      onMouseLeave={() => setOpen(!open)}
    >
      <Link
        to={props.link}
        className=" text-lg  hover:bg-[#22138d] hover:text-white px-6 py-[8px] rounded-lg "

        // onMouseLeave={() => setOpen(!open)}
      >
        <button className="h-10 transform ease-out duration-300">
          {props.title}
          {props.icon}
        </button>
      </Link>

      {open && props.children}
    </div>
  );
}

function DropdownMenu(props) {
  // const [activeMenu, setActiveMenu] = useState(props.state);

  function DropdownItem(props) {
    return (
      <a className="menu-item px-6" href="/#">
        {props.children}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <CSSTransition
        in={props.state === "departments"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div>
          <DropdownItem>Radiology</DropdownItem>
          <DropdownItem>Pathology</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={props.state === "scans"} unmountOnExit timeout={500}>
        <div>
          <DropdownItem>CT Scan</DropdownItem>
          <DropdownItem>UltraSound</DropdownItem>
          <DropdownItem>Digital X-Ray</DropdownItem>
          <DropdownItem>ECG Test</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={props.state === "packages"}
        unmountOnExit
        timeout={500}
      >
        <div>
          <DropdownItem>Urine Test</DropdownItem>
          <DropdownItem>Arthritis Test</DropdownItem>
          <DropdownItem>Thyroid Test</DropdownItem>
          <DropdownItem>Diabetes Test</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

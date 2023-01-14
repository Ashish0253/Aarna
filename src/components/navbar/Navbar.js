import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="bg-[#f8f8f8] font-[1000] sticky top-0 z-10  ease-out 200">
      <div className="flex justify-around px-[170px] pt-3 text-black font-semibold">
        <NavItem title="Home" link="/" />
        <NavItem title="Book a Test" link="/bookatest" />
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
        <NavItem title="Doctors" link="/doctors" />
        <NavItem title="Contact Us" link="/contactus" />
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
      <Link className="menu-item px-6" to={props.link}>
        {props.children}
      </Link>
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
          <DropdownItem link="/radiology">Radiology</DropdownItem>
          <DropdownItem link="/pathology">Pathology</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={props.state === "scans"} unmountOnExit timeout={500}>
        <div>
          <DropdownItem link="/ctscan">CT Scan</DropdownItem>
          <DropdownItem link="/ultrasound">UltraSound</DropdownItem>
          <DropdownItem link="/digitalxray">Digital X-Ray</DropdownItem>
          <DropdownItem link="/ecgtest">ECG Test</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={props.state === "packages"}
        unmountOnExit
        timeout={500}
      >
        <div>
          <DropdownItem link="/urinetest">Urine Test</DropdownItem>
          <DropdownItem link="/arthritistest">Arthritis Test</DropdownItem>
          <DropdownItem link="/thyroidtest">Thyroid Test</DropdownItem>
          <DropdownItem link="/diabetestest">Diabetes Test</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

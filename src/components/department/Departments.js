import React, { useState } from "react";
import "./Department.css";
import { content } from "./content";
// import { Propane } from "@mui/icons-material";

export default function Department() {
  const [isPathologyOpen, setPathologyOpen] = useState(false);
  const [isRadiologyOpen, setRadiologyOpen] = useState(false);

  function handleMouseOver(value) {
    if (value === 1) {
      setPathologyOpen(true);
      setRadiologyOpen(false);
    } else if (value === 2) {
      setPathologyOpen(false);
      setRadiologyOpen(true);
    }
  }

  return (
    <div className="p-10">
      <h1 className="flex justify-center font-bold text-5xl p-10">
        Our Departments
      </h1>
      <div className="grid grid-cols-3">
        <div className=" justify-start grid grid-rows-2">
          {content.map((data) => {
            return (
              <div
                key={data.id}
                onMouseEnter={() => handleMouseOver(data.id)}
                className="m-2 p-7 w-[300px] text-center bg-[#205295] border-transparent rounded-lg border-2 hover:scale-105 transition ease-out 300"
              >
                <div className="flex justify-center ">
                  <img src={data.img} alt="img" className="w-[100px]"></img>
                </div>
                <h1 className="font-bold pt-10 text-2xl text-white">
                  {" "}
                  {data.title}{" "}
                </h1>
                {/* <p> {data.content} </p> */}
              </div>
            );
          })}
        </div>
        <div className="grid col-span-2">
          {isPathologyOpen && <Pathology />} {isRadiologyOpen && <Radiology />}{" "}
        </div>
      </div>
    </div>
  );
}

function Pathology() {
  return (
    <div className="rounded border-2 border-black">
      Pathology is a branch of medicine that studies the causes, origins, and
      characteristics of disease.
    </div>
  );
}

function Radiology() {
  return (
    <div className="rounded border-2 border-black">
      Radiology, also known as diagnostic imaging, is a group of tests that take
      pictures or photographs of the body's various parts.
    </div>
  );
}

import React, { useState } from "react";
import "./Department.css";
import { content } from "./content";
// import { Propane } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
    <div className="p-10 bg-[#1a0e69] watermark">
      <div className="flex justify-center font-bold text-5xl text-[#1ebaba] p-10 z-10">
        Our Departments
      </div>
      <div className="">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 z-[1]">
            {content.map((data) => {
              return (
                <Link
                  to={data.link}
                  key={data.id}
                  onMouseEnter={() => handleMouseOver(data.id)}
                  className="m-2 p-7 py-20 w-[300px] text-center bg-white border-transparent rounded-lg border-2 hover:shadow-lg hover:scale-105 transition ease-out 300"
                >
                  <div className="flex justify-center ">
                    <img src={data.img} alt="img" className="w-[150px]"></img>
                  </div>
                  <h1 className="font-bold mt-20 text-3xl text-[#1a0e69]">
                    {" "}
                    {data.title}{" "}
                  </h1>
                  {/* <p> {data.content} </p> */}
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" rounded border-black text-white z-[1]">
          <div className="text-center p-4">
            {isPathologyOpen && <Pathology />}{" "}
            {isRadiologyOpen && <Radiology />}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

function Pathology() {
  return (
    <div className="">
      Pathology is the study of diseases and their causes, processes, and
      effects on the body. It is an essential part of modern medicine, as it
      helps doctors to accurately diagnose and treat diseases. Pathologists use
      a variety of tools and techniques to study diseases, including
      microscopes, biopsy specimens, and laboratory tests. They may also work
      with other healthcare professionals, such as doctors and nurses, to
      provide a comprehensive understanding of a patient's health. Pathologists
      play a critical role in the identification, diagnosis, and treatment of
      diseases, and their work helps to improve patient outcomes and public
      health.
    </div>
  );
}

function Radiology() {
  return (
    <div className="">
      Radiology is a medical specialty that uses imaging techniques, such as
      x-rays, CT scans, and MRIs, to diagnose and treat diseases. Radiologists
      are medical doctors who specialize in interpreting medical images and
      providing guidance to other healthcare professionals on the appropriate
      use of imaging to diagnose and treat diseases. They work with a team of
      technologists and other healthcare professionals to provide comprehensive
      care to patients. Radiology is an important part of modern medicine, as it
      allows doctors to non-invasively visualize the inside of the body and
      identify problems such as fractures, tumors, and other abnormalities. By
      using these advanced imaging techniques, radiologists can help to improve
      patient outcomes and play a crucial role in the diagnosis and treatment of
      a wide range of medical conditions.
    </div>
  );
}

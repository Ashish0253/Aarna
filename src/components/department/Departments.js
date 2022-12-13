import React from "react";
import MediaCard from "./MediaCard";
import pathology from "../../Assets/microscope.png";
import radiology from "../../Assets/x-ray.png";
import "./Department.css";

//just have to add some styling

const info = [
  {
    id: 1,
    title: "Pathology",
    img: pathology,
    content:
      "Pathology is a branch of medicine that studies the causes, origins, and characteristics of disease.",
  },
  {
    id: 2,
    title: "Radiology",
    img: radiology,
    content:
      "Radiology, also known as diagnostic imaging, is a group of tests that take pictures or photographs of the body's various parts.",
  },
];

export default function Department() {
  return (
    <div id="block_container">
      <h1>Our Departments</h1>
      {info.map((data) => {
        return (
          <div>
            <MediaCard
              key={data.id}
              src={data.img}
              title={data.title}
              content={data.content}
            />
          </div>
        );
      })}
    </div>
  );
}

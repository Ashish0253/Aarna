import React from "react";
import { content1, content2 } from "./content";
import { AiFillStar } from "react-icons/ai";
import "./Testimonials.css";

// transform:
//     translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg),

export default function Testimonials() {
  return (
    <div className="grid grid-cols-3 testimonial">
      <div className="m-20 pt-10  left-0">
        <p className="text-center text-xl font-bold rounded-lg border-gray-300 border-2 py-1 px-0 bg-white">
          Testimonials
        </p>
        <h1 className="text-4xl font-bold p-6 text-blue-500">
          What <br></br> Customers are <br></br>saying about <br></br>Aarna{" "}
          <br></br>
          Diagnostics
        </h1>
      </div>
      <div className="p-4 pt-[200px] ml-10">
        {content1.map((item) => {
          return (
            <div className="page border-blue-700 text-white rounded-md border-t-4 shadow-xl mb-10 p-8 bg-[#4B56D2] testimonial-card">
              <p className="text-center p-2">{item.review}</p>
              <h1 className="text-left border-t-2 pt-8">{item.name}</h1>
              <div className="flex justify-between">
                <p className="">({item.source})</p>
                <p className="">
                  <AiFillStar className="text-yellow-300 inline" />
                  <AiFillStar className="text-yellow-300 inline" />
                  <AiFillStar className="text-yellow-300 inline" />
                  <AiFillStar className="text-yellow-300 inline" />
                  <AiFillStar className="text-yellow-300 inline" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-10 pt-[100px]">
        {content2.map((item) => {
          return (
            <div className=" border-blue-700 text-white rounded-md border-t-4 shadow-xl mb-10 p-8 bg-[#205295] testimonial-card">
              <p className="text-center p-2">{item.review}</p>
              <h1 className="text-left border-t-2 pt-8">{item.name}</h1>
              <div className="flex justify-between">
                <p className="">({item.source})</p>
                <p className="">
                  <AiFillStar className="text-yellow-300 inline" />
                  <AiFillStar className="text-yellow-300 inline" />
                  <AiFillStar className="text-yellow-300 inline" />
                  <AiFillStar className="text-yellow-300 inline" />
                  <AiFillStar className="text-yellow-300 inline" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

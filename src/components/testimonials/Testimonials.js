import React from "react";
import { content1, content2 } from "./content";
import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
  return (
    <div className="grid grid-cols-3">
      <div className="m-20 pt-10  left-0">
        <p className=" rounded-lg border-gray-300 border-2 p-1 flex">
          Testimonials
        </p>
        <h1 className="text-4xl font-bold p-6">
          What <br></br> Customers are <br></br>saying about <br></br>Aarna{" "}
          <br></br>
          Diagnostics
        </h1>
      </div>
      <div className="p-4 pt-[200px] ml-10">
        {content1.map((item) => {
          return (
            <div className=" border-blue-500 rounded-md border-t-4 shadow-xl mb-10 p-8">
              <p className="text-center p-2">{item.review}</p>
              <h1 className="text-left border-t-2 pt-8">{item.name}</h1>
              <div className="flex justify-between">
                <p className="">({item.source})</p>
                <p className="">
                  <AiFillStar className="text-yellow-300" /> {item.star}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-10 pt-[100px]">
        {content2.map((item) => {
          return (
            <div className=" border-blue-500 rounded-md border-t-4 shadow-xl mb-10 p-8">
              <p className="text-center p-2">{item.review}</p>
              <h1 className="text-left border-t-2 pt-8">{item.name}</h1>
              <div className="flex justify-between">
                <p className="">({item.source})</p>
                <p className="">
                  <AiFillStar className="text-yellow-300" /> {item.star}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

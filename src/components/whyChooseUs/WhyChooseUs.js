import React from "react";
import { content1, content2 } from "./content";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#f8f8f8]">
      <h1 className="text-center text-5xl font-bold p-10">Why Choose Us ?</h1>

      {/* first part */}
      <div className="grid grid-cols-4 p-10">
        {content1.map((item) => {
          return (
            <div className="m-2 bg-[#205295] rounded border-2 border-transparent p-5 ml-10 grid grid-rows-2">
              <div>
                <h1 className="text-3xl text-center text-white">
                  {item.heading}
                </h1>
              </div>
              <div className="flex justify-center ">
                <img src={item.img} alt="respective" className="w-20 " />
              </div>
            </div>
          );
        })}
      </div>

      {/* second part */}
      <div className="grid grid-cols-3 p-5 mx-[250px] my-10 bg-white rounded-xl">
        {content2.map((item) => {
          return (
            <div className="p-5 rounded border-2 border-transparent">
              <div className="flex justify-center">
                <img src={item.img} alt="respective" className="w-20" />
              </div>
              <div className="p-3">
                <h1 className="text-center text-4xl font-bold">
                  {item.heading}
                </h1>
                <p className="text-center font-semibold">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

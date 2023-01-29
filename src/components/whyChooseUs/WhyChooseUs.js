import React from "react";
import { content1, content2 } from "./content";

import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#1a0e69]">
      <div className="p-5 watermark">
        <div className="text-center text-5xl font-bold text-white p-10 z-[1]">
          Why Choose Us ?
        </div>

        {/* first part */}
        <div className="grid grid-cols-4 px-[5%] py-[2%] z-[1]">
          {content1.map((item) => {
            return (
              <div
                key={item.id}
                className="m-2  rounded border-2 border-transparent p-5 grid grid-rows-2 z-[1]"
              >
                <div>
                  <h1 className="text-3xl text-center text-[#1ebaba] font-semibold">
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
        <div className="grid grid-cols-3 p-5 mx-[20%] my-10 bg-white rounded-xl z-[1]">
          {content2.map((item) => {
            return (
              <div
                key={item.id}
                className="p-5 rounded border-2 border-transparent z-[1] "
              >
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
    </div>
  );
}

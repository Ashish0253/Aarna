import React from "react";
import { content1, content2 } from "./content";

import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#1a0e69]">
      <div className="p-5 watermark">
        <div className="text-center text-5xl font-bold text-white p-10 z-[1]">
          WHY AARNA DAGNOSTIC CENTRE ?
        </div>

        {/* first part */}
        <div className="grid grid-cols-3 px-[1%] py-[2%] z-[1]">
          {content1.map((item) => {
            return (
              <div
                key={item.id}
                className=" border-r-2 border-white p-5  z-[1]"
              >
                <div className="flex justify-around text-center">
                  <div className=" text-white text-3xl pr-1">{item.img}</div>
                  <div className=" text-2xl text-white font-semibold">
                    {item.heading}{" "}
                  </div>
                </div>
                {/* <div className="flex justify-center ">
                  <img src={item.img} alt="respective" className="w-20 " />
                </div> */}
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

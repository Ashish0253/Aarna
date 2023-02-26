import React from "react";
import "./HealthScans.css";
import Form from "./FormScans";

export default function CTScan() {
  return (
    <div>
      {/* upper blue box */}
      <div className="our_scans bg-[#1a0e69] h-[250px] rounded-xl">
        <div className="flex justify-center items-center text-[#0aee9c] text-5xl font-bold pt-[90px]">
          Our Scans
        </div>
      </div>
      {/* Grey */}
      <div>
        <div className="bg-[#f1f1f1] px-[15%] pt-[7%] relative z-[10]">
          {/* main white box */}
          <div className="bg-[#ffffff] rounded-3xl p-[6%] pb-[10%] grid grid-cols-2 relative z-[10]">
            <div className="z-[1]">
              <h1 className="text-4xl text-[#1a0e69] font-extrabold">
                CT Scan
              </h1>
              <p className="text-xl text-[#0aee9c] font-semibold">@1499</p>
              <p className="pt-4">Description of the test</p>
            </div>
            <div className="bg-[#1a0e69] rounded-2xl z-[1]">
              <Form scan="CT Scan" />
            </div>
          </div>
          {/* Last blue box */}
          <div className="bg-[#1a0e69] w-full h-[20%] absolute bottom-[-30px] z-[0] left-[0]"></div>
        </div>
      </div>
    </div>
  );
}

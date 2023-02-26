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
      <div className="bg-[#f1f1f1] px-[15%] pt-[7%]">
        {/* main white box */}
        <div className="bg-[#ffffff] rounded-xl p-[6%] pb-[20%] grid grid-cols-2">
          <div>
            <h1 className="text-2xl text-[#1a0e69] font-bold">CT Scan</h1>
            <p className="text-xl text-[#0aee9c] font-semibold">@1499</p>
            <p className="pt-4">Description of the test</p>
          </div>
          <div className="bg-[#1a0e69] rounded-2xl">
            <Form />
          </div>
        </div>
      </div>
      {/* Last blue box */}
      <div className="bg-[#1a0e69] h-[100px]"></div>
    </div>
  );
}

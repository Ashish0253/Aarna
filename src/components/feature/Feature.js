import React from "react";
import map from "../../Assets/feature/map.png";
import prescription from "../../Assets/feature/prescription.png";
import flask from "../../Assets/feature/flask.png";

export default function Feature() {
  return (
    <div className=" px-20 py-10 mx-20 grid grid-cols-3 border-2 border-black">
      <div className="">
        <div className="flex justify-center hover:scale-125 transition ease-out 300">
          <img src={map} alt="location" className="w-20" />
        </div>
        <h1 className="text-2xl text-center">Locate Nearest Centre</h1>
      </div>
      <div className="">
        <div className="flex justify-center hover:scale-125 transition ease-out 300">
          <img src={flask} alt="flask" className="w-20" />
        </div>
        <h1 className="text-2xl text-center">Book a Test</h1>
      </div>
      <div className="">
        <div className="flex justify-center hover:scale-125 transition ease-out 300">
          <img src={prescription} alt="prescription" className="w-20" />
        </div>
        <h1 className="text-2xl text-center">Upload Prescription</h1>
      </div>
    </div>
  );
}

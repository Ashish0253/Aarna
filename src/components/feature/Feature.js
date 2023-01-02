import React from "react";
import map from "../../Assets/feature/map.png";
import prescription from "../../Assets/feature/prescription.png";
import flask from "../../Assets/feature/flask.png";

export default function Feature() {
  return (
    <div className="px-[200px] py-10 grid grid-cols-3 bg-[#205295] text-white">
      <div className="py-6 mx-2 rounded-md border-2 border-white">
        <a href="/#">
          <div className="flex justify-center hover:scale-[1.20] transition ease-out 300">
            <img src={map} alt="location" className="w-20" />
          </div>
          <h1 className="text-2xl text-center">Locate Nearest Centre</h1>
        </a>
      </div>
      <div className="py-6 mx-2 rounded-md border-2 border-white">
        <a href="/#">
          <div className="flex justify-center hover:scale-[1.20] transition ease-out 300">
            <img src={flask} alt="flask" className="w-20" />
          </div>
          <h1 className="text-2xl text-center">Book a Test</h1>
        </a>
      </div>
      <div className="py-6 mx-2 rounded-md border-2 border-white">
        <a href="/#">
          <div className="flex justify-center hover:scale-[1.20] transition ease-out 300">
            <img src={prescription} alt="prescription" className="w-20" />
          </div>
          <h1 className="text-2xl text-center">Upload Prescription</h1>
        </a>
      </div>
    </div>
  );
}

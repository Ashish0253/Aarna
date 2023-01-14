import React from "react";
import map from "../../Assets/feature/map.png";
import prescription from "../../Assets/feature/prescription.png";
import flask from "../../Assets/feature/flask.png";
import { Link } from "react-router-dom";

export default function Feature() {
  function handleLocation() {
    const successCallback = (position) => {
      console.log(position);
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  }

  return (
    <div className="px-[275px] py-5 grid grid-cols-3 bg-[#1ebaba] font-semibold">
      <div className="py-6 mx-2 rounded-md border-2 border-white">
        <Link to="/#" onClick={handleLocation}>
          <div className="flex justify-center hover:scale-[1.20] transition ease-out 300">
            <img src={map} alt="location" className="w-20" />
          </div>
          <h1 className="text-2xl text-center text-white">Nearest Centre</h1>
        </Link>
      </div>
      <div className="py-6 mx-2 rounded-md border-2 border-white">
        <Link to="/bookatest">
          <div className="flex justify-center hover:scale-[1.20] transition ease-out 300">
            <img src={flask} alt="flask" className="w-20" />
          </div>
          <h1 className="text-2xl text-center text-white">Book a Test</h1>
        </Link>
      </div>
      <div className="py-6 mx-2 rounded-md border-2 border-white">
        <Link to="/uploadprescription">
          <div className="flex justify-center hover:scale-[1.20] transition ease-out 300">
            <img src={prescription} alt="prescription" className="w-20" />
          </div>
          <h1 className="text-2xl text-center text-white">
            Upload Prescription
          </h1>
        </Link>
      </div>
    </div>
  );
}

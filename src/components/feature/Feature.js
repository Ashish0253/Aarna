import React from "react";
import map from "../../Assets/feature/map.svg";
import prescription from "../../Assets/feature/pills.svg";
import flask from "../../Assets/feature/beaker.svg";
import { Link } from "react-router-dom";

import "./Feature.css";

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
    <div className="feature py-5 grid grid-cols-3 bg-primary bg-opacity-95 font-semibold">
      <div className="py-6 mx-2 rounded-md border-2 border-white">
        <Link to="/#" onClick={handleLocation}>
          <div className="flex justify-center hover:scale-[1.20] transition ease-out 300">
            <img src={map} alt="location" className="w-[160px]" />
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

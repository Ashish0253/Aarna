import React from "react";
import { Link } from "react-router-dom";
import Content from "./content";

export default function Scans() {
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
          {/* white box */}
          <div className="bg-[#ffffff] rounded-3xl p-[6%] pb-[10%] sm:grid sm:grid-cols-3 gap-8 gap-y-14 relative z-[10]">
            {/* CT Scan */}
            <div className="z-[1] border-2 border-[#1a0e69] rounded-lg overflow-hidden h-[100%] w-[100%]">
              <img
                src={Content[0].src}
                alt="ct"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <h1 className="text-[#1a0e69] text-4xl font-bold pt-2">
                {Content[0].title}
              </h1>
              <p className="pb-4">{Content[0].description}</p>
              <Link
                to={Content[0].page}
                className=" mt-6 border-transparent rounded-lg px-4 py-0 border-2 bg-[#1ebaba] text-white "
              >
                Book Now
              </Link>
            </div>

            {/* Ultrasound */}
            <div className="col-span-2">
              <h1 className="text-[#1a0e69] text-4xl font-bold pt-2">
                {Content[1].title}
              </h1>
              <p className="pb-4">{Content[1].description}</p>
              <Link
                to={Content[1].page}
                className=" mt-6 border-transparent rounded-lg px-4 py-0 border-2 bg-[#1ebaba] text-white "
              >
                Book Now
              </Link>
            </div>
            <div className="z-[1] border-2 border-[#1a0e69] rounded-lg overflow-hidden h-[100%] w-[100%]">
              <img
                src={Content[1].src}
                alt="ct"
                className="w-full h-full rounded-lg"
              />
            </div>

            {/* Digital X ray */}
            <div className="z-[1] border-2 border-[#1a0e69] rounded-lg overflow-hidden h-[100%] w-[100%]">
              <img
                src={Content[2].src}
                alt="ct"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <h1 className="text-[#1a0e69] text-4xl font-bold pt-2">
                {Content[2].title}
              </h1>
              <p className="pb-4">{Content[2].description}</p>
              <Link
                to={Content[2].page}
                className=" mt-6 border-transparent rounded-lg px-4 py-0 border-2 bg-[#1ebaba] text-white "
              >
                Book Now
              </Link>
            </div>

            {/* ECG Test */}
            <div className="col-span-2">
              <h1 className="text-[#1a0e69] text-4xl font-bold pt-2">
                {Content[3].title}
              </h1>
              <p className="pb-4">{Content[3].description}</p>
              <Link
                to={Content[3].page}
                className=" mt-6 border-transparent rounded-lg px-4 py-0 border-2 bg-[#1ebaba] text-white "
              >
                Book Now
              </Link>
            </div>
            <div className="z-[1] border-2 border-[#1a0e69] rounded-lg overflow-hidden h-[100%] w-[100%]">
              <img
                src={Content[3].src}
                alt="ct"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
          {/*Blue box */}
          <div className="bg-[#1a0e69] w-full h-[20%] absolute bottom-[-30px] z-[0] left-[0]"></div>
        </div>
      </div>
    </div>
  );
}

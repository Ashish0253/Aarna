import { BiRupee } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs";

import { tests } from "./content";

export default function Tests() {
  return (
    <div className="container grid grid-cols-3 gap-4 ">
      {tests.map((item) => {
        return (
          <div className="border-2 border-black rounded-lg p-6 ">
            <p className="font-bold text-xl py-1">COMPLETE BLOOD COUNT; CBC</p>
            <p className="text-xs px-1">22 Parameters Covered</p>
            <p className="font-bold text-lg">
              {" "}
              <BiRupee className="inline" />
              350
            </p>
            <div className="flex justify-between p-2 text-green-500">
              <div className="font-bold">
                <BsFillPatchCheckFill className="inline" />
                Home Collection
              </div>
              <div className="font-bold">
                <BsFillPatchCheckFill className="inline" />
                Lab Visit
              </div>
            </div>

            <button className="border-2 border-black rounded-lg p-2 bg-primary text-white">
              Book Now
            </button>
          </div>
        );
      })}
    </div>
  );
}

import Radiology from "../Assets/Radiology.webp";
import Pathology from "../Assets/Pathology.webp";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

export default function Departments() {
  return (
    <div className="grid bg-[#eeeeee] relative">
      <div className="flex justify-center p-20 font-bold text-5xl text-primary">
        Departments
      </div>

      {/* Pathology  */}

      <div className="z-[1] border-2 border-transparent drop-shadow-lg rounded-lg px-24 py-20 m-24 mt-0 grid grid-cols-2 bg-white">
        <div className="font-bold text-5xl text-primary">Pathology</div>
        <div className="grid justify-end">
          <div className="">
            <img src={Pathology} alt="Pathology" className="h-[400px]" />
          </div>
          <div className="flex justify-between pt-16">
            <Link to={ROUTES.BOOK_TEST}>
              <button className="font-bold text-lg bg-primary text-white drop-shadow-md border-2 border-transparent rounded-xl py-4 px-7 hover:bg-secondary ">
                Book Your Test
              </button>
            </Link>

            <Link to="/#">
              <button className="font-bold text-lg bg-primary text-white drop-shadow-md border-2 border-transparent rounded-xl py-4 px-7 hover:bg-secondary ">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary h-[10%] w-[100%] absolute bottom-[45%] "></div>
      <div className="bg-primary h-[10%] w-[100%] absolute bottom-[0] "></div>

      {/* Radiology */}
      <div className="z-[1] border-2 border-transparent drop-shadow-lg rounded-lg px-24 py-20 m-24 mt-10 grid grid-cols-2 bg-white">
        <div className="font-bold text-5xl text-primary">Radiology</div>
        <div className="grid justify-end">
          <div>
            <img src={Radiology} alt="Pathology" className="h-[400px]" />
          </div>
          <div className="flex justify-between pt-16">
            <Link to={ROUTES.SCANS}>
              <button className="font-bold text-lg bg-primary text-white drop-shadow-md border-2 border-transparent rounded-xl py-4 px-7 hover:bg-secondary ">
                Book Your Test
              </button>
            </Link>

            <Link>
              <button className="font-bold text-lg bg-primary text-white drop-shadow-md border-2 border-transparent rounded-xl py-4 px-7 hover:bg-secondary ">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

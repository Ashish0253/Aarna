import Radiology from "../Assets/Radiology.webp";
import Pathology from "../Assets/Pathology.webp";

export default function Departments() {
  return (
    <div className="grid bg-[#eeeeee] relative">
      <div className="flex justify-center p-20 font-bold text-5xl text-primary">
        Departments
      </div>

      {/* Pathology  */}
      {/* <div> */}
      <div className="border-2 border-transparent drop-shadow-lg rounded-lg px-24 py-20 m-24 mt-0 grid grid-cols-2 bg-white">
        <div className="font-bold text-5xl text-primary">Pathology</div>
        <div className="grid justify-end">
          <div className="">
            <img src={Pathology} alt="Pathology" className="h-[400px]" />
          </div>
          <div className="flex justify-between pt-16">
            <button className="font-bold text-lg bg-primary text-white drop-shadow-md border-2 border-transparent rounded-lg py-4 px-7">
              Book Your Test
            </button>
            <button className="font-bold text-lg bg-primary text-white drop-shadow-md border-2 border-transparent rounded-lg py-4 px-7">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* <div className="bg-primary h-24 bottom-0 "></div> */}
      {/* </div> */}
      {/* Radiology */}
      <div className="border-2 border-transparent drop-shadow-lg rounded-lg px-24 py-20 m-24 mt-0 grid grid-cols-2 bg-white">
        <div className="font-bold text-5xl text-primary">Radiology</div>
        <div className="grid justify-end">
          <div>
            <img src={Radiology} alt="Pathology" className="h-[400px]" />
          </div>
          <div className="flex justify-between pt-16">
            <button className="font-bold text-lg bg-primary text-white drop-shadow-md border-2 border-transparent rounded-lg py-4 px-7">
              Book Your Test
            </button>
            <button className="font-bold text-lg bg-primary text-white drop-shadow-md border-2 border-transparent rounded-lg py-4 px-7">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { BiRupee } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs";

// import { tests } from "./content";

export default function Tests(props) {
  console.log(props.tests);

  return (
    <div className="container grid grid-cols-3 gap-4 p-24 pt-4 ">
      {props.tests.map((item) => {
        return (
          <div
            key={item.id}
            className="border-2 border-transparent rounded-lg p-6 bg-[#FFFFFF] drop-shadow-md"
          >
            <p className="font-bold text-xl py-1">{item.title}</p>
            <p className="text-xs px-1">{item.params} parameters covered</p>
            <p className="font-bold text-lg">
              {" "}
              <BiRupee className="inline" />
              {item.price}
            </p>
            <div className="flex justify-between p-2 text-green-500">
              <div className="font-bold">
                <BsFillPatchCheckFill className="inline" />
                Lab Visit
              </div>

              {item.home && (
                <div className="font-bold">
                  <BsFillPatchCheckFill className="inline" />
                  Home Collection
                </div>
              )}
            </div>

            <button className="border-2 border-transparent rounded-lg p-2 bg-primary text-white drop-shadow-lg">
              Book Now
            </button>
          </div>
        );
      })}
    </div>
  );
}

import { content } from "../components/packages/content";
import { BiRupee } from "react-icons/bi";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function HealthPackages() {
  const [filteredPackages, setFilteredPackages] = useState(content);

  return (
    <div className="container p-8 bg-[#EEEEEE]">
      <SearchBar
        items={content}
        // filteredItems={filteredPackages}
        setFilteredItems={setFilteredPackages}
      />

      <div className=" grid grid-cols-3 gap-4 p-24 pt-4">
        {filteredPackages.map((item) => {
          return (
            <div
              key={item.id}
              className="container h-[450px] relative text-white bg-[#1a0e69] bg-opacity-95 rounded-xl p-10  overflow-hidden drop-shadow-md border-2 border-transparent  transition ease-out-300"
            >
              <h1 className="abolute top-0 font-bold text-white text-4xl mb-2">
                {item.title}
              </h1>
              <div className="top-[100px]absolute px-2 text-sm font-semibold">
                Includes: {item.numberOfTests} Tests
              </div>
              <div className=" text-base">
                {/* test list start */}
                <div className="">
                  <ul className="px-6 py-2 list-disc">
                    {item.tests.map((test) => {
                      return <li className="p-[1px]">{test}</li>;
                    })}
                  </ul>
                </div>

                {/* price and button start */}
                <div className="bottom-5 absolute">
                  <div className="font-bold text-md">Normal Price:</div>{" "}
                  <div className="line-through">
                    <BiRupee className="inline" />
                    {item.price}/-
                  </div>
                  <div className="font-bold text-xl text-[#0aee9c]">
                    Offer Price:
                  </div>{" "}
                  <div className="text-xl text-[#0aee9c]">
                    <BiRupee className="inline" />
                    {item.offerPrice}/-
                  </div>
                  <div className="flex justify-around">
                    <button className=" text-white mt-6 font-semibold border-white border-2  hover:bg-white hover:text-black rounded-md px-4 py-1 hover:scale-110 ease-out duration-300">
                      Book Now
                    </button>
                    <button className="ml-[120px] text-white mt-6 font-semibold border-white border-2 hover:bg-white hover:text-black rounded-md px-4 py-1 hover:scale-110 ease-out duration-300">
                      Know More
                    </button>
                  </div>
                </div>
                {/* /* price and button end */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

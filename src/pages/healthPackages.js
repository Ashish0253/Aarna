import { content } from "../components/packages/content";
import { BiRupee } from "react-icons/bi";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import Popup from "../components/popup/Popup3";

export default function HealthPackages() {
  const [filteredPackages, setFilteredPackages] = useState(content);
  const [isOpen, setIsOpen] = useState(false);

  const [selectedTest, setSelectedTest] = useState("");

  function handleClick(event) {
    event.preventDefault();

    setIsOpen(!isOpen);
    // console.log("running");
    // console.log("event", event.target.value);

    setSelectedTest(event.target.value);
  }

  return (
    <div className=" p-8 bg-[#EEEEEE]">
      <SearchBar
        items={content}
        // filteredItems={filteredPackages}
        setFilteredItems={setFilteredPackages}
      />

      <div className=" md:grid grid-cols-3 gap-4 p-24 pt-4">
        {filteredPackages.map((item) => {
          return (
            <div
              key={item.id}
              className="justify-between h-[500px] relative text-white bg-[#1a0e69] bg-opacity-95 rounded-xl p-10  overflow-hidden drop-shadow-md border-2 border-transparent  "
            >
              <h1 className=" font-bold text-white text-4xl mb-2">
                {item.title}
              </h1>
              <div className=" px-2 text-sm font-semibold">
                Includes: {item.numberOfTests} Tests
              </div>
              {/* <div className=" text-base"> */}
              {/* test list start */}
              <div className="">
                <ul className="px-6 py-2 list-disc">
                  {item.tests.map((test) => {
                    return <li className="p-[1px]">{test}</li>;
                  })}
                </ul>
              </div>

              {/* price and button start */}
              <div className="bottom-8 absolute">
                <div className="font-bold text-md">Normal Price:</div>{" "}
                <div className="line-through">
                  <BiRupee className="inline" />
                  {item.price}/-
                </div>
                <div className="font-bold text-xl text-[#0aee9c]">
                  Offer Price:
                </div>
                <div className="text-xl text-[#0aee9c]">
                  <BiRupee className="inline" />
                  {item.offerPrice}/-
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleClick}
                    value={item.title}
                    className="text-white mt-6 font-semibold border-white border-2  hover:bg-white hover:text-black rounded-md px-4 py-1 hover:scale-110 ease-out duration-300"
                  >
                    Book Now
                  </button>
                  <button className=" text-white mt-6 font-semibold border-white border-2 hover:bg-white hover:text-black rounded-md px-4 py-1 hover:scale-110 ease-out duration-300">
                    Know More
                  </button>
                </div>
              </div>
              {/* /* price and button end */}
              {/* </div> */}
            </div>
          );
        })}
      </div>

      {isOpen && (
        <Popup
          handleClick={handleClick}
          open={isOpen}
          selectedTest={selectedTest}
        />
      )}
    </div>
  );
}

// import Tests from "../components/tests/Tests";
import SearchBar from "../components/SearchBar";
import { content } from "../components/tests/content";

// import { content } from "../components/packages/content";

import { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs";
// import { FilterAltRounded } from "@mui/icons-material";

export default function BookTest() {
  const [filteredTests, setFilteredTests] = useState(content);

  return (
    <div className="p-8 bg-[#EEEEEE]">
      <SearchBar
        items={content}
        // filteredItems={filteredTests}
        setFilteredItems={setFilteredTests}
      />

      <div className="container grid grid-cols-3 gap-4 p-24 pt-4 ">
        {filteredTests.map((item) => {
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
    </div>
  );
}

// function SearchBar() {
//   const [items, setItems] = useState([]);

//   console.log(items);

//   const [query, setQuery] = useState("");

//   function handleClick() {
//     for (var i = 0; i < tests.length; i++) {
//       const value = tests.at(i);
//       console.log(i);
//       // eslint-disable-next-line no-loop-func
//       setItems((prev) => {
//         return [...prev, value];
//       });
//     }

//     console.log(items);
//   }

//   useEffect(() => {
//     handleClick();
//   }, []);

//   const filteredItems = useMemo(() => {
//     return items.filter((item) => {
//       return item.title.toLowerCase().includes(query.toLowerCase());
//     });
//   }, [items, query]);

//   console.log("filteredItems", filteredItems);

//   return (
//     <div>
//       <div className="justify-center flex p-4 border-2 border-transparent">
//         <input
//           value={query}
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value)}
//           className="h-16 w-[500px] px-4 rounded focus:border-2 focus:border-[#0aee9c]"
//         />

//         {/* <button onClick={handleClick}>click me</button> */}
//       </div>
//       <Tests tests={filteredItems} />
//     </div>
//   );
// }

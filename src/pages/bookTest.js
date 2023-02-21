import Tests from "../components/tests/Tests";
import SearchBar from "../components/SearchBar";
import { content } from "../components/tests/content";

// import { content } from "../components/packages/content";

import Popup from "../components/popup/Popup2";

import { useState } from "react";

export default function BookTest() {
  const [filteredTests, setFilteredTests] = useState(content);
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
    <div className="p-8 bg-[#EEEEEE]">
      <SearchBar items={content} setFilteredItems={setFilteredTests} />

      <Tests tests={filteredTests} handleClick={handleClick} />

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

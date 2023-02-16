import Tests from "../components/tests/Tests";
// import SearchBar from "../components/SearchBar";
import { tests } from "../components/tests/content";

import { useState, useMemo, useEffect } from "react";
// import { FilterAltRounded } from "@mui/icons-material";

export default function BookTest() {
  return (
    <div className="p-8 bg-[#EEEEEE]">
      <SearchBar />
    </div>
  );
}

function SearchBar() {
  const [items, setItems] = useState([]);

  console.log(items);

  const [query, setQuery] = useState("");

  function handleClick() {
    for (var i = 0; i < tests.length; i++) {
      const value = tests.at(i);
      console.log(i);
      // eslint-disable-next-line no-loop-func
      setItems((prev) => {
        return [...prev, value];
      });
    }

    console.log(items);
  }

  useEffect(() => {
    handleClick();
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  console.log("filteredItems", filteredItems);

  return (
    <div>
      <div className="justify-center flex p-4 border-2 border-transparent">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-16 w-[500px] px-4 rounded border-2"
        />

        {/* <button onClick={handleClick}>click me</button> */}
      </div>
      <Tests tests={filteredItems} />
    </div>
  );
}

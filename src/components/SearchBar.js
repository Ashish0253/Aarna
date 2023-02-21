// import { AiOutlineSearch } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";

// import { content } from "./packages/content";

import { useState, useMemo, useEffect } from "react";

export default function SearchBar(props) {
  const [items, setItems] = useState(props.items);

  // console.log("items", items);

  const [query, setQuery] = useState("");

  useEffect(() => {
    setItems(props.items);
  }, [props]);

  // console.log("props", props);
  // console.log("items", items);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  // console.log("its working");

  useEffect(() => {
    props.setFilteredItems(filteredItems);
  }, [props, filteredItems]);

  // console.log("still working");

  return (
    <div className="justify-center flex p-4 border-2 border-transparent">
      <input
        value={query}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        className="h-16 w-[500px] px-4 rounded focus:border-2 focus:border-[#0aee9c] "
      />
    </div>
  );
}

// import { AiOutlineSearch } from "react-icons/ai";

import { useState, useMemo } from "react";

export default function SearchBar(props) {
  const [items, setItems] = useState([]);

  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   setItems((prev) => {
  //     return [...prev, props.items];
  //   });
  // }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  return (
    <div className="justify-center flex p-4 border-2 border-transparent">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-16 w-[500px] px-4 rounded border-2"
      />
    </div>
  );
}

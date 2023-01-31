import { useState } from "react";
import axios from "axios";

export default function MessageForm() {
  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Phone: phone,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/e38832dc-f339-47f0-b5c9-65bbc000c77f",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setMessage("");
        setNumber("");
      });
  };

  return (
    <div className="pt-20 pl-10 h-96">
      <h1 className="py-10 text-bold text-4xl font-mono tracking-wide">
        Message for us
      </h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <div className="py-1">
            <label className="text-xl font-mono text-semibold pr-5 inline-block">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-300 dark:border-gray-200 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="py-1">
            <label className="text-xl font-mono text-semibold pr-5 inline-block">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter moblie number"
              required
              onChange={(e) => setNumber(e.target.value)}
              value={phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-300 dark:border-gray-200 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="py-1">
            <label className="text-xl font-mono text-semibold pr-5 inline-block">
              Messsage
            </label>
            <input
              type="text"
              placeholder="Enter message"
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-300 dark:border-gray-200 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <div className="py-1 relative">
          <button
            type="submit"
            className=" absolute right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Sumbit
          </button>
        </div>
      </form>
    </div>
  );
}

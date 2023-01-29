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
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter moblie number"
            required
            onChange={(e) => setNumber(e.target.value)}
            value={phone}
          />
          <label>Messsage</label>
          <input
            type="text"
            placeholder="Enter message"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div>
          <button type="submit">Sumbit</button>
        </div>
      </form>
    </div>
  );
}

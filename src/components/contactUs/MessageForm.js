import { useState } from "react";
import axios from "axios";

export default function MessageForm() {
  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [collection, setCollection] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Patient_Name: name,
      Mobile: phone,
      Email_id: email,
      Gender: gender,
      Collection: collection,
      Date_Time: date,
    };
    console.log(data);
    axios
      .post(
        "https://sheet.best/api/sheets/fc0855fc-ca9f-4f7c-bb84-bcdf48cefab0",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setNumber("");
        setGender("");
        setCollection("");
        setDate("");
      });
  };

  return (
    <div className="p-[7%] pb-[13%]">
      <h1 className="font-bold text-4xl text-white  tracking-wide flex justify-center items-center">
        AARNA
      </h1>
      <h2 className="font-semibold text-white text-xsm  flex justify-center items-center">
        DIAGNOSTIC CENTRE
      </h2>
      <p className="text-white text-sm py-4 font-semibold">
        Enter your details:
      </p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          <div className="">
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="bg-[#2d0bb5] w-[70%] text-white text-sm placeholder-white border-b-2 border-white placeholder:text-xs"
            />
          </div>

          <div className="">
            <input
              type="text"
              placeholder="Mobile"
              required
              onChange={(e) => setNumber(e.target.value)}
              value={phone}
              className="bg-[#2d0bb5] w-[70%] text-white text-sm placeholder-white border-b-2 border-white placeholder:text-xs"
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Email id"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-[#2d0bb5] w-[70%] text-white text-sm placeholder-white border-b-2 border-white placeholder:text-xs"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Gender"
              required
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              className="bg-[#2d0bb5] w-[70%] text-white text-sm placeholder-white border-b-2 border-white placeholder:text-xs"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Collection Type"
              required
              onChange={(e) => setCollection(e.target.value)}
              value={collection}
              className="bg-[#2d0bb5] w-[70%] text-white text-sm placeholder-white border-b-2 border-white placeholder:text-xs"
            />
          </div>
          <div>
            <input
              type="datetime-local"
              placeholder="Date and time"
              required
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className="bg-[#2d0bb5] w-[70%] text-white text-sm placeholder-white border-b-2 border-white placeholder:text-xs"
            />
          </div>
        </div>

        <div className="py-8 flex justify-center items-center">
          <button
            type="submit"
            className="bg-white hover:bg-blue-300 text-[#2d0bb5] font-semibold py-2 px-4 rounded-full"
          >
            Enquire Now
          </button>
        </div>
      </form>
    </div>
  );
}

import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./Popup.css";

export default function Modal(props) {
  // console.log("I am running");

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  if (!props.open) return null;
  const onSubmit = (data) => {
    const postData = {
      Test: data.test,
      Patient_Name: data.name,
      Email_id: data.email,
      Gender: data.gender,
      Mobile: data.mobile,
      Collection_type: data.type,
      Date: data.date,
      Time: data.time,
    };
    const success = document.getElementById("success");
    success.style.display = "block";
    setTimeout(() => {
      success.style.display = "none";
    }, 4000);

    axios
      .post(
        "https://sheet.best/api/sheets/f935b9d9-4400-489a-8b5f-5eed992f2e2c",
        postData
      )
      .then((response) => {
        console.log(response);
      });
  };

  console.log(error);

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed border-b-2 border-transparent top-0 left-0 right-0 bottom-0 bg-black/70 z-[1000] "
        onClick={props.handleClick}
      />
      <div className="fixed border-b-2 border-transparent rounded-lg w-[40%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white p-[50px] z-[1000]">
        <button
          onClick={props.handleClick}
          className="border-gray-300 bg-secondary text-white font-bold border-2 w-[40px] h-[40px] rounded-full fixed right-[calc(10%_-_75px)] top-[calc(10%_-_65px)] hover:bg-primary transition ease-out duration-500"
        >
          X
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* test selected by user  */}
          <label className="font-bold text-gray-500 text-lg px-2">
            Selected Test
          </label>

          <div className="flex justify-center p-1">
            <input
              className=" px-2 w-[200%] h-[50px] border-gray-400 rounded border-[1px]"
              type="text"
              id="test"
              name="test"
              value={props.selectedTest}
              placeholder="Selected Test"
              required
              {...register("test")}
            />
          </div>

          {/* second row name and email */}
          <div className="flex justify-between">
            <div className="flex justify-center p-1">
              <input
                className="mt-4 px-2 h-[50px] border-gray-400 rounded border-[1px]"
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
                {...register("name")}
              />
            </div>
            <div className="flex justify-center p-1">
              <input
                className="mt-4 px-2 h-[50px] border-gray-400 rounded border-[1px]"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                // required
                {...register("email")}
              />
            </div>
          </div>

          {/* third row  */}
          <div className="flex justify-between">
            {/* dropdown for gender */}
            <div className="flex justify-center p-1">
              <select
                className="mt-4 px-2 h-[50px] border-gray-400 rounded border-[1px]"
                // type="text"
                id="gender"
                name="gender"
                placeholder="gender"
                required
                {...register("gender")}
              >
                <option className="" value="NULL">
                  Select Gender
                </option>
                <option className="" value="lab visit">
                  Male
                </option>
                <option className="" value="home collection">
                  Female
                </option>
              </select>
            </div>
            <div className="flex justify-center p-1">
              <input
                className="mt-4 px-2 h-[50px] border-gray-400 rounded border-[1px]"
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="mobile"
                required
                {...register("mobile")}
              />
            </div>
          </div>

          {/* dropdown for collection type */}
          <div className="flex justify-center p-1">
            <select
              className="mt-4 px-2 w-[200%] h-[50px] border-gray-400 rounded border-[1px]"
              // type="text"
              id="type"
              name="type"
              placeholder="type"
              // required
              {...register("type")}
            >
              <option className="" value="NULL">
                Select Collection Type
              </option>
              <option className="" value="lab visit">
                Diagnotic centre
              </option>
              <option className="" value="home collection">
                Home Collection
              </option>
            </select>
          </div>

          {/* last row  */}
          <div className="flex justify-between">
            {/* calendar for selecting date */}
            <div className="flex justify-center p-1">
              <input
                className="mt-4 px-2  h-[50px] border-gray-400 rounded border-[1px]"
                type="date"
                id="date"
                name="date"
                placeholder="date"
                required
                {...register("date")}
              />
            </div>
            {/* dropdown for selecting time  */}
            <div className="flex justify-center p-1">
              <input
                className="mt-4 px-2 h-[50px] border-gray-400 rounded border-[1px]"
                type="time"
                id="time"
                name="time"
                placeholder="time"
                // required
                {...register("time")}
              />
            </div>
          </div>

          {/* Submit button  */}
          <div className="flex justify-center">
            <button
              className="mt-10 px-10 py-2 h-auto text-lg rounded-lg border-transparent bg-secondary border-2 text-white font-semibold hover:bg-primary transition ease-out duration-500"
              type="submit"
            >
              Book Now
            </button>
          </div>
          <div className="message flex justify-center items-center pt-[5%]">
            <div className="success" id="success">
              Form Submitted Successfully!!
            </div>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

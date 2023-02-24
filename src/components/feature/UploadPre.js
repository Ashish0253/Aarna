import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./UploadPres.css";

export default function Upload() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = (data) => {
    const postData = {
      Name: data.name,
      Email: data.email,
      Number: data.number,
    };
    const success = document.getElementById("success");
    success.style.display = "block";
    setTimeout(() => {
      success.style.display = "none";
    }, 4000);

    axios
      .post(
        "https://sheet.best/api/sheets/fc0855fc-ca9f-4f7c-bb84-bcdf48cefab0",
        postData
      )
      .then((response) => {
        console.log(response);
      });
    console.log(data);
  };

  return (
    <div className=" container mx-[120px] mt-10 mb-20 border-2 border-transparent drop-shadow-md bg-[#FFFFFF]  p-8 rounded-lg">
      <div className=" my-4 text-3xl font-bold">Collection Query Form</div>
      <p>
        Hi there. Don't know which test/package to choose from? Nothing to worry
        about! Please fill in the details below and someone from our team will
        call back for collection confirmation
      </p>
      <p className="font-bold">
        <p className="text-red-700 inline">Note:</p> Fields marked with * are
        mandatory.
      </p>
      <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2">
          <div className="m-4">
            <label className="font-bold">Patient Name *</label>
            <br></br>
            <input
              className="mt-2 px-4 w-[85%] h-[50px] border-gray-400 rounded border-[1px]"
              type="text"
              {...register("name")}
              required
            />
          </div>
          <div className="m-4">
            <label className="font-bold">E-mail</label>
            <br></br>
            <input
              className="mt-2 px-4 w-[85%] h-[50px] border-gray-400 rounded border-[1px]"
              type="text"
              {...register("email")}
            />
          </div>
          <div className="m-4">
            <label className="font-bold">Phone Number *</label>
            <input
              className="mt-2 px-4 w-[85%] h-[50px] border-gray-400 rounded border-[1px]"
              type="text"
              {...register("number")}
              required
            />
          </div>
          <div className="m-4">
            <label className="font-bold">
              Attach Prescription *<br></br>
            </label>
            <input className="mt-2" type="file" required />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="drop-shadow-md mt-6 mx-4 w-[20%] text-lg rounded-lg border-transparent bg-secondary border-2 py-1 px-5 text-white font-semibold hover:bg-primary transition ease-out duration-500"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className="message flex justify-center items-center pt-[5%]">
          <div className="success" id="success">
            Form Submitted Successfully!!
          </div>
        </div>
      </form>
    </div>
  );
}

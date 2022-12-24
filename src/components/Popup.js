import React from "react";
import ReactDOM from "react-dom";
// import mobIcon from "../Assets/mobile-phone.png";

export default function Modal(props) {
  if (!props.open) return null;

  return ReactDOM.createPortal(
    <div>
      <div className="fixed border-b-2 border-black rounded-md top-0 left-0 right-0 bottom-0 bg-black/70 z-1000" />
      <div className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white p-[50px] z-[1000]">
        <button
          onClick={props.handleClose}
          className="border-gray-300 bg-red-600 text-white font-bold border-2 w-[40px] h-[40px] rounded-full fixed right-[calc(10%_-_75px)] top-[calc(10%_-_50px)]"
        >
          X
        </button>

        <form>
          <div>
            <input
              className="mt-10 mx-4 w-[500px] h-[50px] border-gray-400 rounded border-[1px] bg-[url('components/mobile-phone.png')] bg-no-repeat bg-contain"
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your Mobile No. *"
              required
            ></input>
          </div>
          <br></br>
          <input
            className="mt-2 mx-4 mb-6 w-[500px] h-[50px] border-gray-400 rounded border-[1px]"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name *"
            required
          ></input>{" "}
          <br></br>
          <div className="mt-6 p-4 inline">
            <input
              type="checkbox"
              id="bloodTest"
              name="bloodTest"
              value="bloodTest"
            ></input>
            <label for="bloodTest" className="m-2 text-gray-400">
              Blood Test
            </label>
          </div>
          <div className="m-4 inline">
            <input type="checkbox" id="scan" name="scan" value="scan"></input>
            <label for="scan" className="m-2 text-gray-400">
              MRI/CT Scan/X-Ray etc
            </label>
          </div>
          <div>
            <button
              className="mt-6 mx-4 w-[500px] h-auto text-lg rounded border-transparent bg-[#ee5152] border-2 py-1 px-5 text-white font-semibold hover:bg-red-600 transition ease-out duration-500"
              type="submit"
            >
              Get Free Call Now
            </button>
          </div>
          <br></br>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

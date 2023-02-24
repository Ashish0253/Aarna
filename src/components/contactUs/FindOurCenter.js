import React from "react";
import { AiFillStar } from "react-icons/ai";
import Aarna_img from "../../Assets/contact-us/Aarna Img.jpg";
import Map from "../Map";

export default function FindOurCenter() {
  return (
    <div className="Location-box z-[10]">
      <div
        className="text-[#1d0092] text-5xl tracking-wide
 font-black pb-4 flex justify-center items-center"
      >
        Find Our Center
      </div>

      <div className="md:grid md:grid-cols-3 gap-10 p-8 px-20">
        <div className="bg-white rounded-2xl border-2 overflow-hidden border-[#1d0092] img-box z-[1]">
          <img className="" src={Aarna_img} alt="aarna img"></img>
          <div className="px-4">
            <h1 className="">Aarna Diagnostic Centre</h1>
            <p className="text-xs">आरना डायग्नोस्टिक सेंटर</p>
            <div className="flex items-center text-slate-400 text-sm">
              4.8
              <AiFillStar className="text-yellow-300 inline" />
              <AiFillStar className="text-yellow-300 inline" />
              <AiFillStar className="text-yellow-300 inline" />
              <AiFillStar className="text-yellow-300 inline" />
              <AiFillStar className="text-gray-300 inline" />
              (1631)
            </div>
            <p className="text-slate-500 text-sm">Diagnostic Center</p>
          </div>
        </div>

        <div className="col-span-2 flex justify-center items-center map-box z-[1]">
          <Map class="rounded-2xl border-2 overflow-hidden border-[#1d0092] w-full h-full" />
          {/* <iframe
            className="rounded-2xl border-2 overflow-hidden border-[#1d0092] w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13779.475194270397!2d78.0274353!3d30.2977965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092978849052d9%3A0xe74fb09a1c56420e!2sAarna%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1676481627223!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="aarna map"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}

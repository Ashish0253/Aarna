import React from "react";
import "./ContactUs.css";
import MessageForm from "./MessageForm";
import FindOurCenter from "./FindOurCenter";

export default function ContactUs() {
  return (
    <div>
      <div className="grey-box bg-[#eeeeee] px-20 pt-20 relative">
        {/* Yaha par white wala block ka kaam */}
        <div className="bg-[#ffffff]">
          {/* form */}
          <div className="p-20 md:grid md:grid-cols-2 gap-4">
            <div className="pt-10">
              <h1
                className="text-[#1d0092] text-5xl tracking-wide
 font-black pb-4 flex justify-center items-center"
              >
                Contact Us
              </h1>
              <div className="flex justify-center items-center text-lg">
                <a href="tel:+91 9997579898">+91 9997579898</a>
              </div>
              <div className="flex justify-center items-center text-lg">
                <a href="mailto:rajput.anil49@yahoo.com">
                  rajput.anil49@yahoo.com
                </a>
              </div>
            </div>
            <div className="bg-[#2d0bb5] rounded-lg">
              <MessageForm />
            </div>
          </div>
          {/* location */}
          <FindOurCenter />
        </div>
        {/* Yaha par blue wala block line aayegi */}
        <div className="blue-box bg-[#2d0bb5] w-full h-[10%] absolute bottom-[0] z-[0] left-[0]"></div>
      </div>
    </div>
  );
}

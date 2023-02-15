import React from "react";
import "./ContactUs.css";
import MessageForm from "./MessageForm";

export default function ContactUs() {
  return (
    <div>
      <div className="bg-[#eeeeee] px-20 pt-20">
        {/* Yaha par white wala block ka kaam */}
        <div className="bg-[#ffffff]">
          {/* form */}
          <div className="p-20 grid grid-cols-2 gap-4">
            <div className="pt-10">
              <h1
                className="text-[#1d0092] text-4xl tracking-wide
 font-black pb-4 flex justify-center items-center"
              >
                Contact Us
              </h1>
              <div className="flex justify-center items-center">
                <a href="tel:+91 9997579898">+91 9997579898</a>
              </div>
              <div className="flex justify-center items-center">
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
          <div>
            <div
              className="text-[#1d0092] text-4xl tracking-wide
 font-black pb-4 flex justify-center items-center"
            >
              Find Our Center
            </div>

            <div className="grid grid-cols-3 gap-10 p-20">
              <div>
                <img
                  className="rounded-2xl border-2 overflow-hidden border-[#1d0092]"
                  src="https://lh3.googleusercontent.com/p/AF1QipNwdLo61eCCh-PM9tvC7Bd1Jvw_a1_R_9lTzfBd=s1360-w1360-h1020"
                  alt="aarna img"
                ></img>
              </div>
              <div className="col-span-2 flex justify-center items-center">
                <iframe
                  className="rounded-2xl border-2 overflow-hidden border-[#1d0092]"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13779.475194270397!2d78.0274353!3d30.2977965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092978849052d9%3A0xe74fb09a1c56420e!2sAarna%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1676481627223!5m2!1sen!2sin"
                  width="500"
                  height="300"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="aarna map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Yaha par blue wala block line aayegi */}
      <div className="bg-[#2d0bb5] h-10"></div>
    </div>
  );
}

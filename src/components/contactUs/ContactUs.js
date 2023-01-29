import React from "react";
import "./ContactUs.css";
import MessageForm from "./MessageForm";
// import sky from "../../Assets/contact-us/sky.png";

export default function ContactUs() {
  return (
    <div>
      <div className="bg-img h-96 text-center py-48 text-white text-2xl md:text-4xl font-bold font-mono italic tracking-wider">
        Let's have a word.
      </div>
      {/* <div className="container w-full">
        <img alt="sky" src={sky} className="w-full"></img>
        <div className="heading">
          <h1 className="text-white text-2xl md:text-4xl font-bold font-mono italic tracking-wider	">
            Let's have a word.
          </h1>
        </div>
      </div> */}

      <div className="grid grid-cols-3">
        {/* map */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9607.637155097846!2d78.02112001556706!3d30.2975111041506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092978849052d9%3A0xe74fb09a1c56420e!2sAarna%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1674470150500!5m2!1sen!2sin"
            className="w-full map"
            height={384}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Aarna"
          ></iframe>
        </div>

        {/* contact us  */}
        <div className="pt-20 pl-10 h-96">
          <h1 className="py-10 text-bold text-4xl font-mono tracking-wide">
            Contact Us
          </h1>
          <div className="py-3 flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#63C7FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-phone-call"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p>+91 9997579898</p>
          </div>
          <div className="py-3 flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#63C7FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-at-sign"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
            </svg>
            <p>rajput.anil49@yahoo.com</p>
          </div>
          <div className="py-3 flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#63C7FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-map-pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p>86, Adarsh Vihar, Kargi - Patel Nagar Bypass</p>
          </div>
        </div>

        <div className="bg-[#eaeaea]">
          <MessageForm />
        </div>
      </div>
    </div>
  );
}

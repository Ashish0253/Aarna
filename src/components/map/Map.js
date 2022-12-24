import React from "react";

export default function Map() {
  return (
    <div>
      <iframe
        className="w-full h-[750px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.868799207296!2d78.02524661493497!3d30.29779648179095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092978849052d9%3A0xe74fb09a1c56420e!2sAarna%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1671900119264!5m2!1sen!2sin"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        title="map"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

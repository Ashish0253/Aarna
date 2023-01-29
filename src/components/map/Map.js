import React from "react";

export default function Map() {
  return (
    <div>
      <iframe
        className="w-full h-[650px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.868799207296!2d78.02524661493497!3d30.29779648179095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092978849052d9%3A0xe74fb09a1c56420e!2sAarna%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1671900119264!5m2!1sen!2sin"
        // src="https://www.google.com/maps/d/embed?mid=1CJeM_X2V5bxL2WtcIDYK2dmzpt2Dm8U&ehbc=2E312F"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

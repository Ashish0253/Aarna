import React from "react";
import ScanTemplate from "./Scan_Template";
import scanContent from "./content";

export default function Ultrasound() {
  return (
    <ScanTemplate
      scanName={scanContent[1].title}
      scanPrice={scanContent[1].price3}
      scanDesc={scanContent[1].description}
    />
  );
}

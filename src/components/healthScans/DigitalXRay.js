import React from "react";
import ScanTemplate from "./Scan_Template";
import scanContent from "./content";

export default function DigitalXRay() {
  return (
    <ScanTemplate
      scanName={scanContent[2].title}
      scanPrice={scanContent[2].price3}
      scanDesc={scanContent[2].description}
    />
  );
}

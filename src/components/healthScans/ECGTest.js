import React from "react";
import ScanTemplate from "./Scan_Template";
import scanContent from "./content";

export default function ECGTest() {
  return (
    <ScanTemplate
      scanName={scanContent[3].title}
      scanPrice={scanContent[3].price3}
      scanDesc={scanContent[3].description}
    />
  );
}

import React from "react";
import ScanTemplate from "./Scan_Template";
import scanContent from "./content";

export default function CTScan() {
  return (
    <ScanTemplate
      scanName={scanContent[0].title}
      scanPrice={scanContent[0].price3}
      scanDesc={scanContent[0].description}
    />
  );
}

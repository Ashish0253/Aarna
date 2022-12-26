import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
// import Departments from "./department/Departments";
// import Stickyfooter from "./footer/Stickyfooter";
import Map from "./map/Map";
import Packages from "./packages/Packages";
import Testimonials from "./testimonials/Testimonials";
// import BodyParts from "./bodyParts/BodyParts";
import Carousel from "./carousel/Carousel";

function App() {
  return (
    <div className="font-body">
      <Header />
      <Carousel />
      {/* <BodyParts /> */}
      <Packages />
      <Testimonials />
      <Map />
      <Footer />
      {/* <Stickyfooter /> */}
    </div>
  );
}

export default App;

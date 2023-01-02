import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Departments from "../department/Departments";
// import Stickyfooter from "./footer/Stickyfooter";
import Map from "../map/Map";
import Packages from "../packages/Packages";
import Testimonials from "../testimonials/Testimonials";
// import BodyParts from "./bodyParts/BodyParts";
import Carousel from "../carousel/Carousel";
import HealthScans from "../healthScans/HealthScans";
import Navbar from "../navbar/Navbar";
// import ReactCustomArrow from "./packages/Trial";
import Feature from "../feature/Feature";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";

function App() {
  return (
    <div className="font-body">
      <Header />
      <Navbar />
      <Carousel />
      <Feature />
      {/* <BodyParts /> */}
      <Packages />
      <Departments />
      <HealthScans />
      <WhyChooseUs />
      <Testimonials />
      <Map />
      <Footer />
      {/* <Stickyfooter /> */}
    </div>
  );
}

export default App;

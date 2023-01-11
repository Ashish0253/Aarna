import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Departments from "../department/Departments";
import Map from "../map/Map";
import Packages from "../packages/Packages";
import Testimonials from "../testimonials/Testimonials";
import Carousel from "../carousel/Carousel";
import HealthScans from "../healthScans/HealthScans";
import Navbar from "../navbar/Navbar";
import Feature from "../feature/Feature";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";

import ContactUs from "../contactUs/ContactUs";

function App() {
  return (
    <Router>
      <div className="font-body">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <home>
      <Carousel />
      <Feature />
      <Packages />
      <Departments />
      <HealthScans />
      <WhyChooseUs />
      <Testimonials />
      <Map />
    </home>
  );
}

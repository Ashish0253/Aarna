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

import BookTest from "../bookatest/BookTest";

import Doctors from "../doctors/Doctors";

import Radiology from "../radiology/Radiology";
import Pathology from "../pathology/Pathology";

import CTScan from "../ctScan/CTScan";
import Ultrasound from "../ultrasound/Ultrasound";
import DigitalXRay from "../digitalXray/DigitalXRay";
import ECGTest from "../ecgTest/ECGTest";

import UrineTest from "../healthPackages/UrineTest";
import ArthritisTest from "../healthPackages/ArthritisTest";
import ThyroidTest from "../healthPackages/ThyroidTest";
import DiabetesTest from "../healthPackages/DiabetesTest";

function App() {
  return (
    <Router>
      <div className="font-body">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/bookatest" element={<BookTest />} />
          <Route exact path="/doctors" element={<Doctors />} />

          <Route exact path="/radiology" element={<Radiology />} />
          <Route exact path="/pathology" element={<Pathology />} />

          <Route exact path="/ctscan" element={<CTScan />} />
          <Route exact path="/ultrasound" element={<Ultrasound />} />
          <Route exact path="/digitalxray" element={<DigitalXRay />} />
          <Route exact path="/ecgtest" element={<ECGTest />} />

          <Route exact path="/urinetest" element={<UrineTest />} />
          <Route exact path="/arthritistest" element={<ArthritisTest />} />
          <Route exact path="/thyroidtest" element={<ThyroidTest />} />
          <Route exact path="/diabetestest" element={<DiabetesTest />} />
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

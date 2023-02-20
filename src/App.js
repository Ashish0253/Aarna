import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Doc1 from "./components/doctors/Doc1";
import Doc2 from "./components/doctors/Doc2";
import Doc3 from "./components/doctors/Doc3";
import Doc4 from "./components/doctors/Doc4";

import Radiology from "./components/department/Radiology";
import Pathology from "./components/department/Pathology";

import CTScan from "./components/scans/CTScan";
import Ultrasound from "./components/scans/Ultrasound";
import DigitalXRay from "./components/scans/DigitalXRay";
import ECGTest from "./components/scans/ECGTest";

import UrineTest from "./components/healthPackages/UrineTest";
import ArthritisTest from "./components/healthPackages/ArthritisTest";
import ThyroidTest from "./components/healthPackages/ThyroidTest";
import DiabetesTest from "./components/healthPackages/DiabetesTest";

import * as ROUTES from "./constants/routes";

const Home = lazy(() => import("./pages/home"));
const BookTest = lazy(() => import("./pages/bookTest"));
const Packages = lazy(() => import("./pages/packages"));
const Departments = lazy(() => import("./pages/departments"));
const Scans = lazy(() => import("./pages/scans"));
const Doctors = lazy(() => import("./pages/doctors"));
const ContactUs = lazy(() => import("./pages/contactUs"));

const UploadPre = lazy(() => import("./pages/uploadpre"));

export default function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Router>
      <Suspense fallback={<p>Loading....</p>}>
        <div className="font-body">
          <Header />
          <Navbar />
          <Routes>
            {/* navbar routes */}
            <Route exact path={ROUTES.HOME} element={<Home />} />
            <Route exact path={ROUTES.BOOK_TEST} element={<BookTest />} />
            <Route exact path={ROUTES.PACKAGES} element={<Packages />} />
            <Route exact path={ROUTES.DEPARTMENTS} element={<Departments />} />
            <Route exact path={ROUTES.SCANS} element={<Scans />} />
            <Route exact path={ROUTES.DOCTORS} element={<Doctors />} />
            <Route exact path={ROUTES.CONTACT_US} element={<ContactUs />} />

            {/* other routes */}
            <Route exact path="/doctors/1" element={<Doc1 />} />
            <Route exact path="/doctors/1" element={<Doc1 />} />
            <Route exact path="/doctors/2" element={<Doc2 />} />
            <Route exact path="/doctors/3" element={<Doc3 />} />
            <Route exact path="/doctors/4" element={<Doc4 />} />

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

            <Route
              exact
              path={ROUTES.UPLOAD_PRESCRIPTION}
              element={<UploadPre />}
            />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Departments from "./department/Departments";
import Stickyfooter from "./footer/Stickyfooter";

function App() {
  return (
    <div>
      <Header />
      <Departments />
      <Footer />
      <Stickyfooter />
    </div>
  );
}

export default App;

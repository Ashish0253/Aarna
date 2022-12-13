import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="row">
        {/* column 1 */}
        <div className="col">
          <h1>Aarna</h1>

          <ul>
            <li>logo</li>
            <li>location</li>
            <li>phone number</li>
            <li>email</li>
          </ul>
        </div>

        {/* column 2 */}
        <div className="col">
          <h1>Departments</h1>
          <hr />
          <ul>
            <li>Radiology</li>
            <li>Pathology</li>
          </ul>
        </div>

        {/* column 3 */}
        <div className="col">
          <h1>Quick Links</h1>
          <hr />
          <ul>
            <li>Services</li>
            <li>Doctors</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* column 4 */}
        <div className="col">
          <h1>Opening Hours</h1>
          <hr />
          <ul>
            <li>Open 24x7</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

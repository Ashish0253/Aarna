import React from "react";
import Logo from "../../Assets/dark-logo.png";

function Footer() {
  return (
    <footer className="">
      <div className="grid grid-cols-4 text-white bg-footerPrimary p-5">
        {/* column 1 */}
        <div className="col">
          <img src={Logo} alt="Aarna logo" className="w-10/12 h-auto" />

          <ul>
            <li className="m-4 text-sm font-semibold pb-6">
              Aarna is committed to addressing the medical community’s evolving
              and ever increasing diagnostic needs.
            </li>
            <li className="m-4">
              <svg
                className="inline-block w-6 m-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              86, Adarsh Vihar, Kargi
            </li>
            <li className="m-4">
              {" "}
              <svg
                className="inline-block w-6 m-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +91 9997579898
            </li>
            <li className="m-4">
              {" "}
              <svg
                className="inline-block w-6 m-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              rajput.anil49@yahoo.com
            </li>
          </ul>
        </div>

        {/* column 2 */}
        <div className="m-6 px-12">
          <h1 className="font-semibold text-3xl m-2 border-b-4 py-4 w-1/3">
            Departments
          </h1>
          <ul className="p-2">
            <li className="mb-2">Radiology</li>
            <li className="mb-2">Pathology</li>
          </ul>
        </div>

        {/* column 3 */}
        <div className="m-6 ">
          <h1 className="font-semibold text-3xl m-2 border-b-4 py-4 w-3/5">
            Quick Links
          </h1>
          <ul className="p-2">
            <li className="mb-2">Services</li>
            <li className="mb-2">Doctors</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Privacy Policy</li>
          </ul>
        </div>

        {/* column 4 */}
        <div className="m-6">
          <h1 className="font-semibold text-3xl m-2 border-b-4 py-4 w-2/3">
            Opening Hours
          </h1>
          <ul className="p-2">
            <li className="mb-2">Open 24x7</li>
          </ul>
        </div>
      </div>

      <div className="bg-footerSecondary grid grid-cols-2 ">
        <div></div>
        <div className="text-white font-semibold grid justify-end m-6">
          <div className="m-2">Stay Informed and Healthy</div>
          <form>
            <input
              type="text"
              id="email"
              name="email"
              maxLength="10"
              placeholder="enter your email"
              className="rounded"
            ></input>
          </form>
          <button type="submit" className="bg-footerPrimary m-4 rounded">
            SignUp
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

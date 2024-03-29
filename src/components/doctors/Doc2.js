import React from "react";
import "./doctor.css";

export default function Doc2() {
  return (
    <div>
      {/* Header details section for doctor */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-10 doc_info_header">
        <div className="flex justify-center">
          <img
            alt=""
            src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
            className="rounded-full w-60 h-60"
          />
        </div>

        <div className="sm:col-span-2">
          <h1 className="py-4 text-2xl font-semibold text-[#f8f8f8] underline underline-offset-4">
            Dr Poonam Rajput
          </h1>
          <p className="text-lg font-medium text-[#f8f8f8]">
            Department: Director
          </p>
          <p className="text-lg font-medium text-[#f8f8f8]">Gender: Female</p>
          <p className="text-lg font-medium text-[#f8f8f8]">
            Location: Dehradun
          </p>
        </div>
      </div>

      {/* Work Experience */}
      <div className="p-10">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xl font-semibold text-[#1a0f69] uppercase bg-white dark:bg-white dark:text-[#1a0f69]">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Place of Employment
                </th>
                <th scope="col" class="px-6 py-3">
                  Post
                </th>
                <th scope="col" class="px-6 py-3">
                  Tenure
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-blue-400"
                >
                  Aarna Diagnostics Centre
                </th>
                <td class="px-6 py-4">Director</td>
                <td class="px-6 py-4">12+ Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Special Interests */}
      <div className="p-10 bg-[#f0efef]">
        <h1 className="text-3xl font-bold text-[#1a0f69] py-5">
          Special Interests
        </h1>

        <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Vast experience in general clinical practice</span>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>
              Skilled at formulating plan of treatment for patient’s teeth and
              mouth tissue
            </span>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Ability to perform dentistry for patients</span>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>
              Ability to write prescriptions for antibiotics and other
              medications
            </span>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>
              Ability to advise and instruct patients regarding preventive
              dental care
            </span>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>
              Proficient with dental instruments, x-rays, and other diagnostic
              equipment
            </span>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>
              Familiarity with OSHA standards, JCAHO, local ordinances, and
              state and federal laws applicable to assigned dental clinic
            </span>
          </li>
          <li class="flex items-center space-x-3">
            {/* <!-- Icon --> */}
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Excellent written and verbal communication skills</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

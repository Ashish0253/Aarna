import React from "react";
import "./doctor.css";

export default function Doc3() {
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
            Dr. Ravina Solanki
          </h1>
          <p className="text-lg font-medium text-[#f8f8f8]">
            Department: D.N.B Radio-Diagnosis
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
                  Dr. B. L. Kapur Super Speciality Hospital,New Delhi
                </th>
                <td class="px-6 py-4">Resident</td>
                <td class="px-6 py-4">MAR 2016 TO MAR 2019</td>
              </tr>
              <tr class="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-blue-400"
                >
                  Venkateshwar Hospital, Dwarka, New Delhi
                </th>
                <td class="px-6 py-4">Senior Resident</td>
                <td class="px-6 py-4">JUL 2019 TO MAR 2020</td>
              </tr>
              <tr class="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-blue-400"
                >
                  Aakash Healthcare: Super Speciality Hospital
                </th>
                <td class="px-6 py-4">Attending consultant</td>
                <td class="px-6 py-4">MAR 2020 TO SEP 2021</td>
              </tr>
              <tr class="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-blue-400"
                >
                  AIIMS RISHIKESH{" "}
                </th>
                <td class="px-6 py-4">PDCC senior residency IBCC</td>
                <td class="px-6 py-4">March 2022 to August 2022</td>
              </tr>
              <tr class="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-blue-400"
                >
                  Aarna Diagnostics centre{" "}
                </th>
                <td class="px-6 py-4">D.N.B Radio-Diagnosis </td>
                <td class="px-6 py-4">August 2022 onwards</td>
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
            <span>
              Fourth AIIMS MAMC PGI Imaging Course Series on Advances in Imaging
              Technology, April 2019
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
              Interventional Radiology Conference by Delhi State Chapter of
              IRIA, August 2018
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
            <span>Seventh Radiology Hot seat Review Course, August 2018</span>
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
              IFUMB Mid Term CME dedicated to Gynecology Ultrasound And Imaging,
              August 2018
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
              AIIMS Radiology Course: Imaging In Chest Infections, August 2018
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
              IJRI Workshop on Publishing Radiology Manuscript, July 2018{" "}
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
              Oncology Imaging & Interventions 2018 at Delhi State Cancer
              Institute, May 2018{" "}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

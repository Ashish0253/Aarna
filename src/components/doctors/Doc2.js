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
            Ayi Ayi yo subramanyam
          </h1>
          <p className="text-lg font-medium text-[#f8f8f8]">
            Department: BOhot hard hai bhai
          </p>
          <p className="text-lg font-medium text-[#f8f8f8]">
            Gender: Jo marzi tujhe kya bc
          </p>
          <p className="text-lg font-medium text-[#f8f8f8]">
            Location: Dun ghati
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
                  Place of Emplpoyment
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
                  AIIMS DELHI
                </th>
                <td class="px-6 py-4">Senior Doctor</td>
                <td class="px-6 py-4">1999-2001</td>
              </tr>
              <tr class="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-blue-400"
                >
                  Aarna Diagnostics
                </th>
                <td class="px-6 py-4">Radiologist</td>
                <td class="px-6 py-4">2003-present</td>
              </tr>
              <tr class="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-blue-400"
                >
                  Lal path labs
                </th>
                <td class="px-6 py-4">Pahtologist</td>
                <td class="px-6 py-4">2001-2003</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Special Interests */}
      <div className="p-10">
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
              Trained in molecular techniques including FISH, PCR from Tata
              Memorial Hospital, Mumbai
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
            <span>Trained in Immunohistochemistry and frozen biopsies</span>
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
            <span>Breast pathology, Oncopathology, Molecular Pathology</span>
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
              Experience in lab management and Molecular Lab setup.
              Standardization and Validation of FISH panels and PCR tests
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
              Thesis topic: A clinicopathological study on Chronic Myeloid
              leukemia in NEIGRIHMS.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

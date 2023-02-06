import React from "react";
import "./doctor.css";

export default function Doc1() {
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
            Dr. ANIL RAJPUT
          </h1>
          <p className="text-lg font-medium text-[#f8f8f8]">
            Department: Pathology
          </p>
          <p className="text-lg font-medium text-[#f8f8f8]">Gender: Male</p>
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
                  Shri Guru Ram Rai Institute of Medical & Health Sciences
                </th>
                <td class="px-6 py-4">Resident Medical Officer</td>
                <td class="px-6 py-4">3 Years </td>
              </tr>
              <tr class="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-blue-400"
                >
                  Aarna Diagnostic Centre
                </th>
                <td class="px-6 py-4">Consultant Pathologist </td>
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
            <span>
              As medical officer, was responsible for OPD & Emergency Services
              as well as active participation in national programs such as Pulse
              polio immunization program, routine vaccination programs,
              blindness control programs, antenatal and postnatal care services.
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
              As a consultant Pathologist, was responsible not only for my
              domain i.e. Pathology, serology and Molecular Biology but also for
              Clinical pathology, routine Hematology and routine Biochemistry.
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
              Training of all Healthcare staff including doctors, nurses,
              Technicians, housekeeping staff and attendants to maintain NABH
              standards.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

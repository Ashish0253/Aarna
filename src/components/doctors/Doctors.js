/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import content from "./doc_data";

export default function DoctorsInfo() {
  return (
    <div className="pt-20 px-28">
      <h1 className="text-center mb-20 text-5xl font-bold text-[#1a0e69]">
        Our Doctors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
        {content.map((item) => {
          return (
            <Link to={item.id.toString()} key={item.id}>
              <div className="rounded-xl pb-3 overflow-hidden bg-slate-900">
                <div>
                  <a href="">
                    <img
                      src={item.src}
                      alt={item.id}
                      className="h-40 sm:h-64 md:h-96 w-96"
                    />
                  </a>
                </div>
                <div className="p-3">
                  <p className="py-2 text-center text-[#f8f8f8] text-xl font-bold">
                    {item.name}
                  </p>
                  <p className="pb-3 text-center text-[#f8f8f8] font-medium">
                    {item.desc}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={item.linkedin}
                      class="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      // style={{ marginLeft: "35%" }}
                    >
                      LinkedIn
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

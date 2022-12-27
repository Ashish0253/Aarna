import React from "react";
import { content } from "./content";
import Slider from "react-slick";
import "./Packages.css";
// import { AiOutlineArrowLeft } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Packages() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
  
    <div className="px-[100px] py-[120px] bg-[#BFEAF5]">
      <h1 className="text-center font-bold mb-10 text-5xl">Popular Packages</h1>

      <Slider {...settings}>
        {content.map((item) => {
          return (
            <div className="relative rounded-3xl p-10 h-[480px] w-[200px] overflow-hidden shadow-sm border-2 border-transparent bg-white hover:drop-shadow-lg transition ease-out-300">
              <h1 className="font-bold text-primary text-2xl mb-2">
                {item.title}
              </h1>
              <div className="text-gray-700 text-base">
                {/* test list start */}
                <div className="">
                  <ul className="px-6 py-2 list-disc">
                    {item.tests.map((test) => {
                      return <li>{test}</li>;
                    })}
                  </ul>
                </div>
                {/* price and button start */}
                <div className=" bottom-2 absolute">
                  <div className="font-bold text-md">Normal Price:</div>{" "}
                  <div className="line-through"> {item.price}/-</div>
                  <div className="font-bold text-xl">Offer Price:</div>{" "}
                  <div className="text-xl"> {item.offerPrice}/-</div>

                  <div className="flex justify-around">
                    <button className=" text-white mt-6 font-semibold border-transparent border-2 bg-[gray] hover:bg-red-600 rounded-md px-4 py-1 hover:scale-110 ease-out duration-300">
                      Book Now
                    </button>
                    <button className="ml-[120px] text-white mt-6 font-semibold border-transparent border-2 bg-[gray] hover:bg-red-600 rounded-md px-4 py-1 hover:scale-110 ease-out duration-300">
                      Know More
                    </button>
                  </div>
                </div>
                {/* price and button end */}
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="flex justify-center mt-20">
        <button className="bg-[#205295] text-lg font-semibold border-transparent text-white px-10 py-2 rounded-md hover:bg-[#22138d] hover:scale-110 ease-out duration-300">
          View all
        </button>
      </div>
    </div>
  );
}

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", content: "<", color: "red" }}
      onClick={onClick}
    />
  );
}

import React from "react";
import { content } from "./content";
import Slider from "react-slick";
import "./Packages.css";

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
    <div className="p-[100px] bg-[#f0f8ff]">
      <h1 className="text-center mb-10 text-5xl">Popular Packages</h1>
      <Slider {...settings}>
        {content.map((item) => {
          return (
            <div className="rounded-lg p-10 h-[450px] w-[200px] overflow-hidden shadow-sm border-2 border-transparent bg-white hover:drop-shadow-lg transition ease-out-300">
              <h1 className="font-bold text-primary text-2xl mb-2">
                {item.title}
              </h1>
              <div className="text-gray-700 text-base">
                <ul className="px-6 py-2 list-disc">
                  {item.tests.map((test) => {
                    return <li>{test}</li>;
                  })}
                </ul>
                <span className=" font-bold text-md">Normal Price:</span>{" "}
                <span className="line-through"> {item.price}/-</span>
                <br></br>
                <span className="font-bold text-xl">Offer Price:</span>{" "}
                <span className="text-xl"> {item.offerPrice}/-</span>
                <br></br>
                <button className="text-white font-semibold border-transparent border-2 bg-[#fedc00] hover:bg-primary rounded px-4 py-1 hover:scale-110">
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
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

// mx-10 rounded-lg overflow-hidden shadow-md bg-cover relative p-4 hover:drop-shadow-2xl transition ease-out-300 bg-white

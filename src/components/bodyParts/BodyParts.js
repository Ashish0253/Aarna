import React from "react";
import { contents } from "./contents";
import Slider from "react-slick";
import "./BodyParts.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BodyParts() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
    <div className="p-20 bg-[#f0f8ff]">
      <h1>Slider</h1>
      <Slider {...settings}>
        {contents.map((item) => {
          return (
            <div className=" border-gray-400 border-r-2">
              <div className="flex justify-center ">
                <a href={item.href}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-20 hover:scale-110"
                  />
                </a>
              </div>
              <h4 className="flex justify-center">{item.name}</h4>
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
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

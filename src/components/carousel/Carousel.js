import React from "react";
import Slider from "react-slick";

import images from "./Images";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { ButtonBase } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { Link } from "react-router-dom";

export default function Carousel() {
  const slider = React.useRef(null);

  function RenderArrows() {
    return (
      <div className="slider-arrow-carousel">
        <ButtonBase
          className="arrow-btn-prev-carousel"
          onClick={() => slider?.current?.slickPrev()}
        >
          <ArrowCircleLeftIcon fontSize="large" sx={{ color: "black" }} />
        </ButtonBase>
        <ButtonBase
          className="arrow-btn-next-carousel"
          onClick={() => slider?.current?.slickNext()}
        >
          <ArrowCircleRightIcon fontSize="large" sx={{ color: "black" }} />
        </ButtonBase>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    // eslint-disable-next-line no-dupe-keys
    // speed: 750,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="grid grid-cols-2  ">
      <div className="relative col-span-1">
        <RenderArrows />
        <Slider ref={slider} {...settings} className="">
          {images.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={item.source}
                  alt="images"
                  className="rounded-md h-[400px]"
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="flex justify-around items-center px-20 font-bold text-primary bg-[#2d0bb5]">
        <Link>
          <button className="border-transparent border-2 rounded-lg p-4 bg-white hover:bg-[#0aee9c]">
            Book A Test
          </button>
        </Link>
        <Link>
          <button className="border-transparent border-2 rounded-lg p-4 bg-white hover:bg-[#0aee9c]">
            Nearest Centre
          </button>
        </Link>
        <Link>
          <button className="border-transparent border-2 rounded-lg p-4 bg-white hover:bg-[#0aee9c]">
            Upload Prescription
          </button>
        </Link>
      </div>
    </div>
  );
}

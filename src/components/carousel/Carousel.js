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

      <div className=" font-bold grid grid-rows-2 text-primary bg-[#2d0bb5]">
        <div className="text-5xl flex items-end py-4 px-[100px] text-[#0aee9c]">
          Let's Connect
        </div>
        <div className="px-20 flex justify-around items-start">
          <Link to="/bookatest">
            <button className="border-transparent border-2 rounded-lg p-4 bg-white hover:bg-[#0aee9c]">
              Book A Test
            </button>
          </Link>
          <Link to="/#" className="font-bold">
            <button className="font-bold border-transparent border-2 rounded-lg p-4 bg-white hover:bg-[#0aee9c]">
              Nearest Centre
            </button>
          </Link>
          <Link to="/uploadprescription">
            <button className="border-transparent border-2 rounded-lg p-4 bg-white hover:bg-[#0aee9c]">
              Upload Prescription
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

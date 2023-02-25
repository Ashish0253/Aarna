import React from "react";
import Slider from "react-slick";

import * as ROUTES from "../../constants/routes";

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
    <div className="grid grid-cols-2 watermark bg-[#1a0e69] h-[500px]">
      <div className="relative col-span-1 pt-[42px] pl-5">
        <RenderArrows />
        <Slider ref={slider} {...settings} className="">
          {images.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={item.source}
                  alt="images"
                  className="rounded-r-xl border-2 border-secondary h-[450px]"
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className=" font-bold grid grid-rows-2 text-primary bg-[#1a0e69] ">
        <div className="text-5xl flex items-end py-4 px-[14%] text-[#0aee9c] z-[1]">
          Let's Connect
        </div>
        <div className="px-[10%] flex justify-around items-start z-[1]">
          <Link to={ROUTES.BOOK_TEST}>
            <button className="border-transparent border-2 rounded-lg p-4 bg-white hover:bg-[#0aee9c] ease-out duration-300">
              Book A Test
            </button>
          </Link>
          <Link to="/#" className="font-bold">
            <button className="font-bold border-transparent border-2 rounded-lg p-4 bg-white hover:bg-[#0aee9c] ease-out duration-300">
              Nearest Centre
            </button>
          </Link>
          <Link to={ROUTES.UPLOAD_PRESCRIPTION}>
            <button className="border-transparent border-2 rounded-lg p-4 bg-white hover:bg-[#0aee9c] ease-out duration-300">
              Upload Prescription
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

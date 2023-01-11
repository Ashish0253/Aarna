import React from "react";
import Slider from "react-slick";

import images from "./Images";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { ButtonBase } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function Carousel() {
  const slider = React.useRef(null);

  function RenderArrows() {
    return (
      <div className="slider-arrow-carousel">
        <ButtonBase
          className="arrow-btn-prev-carousel "
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: false,
    // eslint-disable-next-line no-dupe-keys
    speed: 700,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="w-full h-full px-0 ">
      <div className="relative">
        <RenderArrows />
        <Slider ref={slider} {...settings}>
          {images.map((item) => {
            return (
              <div>
                <img
                  src={item.source}
                  alt="images"
                  className="rounded-md h-[600px] w-full"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

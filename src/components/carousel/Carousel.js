import React from "react";
import Slider from "react-slick";

import images from "./Images";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ButtonBase } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const slider = React.useRef(null);

  function RenderArrows() {
    return (
      <div className="slider-arrow">
        <ButtonBase
          className="arrow-btn-prev"
          onClick={() => slider?.current?.slickPrev()}
        >
          <ArrowBackIosIcon fontSize="large" sx={{ color: "black" }} />
        </ButtonBase>
        <ButtonBase
          className="arrow-btn-next"
          onClick={() => slider?.current?.slickNext()}
        >
          <ArrowForwardIosIcon fontSize="large" sx={{ color: "black" }} />
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
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="w-full h-full px-0 mb-3">
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

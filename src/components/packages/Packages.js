import React from "react";
import { content } from "./content";
import Slider from "react-slick";
import "./Packages.css";
// import { AiOutlineArrowLeft } from "react-icons/ai";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ButtonBase } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Packages() {
  const slider = React.useRef(null);

  function RenderArrows() {
    return (
      <div className="slider-arrow-packages">
        <ButtonBase
          className="arrow-btn-prev-packages"
          onClick={() => slider?.current?.slickPrev()}
        >
          <ArrowBackIosIcon fontSize="large" sx={{ color: "white" }} />
        </ButtonBase>
        <ButtonBase
          className="arrow-btn-next-packages"
          onClick={() => slider?.current?.slickNext()}
        >
          <ArrowForwardIosIcon fontSize="large" sx={{ color: "white" }} />
        </ButtonBase>
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    initialSlide: 0,
    // nextArrow: <SampleArrow />,
    // prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="px-[100px] pb-[120px] pt-5 bg-white">
      <div className="m-10 pb-5">
        <h1 className="text-center font-bold text-5xl">Popular Packages</h1>
      </div>
      <div className="relative">
        <RenderArrows />
        <Slider ref={slider} {...settings}>
          {content.map((item) => {
            return (
              <div
                id="trial"
                className="relative text-white bg-[#1a0e69] bg-opacity-95 rounded-3xl p-10 h-[480px] w-[200px] overflow-hidden shadow-sm border-2 border-transparent hover:drop-shadow-lg transition ease-out-300"
              >
                <h1 className="abolute top-0 font-bold text-white text-4xl mb-2">
                  {item.title}
                </h1>
                <div className="top-[100px]absolute px-2 text-sm font-semibold">
                  Includes: {item.numberOfTests} Tests
                </div>
                <div className=" text-base">
                  {/* test list start */}
                  <div className="">
                    <ul className="px-6 py-2 list-disc">
                      {item.tests.map((test) => {
                        return <li className="p-[1px]">{test}</li>;
                      })}
                    </ul>
                  </div>

                  {/* price and button start */}
                  <div className="bottom-4 absolute">
                    <div className="font-bold text-md">Normal Price:</div>{" "}
                    <div className="line-through"> {item.price}/-</div>
                    <div className="font-bold text-xl">Offer Price:</div>{" "}
                    <div className="text-xl"> {item.offerPrice}/-</div>
                    <div className="flex justify-around">
                      <button className=" text-white mt-6 font-semibold border-white border-2  hover:bg-white hover:text-black rounded-md px-4 py-1 hover:scale-110 ease-out duration-300">
                        Book Now
                      </button>
                      <button className="ml-[120px] text-white mt-6 font-semibold border-white border-2 hover:bg-white hover:text-black rounded-md px-4 py-1 hover:scale-110 ease-out duration-300">
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
      </div>
      <div className="flex justify-center mt-20">
        <button className="z-[1]  text-lg font-semibold border-2 border-primary text-primary px-10 py-2 rounded-md hover:text-white hover:bg-primary hover:scale-110 ease-out duration-300">
          View all
        </button>
      </div>
    </div>
  );
}

// function SampleArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", content: "<", color: "red" }}
//       onClick={onClick}
//     >

//     </div>
//   );
// }

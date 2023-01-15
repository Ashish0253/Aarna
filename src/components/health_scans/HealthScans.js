import React from "react";
import Slider from "react-slick";
import Scan_content from "./Scan_content";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HealthScans() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    initialSlide: 0,
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
    <div className="bg-[#f8f8f8] p-20 pb-32">
      <h1 className="text-center mb-10 text-5xl text-[#0aa1af]">
        Health Scans
      </h1>
      <Slider {...settings}>
        {Scan_content.map((item) => {
          return (
            <div className="rounded-xl overflow-hidden shadow-lg text-center text-black bg-white pb-5">
              <img
                src={item.src}
                alt={item.alt}
                className="border-b-4 border-[#0aa1af]"
              />
              <h3 className="py-3 font-bold text-xl text-[#190e67]">
                {item.title}
              </h3>
              <h3 className="font-bold text-lg text-[#0aa1af]">
                {item.price}
                <span className="line-through	font-light">
                  {item.price2}
                </span>{" "}
                {item.price3}
              </h3>
              <p className="p-5 scan-desc">{item.description}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
export default HealthScans;

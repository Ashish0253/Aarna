import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "./Images";

/* 
buttons in carousel
make new carousel for ultrasound,etc
do work on styling mainly 
*/
function Carousel(){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        // eslint-disable-next-line no-dupe-keys
        speed: 1500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
      };

    return (
        <div className="w-full h-full">
          <Slider {...settings}>
          {
            images.map(item => {
              return (
                <div>
              <img src={item.source} alt="images" className="rounded-md h-[600px] w-full"/>
            </div>   
              )
            }
            )
          }
                   
          </Slider>
          <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

        </div>
      );
}

export default Carousel;
import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import C1 from "./C-Images/C1.png"
import C2 from "./C-Images/C2.png"
import C3 from "./C-Images/C3.jpg"
import C4 from "./C-Images/C4.jpg"
import C5 from "./C-Images/C5.jpg"


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
        pauseOnHover: true,
      };

    return (
        <div className="py-10 px-8 w-full h-full">
          <Slider {...settings}>
            <div>
              <img src={C1} alt="images" className="rounded-md h-[600px] w-full border-8 border-[#1a0e69]"/>
            </div>
            <div>
              <img src={C2} alt="images" className="rounded-md h-[600px] w-full border-8 border-[#1a0e69]"/>
            </div>
            <div>
            <img src={C3} alt="images" className="rounded-md h-[600px] w-full border-8 border-[#1a0e69]"/>
            </div>
            <div>
            <img src={C4} alt="images" className="rounded-md h-[600px] w-full border-8 border-[#1a0e69]"/>
            </div>
            <div>
            <img src={C5} alt="images" className="rounded-md h-[600px] w-full border-8 border-[#1a0e69]"/>
            </div>
            
          </Slider>
          <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

        </div>
      );
}

export default Carousel;
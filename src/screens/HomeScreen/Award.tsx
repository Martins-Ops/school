import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { achievementSlideSettings as settings } from "../../utils/exports";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";

import SectionHeader from "../../components/SectionHeader";

const data = [
  {
    image: img1,
    caption: "Best in Mathematics",
  },
  {
    image: img2,
    caption: "Best in Mathematics",
  },
  {
    image: img3,
    caption: "Best in Mathematics",
  },
  {
    image: img4,
    caption: "Best in Mathematics",
  },
  {
    image: img5,
    caption: "Best in Mathematics",
  },
  {
    image: img6,
    caption: "Best in Mathematics",
  },
  // Add more images and captions as needed
];

const SliderComponent = () => {


  return (
    <>
      <SectionHeader title="Achievements" />
      <div className="w-[80%] mx-auto mt-4">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={item.image}
                  alt="Slider Item"
                  className="w-full h-48 object-cover mb-4"
                />
                <p className="text-center text-gray-800">{item.caption}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderComponent;

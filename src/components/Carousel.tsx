import React from "react";
import logo from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpeg";
import slider3 from "../assets/images/slider3.jpg";
import bg from "../assets/images/sliderbg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const carouselItems = [
  {
    image: logo,
    p1: "Featured notification",
    p2: "Education is key to success",
    p3: "Making an impact in the classroom and community",
  },
  {
    image: slider2,
    p1: "Featured notification",
    p2: "Education is key to success",
    p3: "Making an impact in the classroom and community",
  },
  {
    image: slider3,
    p1: "Featured notification",
    p2: "Education is key to success",
    p3: "Making an impact in the classroom and community",
  },
];

function Carousel() {
  return (
    <Slider {...settings}>
      {carouselItems.map((each) => {
        return (
          <div className="relative">
            <img
              className="w-full h-screen object-cover"
              src={each.image}
              alt="School logo"
            />

            <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <img className="object-cover" src={bg} alt="School logo" />
            </div>
            <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <Fade left>
                <p className="text-xl font-bold">{each.p1}</p>
              </Fade>

              <Fade right delay={300}>
                <p className="text-3xl">{each.p2}</p>
              </Fade>

              <Fade up delay={600}>
                <p className="text-lg">
                 {each.p3}
                </p>
              </Fade>
            </div>
          </div>
        );
      })}

      <div className="relative">
        <img
          className="w-full h-screen object-cover"
          src={slider2}
          alt="School logo"
        />

        <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <img className="object-cover" src={bg} alt="School logo" />
        </div>
        <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <p className="text-3xl font-bold">Featured notification</p>
          <p className="text-xl">Education is key to success</p>
          <p className="text-lg">
            Making an impact in the classroom and community
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          className="w-full h-screen object-cover"
          src={slider3}
          alt="School logo"
        />

        <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <img className="object-cover" src={bg} alt="School logo" />
        </div>
        <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <p className="text-3xl font-bold">Featured notification</p>
          <p className="text-xl">Education is key to success</p>
          <p className="text-lg">
            Making an impact in the classroom and community
          </p>
        </div>
      </div>
    </Slider>
  );
}

export default Carousel;

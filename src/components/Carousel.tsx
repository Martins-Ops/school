import {useState} from "react";
import logo from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpeg";
import slider3 from "../assets/images/slider3.jpg";
import bg from "../assets/images/sliderbg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import banner1 from '../../src/assets/images/banner3.jpg'
import banner2 from "../../src/assets/images/banner2.jpg";
import banner3 from "../../src/assets/images/banner1.jpg";


const carouselItems = [
  {
    image: banner1,
    p1: "Featured notification",
    p2: "Education is key to success",
    p3: "Making an impact ",
  },
  {
    image: banner2,
    p1: "Featured notification",
    p2: "Education is key to success",
    p3: "Making an impact ",
  },
  {
    image: banner3,
    p1: "Featured notification",
    p2: "Education is key to success",
    p3: "Making an impact ",
  },
];
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
   // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    afterChange: (index:number) => {
       setCurrentSlide(index);
    },
  };

  return (
    <Slider {...settings}>      
      
      {carouselItems.map((each, index) => {
          const shouldFade = index === currentSlide;
        return (
          <div className="relative">
            <img
              className="w-full h-screen object-cover brightness-50"
              src={each.image}
              alt="School logo"
            />

            <div className={`absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center`}>
              <img className="object-cover" src={bg} alt="School logo" />
            </div>
            <div
              className={`absolute top-1/2 left-1/2 md:left-1/4
               transform -translate-x-1/2 -translate-y-1/2 text-white text-center`}
            >
              <Fade left when={shouldFade}>
                <p className="text-xl my-8">{each.p1}</p>
              </Fade>
              {/* {console.log(shouldFade)} */}
              <Fade right delay={300} when={shouldFade}>
                <p className="text-3xl my-8">{each.p2}</p>
              </Fade>

              <Fade up delay={600} when={shouldFade}>
                <p className="text-xl">{each.p3}</p>
              </Fade>
            </div>
          </div>
        );
      })}

    </Slider>
  );
}

export default Carousel;

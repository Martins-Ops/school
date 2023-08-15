import { useEffect } from "react";
import Carousel from "../../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setIsLoggedIn } from "../../store/slices/authslice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../../src/assets/images/logo.png";
import Gallery from "./Gallery";
import SliderComponent from "./Award";
import ManageMent from "./ManageMent";
import Events from "./Events";

function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    var isLoggedIn = localStorage.getItem("isLoggedin");
    var token = localStorage.getItem("token");
    dispatch(setToken(token));
    dispatch(setIsLoggedIn(isLoggedIn === "true" ? true : false));
    window.scrollTo(0, 0);
  }, []);

  const sectionHeader =
    "bg-gray-200 mb-10 py-2 px-8 rounded text-sm md:text-lg";
  const missionParagraph = "text-sm md:text-lg";
  return (
    <>
      <Carousel />

      <div className="pb-20 mx-4  md:mx-20">
        <div
          id="intro"
          className="relative my-4 mx-4 md:mx-10 mt-20 md:flex gap-20 lg:w-3/4 justify-center overflow-x-hidden"
        >
          <div className="bg-red-400 left-0 w-20 h-2 absolute"></div>
          <p
            // data-aos-delay="200"
            // data-aos="fade-right"
            className="text-sm md:text-lg shadow-lg text-gray-500 py-4 px-3"
          >
            Saint Paul college Sagamu located in the quiet town of Ijebu-Itele,
            Ogun State Nigeria, pristinely kept from the sprawling realities of
            urban life. Providently born on January 11 1998, the simply
            beautiful campus she has grown to be is the ideal learning
            environment for young girls. This is where your daughter is moulded
            with Veritas et Caritas (Latin expression for Truth & Charity
            [Love], the school motto) as a guide
          </p>
          <LazyLoadImage
            // data-aos-delay="400"
            //  data-aos="fade-left"
            src={logo}
            alt="logo"
            className="w-60 h-60 mt-10 md:mt-0 text-center mx-auto"
          />
        </div>

        <div id="mission" className="md:flex mt-16 mx-8 md:mx-20 gap-4">
          <div
            // data-aos-delay="200"
            // data-aos="fade-down"
            className="bg-gray-300 mb-10 px-4 md:px-8 py-4 shadow-lg rounded-sm md:w-1/2 "
          >
            <h3 className="my-4">Our Vision</h3>
            <p className={missionParagraph}>
              A distinguished college that provides solid foundation for
              christian values and moral probity, and serves as transformational
              agens in the society
            </p>
          </div>

          <div
            // data-aos-delay="300"
            // data-aos="fade-left"
            className="bg-gray-300 mb-10 px-4 md:px-8 py-4 shadow-lg rounded-sm md:w-1/2"
          >
            <h3 className="my-4">Our Mission</h3>
            <p className={missionParagraph}>
              To provide holistic education that fosters knowledge, Christian
              values, and servant leadership in Church and society
            </p>
          </div>
        </div>
        <Events />
        <ManageMent />
        <SliderComponent />
        <Gallery />
      </div>
    </>
  );
}

export default HomeScreen;

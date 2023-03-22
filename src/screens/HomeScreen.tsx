import { useEffect, lazy, Suspense } from "react";
import Carousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setIsLoggedIn } from "../store/slices/authslice";
import logo from "../../src/assets/images/logo.png";
import party from "../../src/assets/images/banner1.jpg";
import cultural from "../../src/assets/images/banner2.jpg";
import opening from "../../src/assets/images/banner3.jpg";
import task1 from "../../src/assets/images/task1.png";
import task2 from "../../src/assets/images/task2.png";
import task3 from "../../src/assets/images/task3.jpg";
import task4 from "../../src/assets/images/task4.jpg";

import abell from "../../src/assets/images/abell.png";
import daniel from "../../src/assets/images/daniel.png";
import principal from "../../src/assets/images/principal.png";
import vp from "../../src/assets/images/vp.png";
import girl1 from "../../src/assets/images/girl1.jpg";
import girl2 from "../../src/assets/images/girl2.jpg";


const LogoImage = lazy(() => import("../../src/assets/images/logo.png"));


const images = [
  party,
  cultural,
  opening,
  abell,
  daniel,
  principal,
  vp,
  girl1,
  girl2,
];

const events = [
  {
    img: task1,
    day: 10,
    month: "MAR 2023",
    title: "Mid term break",
    anime: "fade-right",
    time: "100",
  },
  {
    img: task2,
    day: 1,
    month: "APR 2023",
    title: "Workshop Session",
    anime: "fade-down",
    time: "200",
  },
  {
    img: task3,
    day: 15,
    month: "APR 2023",
    title: "Exam Starts",
    anime: "fade-up",
    time: "300",
  },
  {
    img: task4,
    day: 12,
    month: "JUN 2023",
    title: "Vacation Starts",
    anime: "fade-left",
    time: "400",
  },
];

interface authState {
  isLoggeedin: boolean;
  token: string;
}

function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    var isLoggedIn = localStorage.getItem("isLoggedin");
    var token = localStorage.getItem("token");
    dispatch(setToken(token));
    dispatch(setIsLoggedIn(isLoggedIn === "true" ? true : false));
    window.scrollTo(0, 0);
  }, []);

  const token: any = useSelector((state: authState) => state);

  return (
    <div className=" pb-20">
      <Carousel />

      <div
        id="intro"
        className="relative my-4 mx-4 md:mx-10 mt-20 md:mx-20 md:flex gap-20 lg:w-3/4 justify-center"
      >
        <div className="bg-red-400 left-0 w-20 h-2 absolute"></div>
        <p
          data-aos-delay="200"
          data-aos="fade-right"
          className="shadow-lg text-gray-500 py-4 px-3"
        >
          Saint Paul College Sagamu located in the quiet town of Ijebu-Itele,
          Ogun State Nigeria, pristinely kept from the sprawling realities of
          urban life. Providently born on January 11 1998, the simply beautiful
          campus she has grown to be is the ideal learning environment for young
          girls. This is where your daughter is moulded with Veritas et Caritas
          (Latin expression for Truth & Charity [Love], the school motto) as a
          guide
        </p>
        <img
          data-aos-delay="400"
          data-aos="fade-left"
          src={logo}
          alt="logo"
          className="w-60 h-60 mt-10 md:mt-0 text-center mx-auto"
        />
        {/* <div>
          <Suspense fallback={<div>Loading...</div>}>
            <LogoImage />
          </Suspense>
        </div> */}
      </div>

      <div id="mission" className="md:flex mt-16 mx-8 md:mx-20 gap-4">
        <div
          data-aos-delay="100"
          data-aos="fade-right"
          className="bg-gray-300 mb-10 px-4 md:px-8 py-4 shadow-lg rounded-sm md:w-1/3 "
        >
          <h3 className="my-4">Our Mission</h3>
          <p>
            To provide holistic education that fosters knowledge, Christian
            values, and servant leadership in Church and society
          </p>
        </div>

        <div
          data-aos-delay="200"
          data-aos="fade-down"
          className="bg-gray-300 mb-10 px-4 md:px-8 py-4 shadow-lg rounded-sm md:w-1/3 "
        >
          <h3 className="my-4">Our Vision</h3>
          <p>
            A distinguished Colledge that provides solid foundation for
            christian values and moral probity, and serves as transformational
            agens in the society
          </p>
        </div>

        <div
          data-aos-delay="300"
          data-aos="fade-left"
          className="bg-gray-300 mb-10 px-4 md:px-8 py-4 shadow-lg rounded-sm md:w-1/3 "
        >
          <h3 className="my-4">Our Mission</h3>
          <p>
            To provide holistic education that fosters knowledge, Christian
            values, and servant leadership in Church and society
          </p>
        </div>
      </div>

      <div id="upcoming-events" className="mx-10 my-20 md:mx-20">
        <h3 className="bg-gray-200 mb-10 py-2 px-8 rounded">Upcoming Events</h3>
        <div className="flex justify-center flex-wrap">
          {events.map((each) => {
            return (
              <div
                data-aos-delay={each.time}
                data-aos={each.anime}
                className="brightness-50 relative my-6 md:my-0 w-full md:w-1/4"
              >
                <img
                  src={each.img}
                  className="object-cover  h-64"
                  alt={each.title}
                  style={{ width: "97%" }}
                />
                <div className="absolute bg-gray-500 bg-opacity-75 bottom-9 left-0 p-2">
                  <p className="text-white font-bold text-lg">{each.day}</p>
                  <p className="text-white text-sm">{each.month}</p>
                </div>
                <p className="mt-3 text-center">{each.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div id="management-team" className="mx-10 md:mx-20 my-10">
        <h3 className="bg-gray-200 mb-10 py-2 px-8 rounded">
          Meet the Management Team
        </h3>
        <div className="md:flex md:gap-10 justify-center items-center">
          <div className=" md:w-1/4 justify-center">
            <img src={principal} className="" alt="" />
            <p className="text-center font-bold text-2xl my-8">The Principal</p>
          </div>

          <div className="w-full md:w-1/4 justify-center">
            <img src={vp} className="" alt="" />
            <p className="text-center font-bold text-2xl my-8">
              The Vice Principal
            </p>
          </div>

          <div className=" md:w-1/4 justify-center">
            <img src={abell} className="" alt="" />
            <p className="text-center font-bold text-2xl my-8">
              The Accountant
            </p>
          </div>

          <div className=" md:w-1/4 justify-center">
            <img src={daniel} className="" alt="" />
            <p className="text-center font-bold text-2xl my-8">The Manager</p>
          </div>
        </div>
      </div>

      <div id="gallery" className="mx-10 md:mx-20 my-10">
        <h3 className="bg-gray-200 mb-10 py-2 px-8 rounded">
          Our Image gallery
        </h3>
        <div className="md:flex md:gap-20">
          <div className="flex gap-10 flex-wrap">
            {images?.map((image) => {
              return (
                <div className="">
                  <img src={image} alt="" className="w-40 h-40 object-cover " />
                </div>
              );
            })}
          </div>
          <p className="text-gray-400 my-20 md:my-auto ">
            "I was there in January 1998 when LGHS was born, with My good friend
            Adiela Aviram Oyindamola. Apart from the fact that I was going to
            cut my hair, I was excited at the thought of going away from home."
          </p>
        </div>
      </div>

      <div id="Testimonials" className="mx-2 md:mx-20 my-10">
        <h3 className="bg-gray-200 mb-10 py-2 px-8 rounded">Testimonials</h3>

        <div className="md:flex mx-4 md:mx-4 gap-10 justify-center">
          <div
            data-aos-delay="300"
            data-aos="fade-right"
            className="mt-8 w-full md:w-1/3 rounded py-8 px-5 bg-gray-700"
          >
            <h2 className="italic text-lg text-white mb-4">Folarin Balogun</h2>
            <p className="text-white">
              "I was there in January 1998 when LGHS was born, with My good
              friend Adiela Aviram Oyindamola. Apart from the fact that I was
              going to cut my hair, I was excited at the thought of going away
              from home."
            </p>
            <img
              src={girl1}
              alt="person-1"
              className="w-16 h-16 rounded-full my-4 "
            />
          </div>

          <div
            data-aos-delay="600"
            data-aos="fade-down"
            className="mt-8 w-full md:w-1/3 rounded py-8 px-5 bg-gray-700"
          >
            <h2 className="italic text-lg text-white mb-4">Junias Mario</h2>
            <p className="text-white">
              "I was there in January 1998 when LGHS was born, with My good
              friend Adiela Aviram Oyindamola. Apart from the fact that I was
              going to cut my hair, I was excited at the thought of going away
              from home."
            </p>
            <img
              src={girl2}
              alt="person-1"
              className="w-16 h-16 rounded-full my-4 "
            />
          </div>

          <div
            data-aos-delay="900"
            data-aos="fade-left"
            className="mt-8 w-full md:w-1/3 rounded py-8 px-5 bg-gray-700"
          >
            <h2 className="italic text-lg text-white mb-4">Abigirl Esther</h2>
            <p className="text-white">
              "I was there in January 1998 when LGHS was born, with My good
              friend Adiela Aviram Oyindamola. Apart from the fact that I was
              going to cut my hair, I was excited at the thought of going away
              from home."
            </p>
            <img
              src={girl1}
              alt="person-1"
              className="w-16 h-16 rounded-full my-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

import { useEffect } from "react";
import Carousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setIsLoggedIn } from "../store/slices/authslice";
import logo from "../../src/assets/images/logo.png";
import party from "../../src/assets/images/banner1.jpg";
import cultural from "../../src/assets/images/banner2.jpg";
import opening from "../../src/assets/images/banner3.jpg";

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
  }, []);

  const token: any = useSelector((state: authState) => state);

  return (
    <div className="bg-gray-300 pb-20">
      <Carousel />

      <div className="mx-10 mt-20 md:mx-20 md:flex gap-20 lg:w-4/5 justify-center -">
        <p>
          Louisville Girls High School is divinely located in the quiet town of
          Ijebu-Itele, Ogun State Nigeria, pristinely kept from the sprawling
          realities of urban life. Providently born on January 11 1998, the
          simply beautiful campus she has grown to be is the ideal learning
          environment for young girls. This is where your daughter is moulded
          with Veritas et Caritas (Latin expression for Truth & Charity [Love],
          the school motto) as a guide
        </p>
        <img
          src={logo}
          alt="logo"
          className="w-60 h-60 mt-10 md:mt-0 text-center mx-auto"
        />
      </div>

      <div id="mission" className="md:flex mx-10 md:mx-20 gap-4">
        <div className="mb-10 px-8 py-4 shadow-lg rounded-sm md:w-1/3 ">
          <p>Our Mission</p>
          <p>
            The New Orleans Charter Science and Mathematics High School is an
            open-admission public charter school that prepares all students for
            college admissions and successful careers. Sci High provides a
            rigorous high school curriculum with an emphasis in science and
            mathematics in a supportive environment of learning and respect that
            prepares students to make informed choices about post-secondary
            pursuits.
          </p>
        </div>
      </div>

      <div id="upcomming events" className="mx-10 my-20 md:mx-40">
        <h3 className="bg-gray-200 mb-10 py-2 px-8 rounded">Upcoming Events</h3>

        <div className="md:flex gap-20 justify-center">
          <div className="relative">
            <img
              src={opening}
              className="object-cover h-auto object-center"
              alt=""
            />
            <span className="absolute bg-teal-500 bottom-0 w-20 h-20 text-center">
              <p className="text-white mt-2">10</p>
              <p className="text-white text-sm">MAR 2023</p>
            </span>
          </div>

          <div className="relative">
            <img
              src={cultural}
              className="object-cover h-auto object-center"
              alt=""
            />
            <span className="absolute bg-teal-500 bottom-0">
              <p>10</p>
              <p>MAR 2023</p>
            </span>
          </div>

          <div className="relative">
            <img
              src={opening}
              className="object-cover h-auto object-center"
              alt=""
            />
            <span className="absolute bg-teal-500 bottom-0">
              <p>10</p>
              <p>MAR 2023</p>
            </span>
          </div>
        </div>
      </div>

      <div id="management-team" className="mx-10 md:mx-20 my-10">
        <h3 className="bg-gray-200 mb-10 py-2 px-8 rounded">
          Meet the Management Team
        </h3>
        <div className="md:flex gap-10">
          <div className="w-1/4">
            <img src={opening} className="w-30 h-30 rounded-full" alt="" />
            <p>The Principal</p>
          </div>

          <div className="w-1/4">
            <img src={opening} className="w-30 h-30 rounded-full" alt="" />
            <p className="text-center mt-5">The Principal</p>
          </div>

          <div className="w-1/4">
            <img src={opening} className="w-30 h-30 rounded-full" alt="" />
            <p>The Principal</p>
          </div>

          <div className="w-1/4">
            <img src={opening} className="w-30 h-30 rounded-full" alt="" />
            <p>The Principal</p>
          </div>
        </div>
      </div>

      <div id="Testimonials" className="mx-10 md:mx-20 my-10">
        <h3 className="bg-gray-200 mb-10 py-2 px-8 rounded">Testimonials</h3>

        <div className="md:flex mx-4 md:mx-4 gap-10 justify-center">
          <div className="mt-8 w-full md:w-1/3 rounded py-8 px-5 bg-gray-700">
            <h2 className="italic text-lg text-white mb-4">Folarin Balogun</h2>
            <p className="text-white">
              A very good school for learning and teaching
            </p>
            <img
              src={party}
              alt="person-1"
              className="w-16 h-16 rounded-full my-4 "
            />
          </div>

          <div className="mt-8 w-full md:w-1/3 rounded py-8 px-5 bg-gray-700">
            <h2 className="italic text-lg text-white mb-4">Folarin Balogun</h2>
            <p className="text-white">
              A very good school for learning and teaching
            </p>
            <img
              src={party}
              alt="person-1"
              className="w-16 h-16 rounded-full my-4 "
            />
          </div>

          <div className="mt-8 w-full md:w-1/3 rounded py-8 px-5 bg-gray-700">
            <h2 className="italic text-lg text-white mb-4">Folarin Balogun</h2>
            <p className="text-white">
              A very good school for learning and teaching
            </p>
            <img
              src={party}
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

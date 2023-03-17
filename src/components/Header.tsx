import { FaPhoneAlt } from "react-icons/fa";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/images/logo.png";
import { AiOutlineMail, AiOutlineLogin } from "react-icons/ai";
import { BiLogIn, BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

interface authState {
  isLoggeedin: boolean;
  token: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth: any = useSelector((state: authState) => state);

  return (
    <div className="relative fixed">
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="w-1/2 backdrop-brightness-50 md:backdrop-brightness-100 h-screen fixed top-0 right-0 z-20"
        ></div>
      )}

      <div className=" z-50 w-full h-12 px-8 md:px-20 pt-3">
        <div className="hidden lg:block absolute right-80 top-4">
          {!auth.auth.isLoggedIn ? (
            <div className="flex gap-6 md:gap-24">
              <span>
                <Link
                  to="apply"
                  className="text-white bg-red-500 rounded-lg px-4 py-2 mt-4"
                >
                  Apply now
                </Link>
              </span>
              <span className="flex gap-4">
                <BiLogIn className="text-indigo-900 mt-1" />
                <Link to="login" className="text-indigo-900">
                  Login
                </Link>
              </span>
              <span className="flex gap-4">
                <AiOutlineLogin className="text-indigo-900 mt-1" />
                <Link to="register" className="text-indigo-900">
                  Register
                </Link>
              </span>
            </div>
          ) : (
            <div className="flex gap-6 md:gap-24">
              <span className="flex gap-4">
                <AiOutlineLogin className="text-white mt-1" />
                <Link to="profile" className="text-white">
                  Profile
                </Link>
              </span>
            </div>
          )}
        </div>
      </div>
      <header className=" w-full bg-white shadow-lg z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="items-center flex">
              <Link to="/" className="flex">
                <img
                  className="w-32 h-24 mr-2 absolute z-20 top-1"
                  src={logo}
                  alt="School logo"
                />
                <h2 className="text-red-700 absolute top-1 w-1/10 left-40 font-bold md:text-lg mt-10">
                  SAINT PAUL COLLEDGE
                </h2>
              </Link>
            </div>
            <div className="hidden md:block">
              <nav className="flex space-x-16">
                <Link to="/" className="text-gray-600 hover:text-teal-500">
                  Home
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-teal-500">
                  About
                </Link>
                <Link to="#" className="text-gray-600 hover:text-teal-500">
                  Services
                </Link>
                <Link
                  to="#"
                  className="text-white hover:text-gray-900 bg-red-700 px-4 py-1 rounded-20"
                >
                  Contacts
                </Link>
              </nav>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="block text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? (
                  <BiMenuAltRight className="w-8 h-8" />
                ) : (
                  <h2 className=" text-2xl">X</h2>
                )}
              </button>

              <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in duration-200 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                className="fixed h-screen absolute top-0 w-1/2 left-0 z-50 md:hidden"
              >
                <div>
                  <nav className="bg-white px-2 py-3 h-screen shadow">
                    <img
                      className="h-8 mx-auto mb-12 mt-4"
                      src={logo}
                      alt="School logo"
                    />
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 py-2"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 py-2"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 py-2"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 py-2"
                    >
                      Contacts
                    </a>
                  </nav>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

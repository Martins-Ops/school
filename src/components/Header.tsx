import { FaPhoneAlt } from "react-icons/fa";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/images/logo.png";
import { AiOutlineMail, AiOutlineLogin } from "react-icons/ai";
import { BiLogIn, BiMenuAltRight } from "react-icons/bi";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

interface authState {
  isLoggeedin: boolean;
  token: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth: any = useSelector((state: authState) => state);

  const closeNav = () => {
    setIsOpen(false)
  }


  const nav = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/contact", name: "Contact" },
    { link: "/login", name: "Login" },
  ];

  return (
    <div className="relative fixed">
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="w-1/2 backdrop-brightness-50 md:backdrop-brightness-100 h-screen fixed top-0 right-0 z-20"
        ></div>
      )}

      <header className=" w-full h-28 fixed bg-gray-300 shadow-lg z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="items-center flex">
              <Link to="/" className="flex">
                <img
                  className="w-32 h-24 mr-2 absolute z-20 top-1"
                  src={logo}
                  alt="School logo"
                />
                <h2 className="text-red-700 absolute bottom-16 w-1/10 left-40 font-bold text-sm md:text-lg mt-10">
                  SAINT PAUL
                </h2>

                <h2 className="text-red-700 absolute bottom-10 w-1/10 left-40 font-bold text-sm md:text-lg mt-10">
                  COLLEDGE
                </h2>
              </Link>
            </div>
            <div className="absolute right-16 bottom-8 hidden md:block">
              <nav className="flex space-x-16 mr-4">
                <Link to="/" className="text-gray-600 hover:text-teal-500">
                  Home
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-teal-500">
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-teal-500"
                >
                  Contacts
                </Link>
                <span className="flex gap-3">
                  <BiLogIn className="text-indigo-900 mt-1" />
                  <Link to="login" className="text-indigo-900">
                    Login
                  </Link>
                </span>
              </nav>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="block mr-6 mt-4 text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? (
                  <RiMenu4Line className="w-8 h-8" />
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
                  <nav className="bg-gray-400 text-center px-2 py-3 h-screen shadow">
                    <img
                      className="h-32 mx-auto mb-12 mt-12"
                      src={logo}
                      alt="School logo"
                    />
                    {nav.map((each) => {
                      return (
                        <Link
                          onClick={closeNav}
                          to={each.link}
                          className="block text-gray-600 hover:text-gray-900 mb-8 py-2"
                        >
                          {each.name}
                        </Link>
                      );
                    })}
                  

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

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/images/logo.png";
import { AiOutlineMail, AiOutlineLogin } from "react-icons/ai";
import { BiLogIn, BiMenuAltRight } from "react-icons/bi";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface authState {
  isLoggeedin: boolean;
  token: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isLoggedin") === "true");

  const logoutHanler =()=>{
    localStorage.clear()
    setIsAuthenticated(false);
  }



  const closeNav = () => {
    setIsOpen(false);
  };

  const nav = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/contact", name: "Contact" },
  ];

  const logoText =
    "text-white absolute  w-1/10 left-32 md:left-48 font-bold text-sm md:text-lg mt-10";

  return (
    <div className="relative fixed">
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="w-1/2 backdrop-brightness-50 md:backdrop-brightness-100 h-screen fixed top-0 right-0 z-20"
        ></div>
      )}

      <header className=" w-full h-28 fixed bg-gray-700 shadow-lg z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="items-center flex">
              <Link to="/" className="flex">
                <img
                  className="w-20 h-20 md:w-36 md:h-32 mr-2 absolute left-8 z-20 top-6 md:top-1"
                  src={logo}
                  alt="School logo"
                />
                <h2 className={`${logoText} bottom-16`}>SAINT PAUL</h2>

                <h2 className={`${logoText} bottom-10`}>COLLEDGE</h2>
              </Link>
            </div>
            <div className="absolute right-16 bottom-8 hidden md:block">
              <nav className="flex space-x-16 mr-4">
                {nav.map((each) => {
                  return (
                    <Link
                      to={each.link}
                      className="text-white hover:text-teal-500"
                    >
                      {each.name}
                    </Link>
                  );
                })}

                <span className="flex gap-3">
                  <BiLogIn className="text-white" />
                  {isAuthenticated ? <Link onClick={logoutHanler} to="login" className="text-white hover:text-teal-500">
                    Logout
                  </Link> : <Link to="login" className="text-white hover:text-teal-500">
                    Login
                  </Link>}
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

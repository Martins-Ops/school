import { useState } from "react";
import AddStudents from "./AddStudents";
import StudentsScreen from "./StudentsScreen";
import { NavLink, NavLinkProps } from "react-router-dom";
import logo from "../../src/assets/images/logo.png";
import { FaUserCheck, FaUserPlus, FaUserTie, FaBook } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import AddTeacher from "./AddTeacher";
import MySubjects from "./MySubjects";
import { Link } from "react-router-dom";


function ProfileScreen({ activeLink }: any) {
  var nav = [
    { name: "View Students", link: "/dashboard", icon: FaUserCheck },
    { name: "Add Students", link: "/addstudent", icon: FaUserPlus },
    { name: "Add Teacher", link: "/addteacher", icon: FaUserTie },
    {
      name: "Payment History",
      link: "/payment-history",
      icon: FcMoneyTransfer,
    },
    { name: "My Subjects", link: "/mysubjects", icon: FaBook },
  ];

  return (
    <div className="md:flex  w-full md:gap-20">
      <div className="md:w-1/4 h-screen md:border border-r-100">
        <Link to="/" className="flex gap-10 mt-10 mx-5">
          <img src={logo} alt="logo" className="w-20" />
          <p className="mt-4 text-red-700 text-lg">SP Sagamu</p>
        </Link>

        <div className="mt-12 mx-10 flex md:block">
          {nav.map((each) => {
            return (
              <div className="flex gap-5 my-5" key={each.name}>
                <each.icon className="text-gray-400" size={24} />
                <NavLink
                  to={each.link}
                  className="flex text-gray-600 pointer block mb-8 hover:text-green-500"
                >
                  {each.name}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:mt-10 flex-grow md:w-3/4 mx-auto text-center">
        {activeLink === "dashboard" && <StudentsScreen />}
        {activeLink === "addstudent" && <AddStudents />}
        {activeLink === "addteacher" && <AddTeacher />}
        {activeLink === "mysubjects" && <MySubjects />}
      </div>
    </div>
  );
}

export default ProfileScreen;

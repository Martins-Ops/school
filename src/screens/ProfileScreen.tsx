import { useState } from "react";
import AddStudents from "./AddStudents";
import StudentsScreen from "./StudentsScreen";
import { NavLink, NavLinkProps } from "react-router-dom";
import logo from "../../src/assets/images/logo.png";
import { FaUserCheck, FaUserPlus, FaUserTie, FaBook } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import AddTeacher from "./AddTeacher";

function ProfileScreen({ activeLink }: any) {
  var nav = [
    { name: "View Students", link: "/dashboard", icon: FaUserCheck },
    { name: "Add Students", link: "/addstudent", icon: FaUserPlus },
    { name: "Add Teacher", link: "/addteacher", icon: FaUserTie },
    { name: "Payment History", link: "/payment-history", icon: FcMoneyTransfer },
    { name: "My Subjects", link: "/my-aubject", icon: FaBook },
  ];

  return (
    <div className="flex w-full gap-20">
      <div className="w-1/4 h-screen border border-r-100">
        <div className="flex gap-10 mt-10 mx-5">
          <img src={logo} alt="logo" className="w-20" />
          <p className="mt-4 text-red-700 text-lg">SP Sagamu</p>
        </div>

        <div className="mt-12 mx-10">
          {nav.map((each) => {
            return (
              <div className="flex gap-5 my-5" key={each.name}>
                <each.icon className="text-gray-400" size={24} />
                <NavLink
                  to={each.link}
                  className="text-gray-600 pointer block mb-8 hover:text-green-500"
                >
                  {each.name}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex-grow w-3/4 mx-auto text-center">
        {activeLink === "dashboard" && <StudentsScreen />}
        {activeLink === "addstudent" && <AddStudents />}
        {activeLink === "addteacher" && <AddTeacher />}
      </div>
    </div>
  );
}

export default ProfileScreen;

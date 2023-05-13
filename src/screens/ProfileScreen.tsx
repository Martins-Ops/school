import AddStudents from "./AddStudents";
import StudentsScreen from "./StudentsScreen";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/images/logo.png";
import { FaUserCheck, FaUserPlus, FaUserTie, FaBook, FaAddressBook } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import AddTeacher from "./AddTeacher";
import MySubjects from "./MySubjects";
import { Link } from "react-router-dom";
import AddSubject from "./AddSubject";
import AddScore from "./AddScore";


function ProfileScreen({ activeLink }: any) {
  var nav = [
    { name: "View Students", link: "/dashboard", icon: FaUserCheck, user:'is_principal' },
    { name: "Add Students", link: "/addstudent", icon: FaUserPlus, user: 'is_principal' },
    { name: "Add Teacher", link: "/addteacher", icon: FaUserTie, user: 'is_principal' },
    { name: "Add Subject", link: "/addsubject", icon: FaAddressBook, user: 'is_principal' },
    {
      name: "Payment History",
      link: "/payment-history",
      icon: FcMoneyTransfer,
      user: 'is_principal'
    },
    { name: "My Subjects", link: "/mysubjects", icon: FaBook, user: 'is_teacher' },
    { name: "My Results", link: "/myresults", icon: FaBook, user: 'is_student' },


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
            if(localStorage.getItem(each.user)==='true'){
              return (
                <div className="flex gap-5 my-5" key={each.name}>
                  <each.icon className="text-gray-400" size={24} />
                  <NavLink
                    to={each.link}
                    className="flex text-gray-600 pointer block mb-8 active:text-green-500"
                    style={({ isActive }) =>
                      isActive
                        ? {
                          textDecoration: "none",
                          color: "#6EE7B7",
                        }
                        : {}
                    }
                  >
                    {each.name}
                  </NavLink>
                </div>
              );
            }
            
          })}
        </div>
      </div>

      <div className="md:mt-10 flex-grow md:w-3/4 mx-auto text-center">
        {activeLink === "dashboard" && <StudentsScreen />}
        {activeLink === "addstudent" && <AddStudents />}
        {activeLink === "addteacher" && <AddTeacher />}
        {activeLink === "mysubjects" && <MySubjects />}
        {activeLink === "addsubject" && <AddSubject />}
        {activeLink === "mysubjects/:subjectId" && <AddScore />}

      </div>
    </div>
  );
}

export default ProfileScreen;

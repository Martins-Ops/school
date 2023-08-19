import AddStudents from "./AddStudents";
import StudentsScreen from "./StudentsScreen";
import logo from "../../src/assets/images/logo.png";
import {
  FaUserCheck,
  FaUserPlus,
  FaUserTie,
  FaBook,
  FaAddressBook,
} from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import AddTeacher from "./AddTeacher";
import MySubjects from "./MySubjects";
import { Link, useLocation, NavLink } from "react-router-dom";
import AddSubject from "./AddSubject";
import AddScore from "./AddScore";
import ViewTeachers from "./ViewTeachers";
import StudentResult from "./StudentResult";
import LoginPage from "./Login";

function ProfileScreen({ activeLink }: any) {
  const location = useLocation();

  var nav = [
    {
      name: "View Students",
      link: "/dashboard",
      icon: FaUserCheck,
      user: "is_principal",
    },
    {
      name: "View Teachers",
      link: "/dashboard/viewteacher",
      icon: FaUserCheck,
      user: "is_principal",
    },

    {
      name: "Add Students",
      link: "/dashboard/addstudent",
      icon: FaUserPlus,
      user: "is_principal",
    },
    {
      name: "password reset",
      link: "/dashboard/password-reset",
      icon: FaUserPlus,
      user: "is_principal",
    },
    {
      name: "Add Teacher",
      link: "/dashboard/addteacher",
      icon: FaUserTie,
      user: "is_principal",
    },
    {
      name: "Add Subject",
      link: "/dashboard/addsubject",
      icon: FaAddressBook,
      user: "is_principal",
    },
    {
      name: "Payment History",
      link: "/dashboard/payment-history",
      icon: FcMoneyTransfer,
      user: "is_principal",
    },
    {
      name: "My Subjects",
      link: "/dashboard/mysubjects",
      icon: FaBook,
      user: "is_teacher",
    },
    {
      name: "My Results",
      link: "/dashboard/myresults",
      icon: FaBook,
      user: "is_student",
    },
  ];

  return (
    <div className="relative md:flex w-full md:gap-20">
      <div className="  z-20">
        <div className="fixed h-screen md:w-1/4 bg-[#39393F] rounded-lg mb-6 mt-2  ">
          <Link to="/" className="flex gap-10 mt-10 mx-5">
            <img src={logo} alt="logo" className="w-20" />
            <p className="mt-4 text-red-700 text-lg">SP Sagamu</p>
          </Link>

          <div className="mt-12 mx-6">
            {nav.map((each) => {
              if (localStorage.getItem(each.user) === "true") {
                const isActive = location.pathname === each.link;

                return (
                  <div
                    className={`flex items-center px-4 gap-5 mb-10 rounded-lg ${
                      isActive ? "bg-[#E4316F]" : ""
                    }`}
                    key={each.name}
                  >
                    <each.icon className="text-white" size={24} />
                    <NavLink
                      to={each.link}
                      className="text-white pointer block py-3 text-center"
                      style={
                        isActive
                          ? { textDecoration: "none", color: "#fff" }
                          : {}
                      }
                    >
                      {each.name}
                    </NavLink>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>

      <div className="md:mt-10 ml-[30%]  flex-grow md:w-3/4 mx-auto text-center">
        {activeLink === "dashboard" && <StudentsScreen />}
        {activeLink === "addstudent" && <AddStudents />}
        {activeLink === "addteacher" && <AddTeacher />}
        {activeLink === "mysubjects" && <MySubjects />}
        {activeLink === "addsubject" && <AddSubject />}
        {activeLink === "viewteacher" && <ViewTeachers />}
        {activeLink === "myresults" && <StudentResult />}
        {activeLink === "password-reset" && <LoginPage />}

        {activeLink === "mysubjects/:subjectId" && <AddScore />}
      </div>
    </div>
  );
}

export default ProfileScreen;

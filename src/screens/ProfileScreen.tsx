import AddStudents from "./AddStudents";
import StudentsScreen from "./StudentsScreen";
import logo from "../../src/assets/images/logo.png";
import { FaUserCheck, FaUserPlus, FaUserTie, FaBook, FaAddressBook } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import AddTeacher from "./AddTeacher";
import MySubjects from "./MySubjects";
import { Link,useLocation,NavLink } from "react-router-dom";
import AddSubject from "./AddSubject";
import AddScore from "./AddScore";


function ProfileScreen({ activeLink }: any) {

  const location = useLocation();

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
      <div className="md:w-1/4 h-screen rounded-lg mb-6 mt-2 bg-[#39393F] z-20">
        <Link to="/" className="flex gap-10 mt-10 mx-5">
          <img src={logo} alt="logo" className="w-20" />
          <p className="mt-4 text-red-700 text-lg">SP Sagamu</p>
        </Link>

<div className="mt-12 mx-6">
  {nav.map((each) => {
    if (localStorage.getItem(each.user) === 'true') {
      const isActive = location.pathname === each.link;

      return (
        <div
          className={`flex items-center px-4 gap-5 mb-10 rounded-lg ${
            isActive ? 'bg-[#E4316F]' : ''
          }`}
          key={each.name}
        >
          <each.icon className="text-white" size={24} />
          <NavLink
            to={each.link}
            className="text-white pointer block py-3 text-center"
            style={isActive ? { textDecoration: 'none', color: '#fff' } : {}}
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

      <div className="md:mt-10 flex-grow md:w-3/4 mx-auto text-center ">
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

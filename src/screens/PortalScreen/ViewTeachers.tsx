import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { get } from "../../utils/exports";
import StudentDetail from "../../modals/StudentDetail";
import TeacherDetail from "./TeacherDetail";

interface studentTypes {
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  classroom: string;
  gender: string;
}

const tdStyle = "py-3 text-sm text-gray-500 mb-8 ";

function ViewTeachers() {
  const [students, setStudents] = useState([]);
  const [studentclass, setClass] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const fetchStudents = async () => {
    const response = await get("app/teachers");
    setStudents(response);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filterStudents = (students: studentTypes[]) => {
    if (studentclass === "all") {
      return students;
    } else {
      return students.filter((student) => student.classroom === studentclass);
    }
  };

  return (
    <div className="ml-[10%] mt-8">
      <div className="flex gap-20">
        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            className="block w-full rounded-full bg-gray-100 border-transparent focus:border-gray-500  focus:ring-0 pl-10 pr-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Search for Student"
          />
        </div>
      </div>

      <div>
        <table className="w-full my-10">
          <thead>
            <tr className="text-left">
              <th className="py-3">Name</th>
              <th className="py-3">ID</th>
              <th className="py-3">Class</th>
              <th className="py-3">Age</th>

              <th className="py-3">Gender</th>
              <th className="py-3">Email</th>
            </tr>
          </thead>

          {filterStudents(students).map((student: studentTypes) => (
            <tr
              className="text-left hover:bg-gray-200 cursor-pointer py-20"
              key={student.id}
              onClick={() => {
                const modalDetails = {
                  name: student.first_name,
                  lastName: student.last_name,

                  email: student.email,
                  class: student.classroom,
                };
                setShowModal(true);
                setModalDetails(modalDetails);
                console.log("Clicked on student:", student);
              }}
            >
              <td
                className={tdStyle}
              >{`${student.first_name} ${student.last_name}`}</td>
              <td className={tdStyle}>{student.id}</td>
              <td className={tdStyle}>{student.classroom}</td>
              <td className={tdStyle}>42</td>
              <td className={tdStyle}>{student.gender}</td>
              <td className={tdStyle}>{student.email}</td>
            </tr>
          ))}
        </table>
      </div>


      {showModal ? (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setShowModal(false)}
        ></div>
      ) : null}

      {showModal ? (
        <div className="h-screen z-50 bg-gray-300 right-0 w-3/5 top-0 fixed shadow-lg rounded-lg">
          <TeacherDetail
            hideModal={() => setShowModal(false)}
            details={modalDetails}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ViewTeachers;

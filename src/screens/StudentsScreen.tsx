import { useEffect, useState,useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { get } from "../utils/exports";
import StudentDetail from "../modals/StudentDetail";
import LoadingSpinner from "../components/LoadingSpinner";

interface studentTypes {
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  classroom: string;
  gender: string;
}

const tdStyle = "py-3 text-sm text-gray-500 mb-8 ";

function StudentsScreen() {
  const [students, setStudents] = useState([]);
  const [loading,setLoading] = useState(false)
  const [studentclass, setClass] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const fetchStudents = async () => {
    setLoading(true)
    const response = await get("app/students");
    setStudents(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

const filterStudents = (students: studentTypes[]) => {
  let filteredStudents = students;
  if (studentclass !== "all") {
    filteredStudents = filteredStudents.filter(
      (student) => student.classroom === studentclass
    );
  }
  if (searchQuery.trim() !== "") {
    filteredStudents = filteredStudents.filter((student) =>
      `${student.first_name} ${student.last_name}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }
  return filteredStudents;
};
  
  


  return (
    <div className="mt-28">
      <div className="flex gap-20">
        <select
          value={studentclass}
          onChange={(e: any) => setClass(e.target.value)}
          className="rounded-lg p-2 px-10"
        >
          <option value="all">All</option>
          <option value="JSS1">JSS1</option>
          <option value="JSS2">JSS2</option>
          <option value="JSS3">JSS3</option>
          <option value="SS1">SSS1</option>
          <option value="SS2">SSS2</option>
          <option value="SS3">SSS3</option>
        </select>

        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            className="block w-full rounded-full bg-gray-100 border-transparent focus:border-gray-500  focus:ring-0 pl-10 pr-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Search for Student"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="h-screen">
       
        {!loading ?<table className="w-full my-10">
          <thead>
            <tr className="text-left">
              {/* <th className="py-3">Image</th> */}
              <th className="py-3">Name</th>
              <th className="py-3">ID</th>
              <th className="py-3">Class</th>
              <th className="py-3">Age</th>
              <th className="py-3">Gender</th>
              <th className="py-3">Email</th>
              <th className="py-3">Has Paid</th>
            </tr>
          </thead>

          <tbody>
            {filterStudents(students).map((student: studentTypes) => (
              <tr
                className="text-left my-10 hover:bg-gray-200 cursor-pointer py-20"
                key={student.id}
                onClick={() => {
                  const modalDetails = {
                    name: student.first_name,
                    email: student.email,
                    class: student.classroom,
                  };
                  // setShowModal(true);
                  setModalDetails(modalDetails);
                }}
              >
                {/* <td className={`bg-gray-300 h-3 w-4 my-3 rounded-full px-4 ${tdStyle}`}></td> */}
                <td
                  className={tdStyle}
                >{`${student.first_name} ${student.last_name}`}</td>
                <td className={tdStyle}>{student.id}</td>
                <td className={tdStyle}>{student.classroom}</td>
                <td className={tdStyle}>42</td>
                <td className={tdStyle}>{student.gender}</td>
                <td className={tdStyle}>{student.email}</td>
                <td className={tdStyle}>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>:<div className="h-screen z-10 text-center"><LoadingSpinner color='black'/></div>}
      </div>

      {showModal ? (
        <StudentDetail
          showModal={showModal}
          hideModal={() => setShowModal(false)}
          details={modalDetails}
        />
      ) : null}
    </div>
  );
}

export default StudentsScreen;

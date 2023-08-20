import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { get } from "../../utils/exports";
import StudentDetail from "../../modals/StudentDetail";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useQuery } from "react-query";

interface studentTypes {
  first_name: string;
  last_name: string;
  id: number;
  email: string;
  classroom: string;
  gender: string;
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const tdStyle = "py-3 text-sm text-gray-500 mb-8";

function StudentsScreen() {
  const [studentclass, setClass] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 15;

  const fetchStudents = async () => {
    const response = await get("app/students");
    return response;
  };

  const { data: students, isLoading, isError, error } = useQuery(
    "students",
    fetchStudents
  );

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

    // Paginate the students
    const startIndex = (currentPage - 1) * studentsPerPage;
    const endIndex = startIndex + studentsPerPage;
    filteredStudents = filteredStudents.slice(startIndex, endIndex);

    return filteredStudents;
  };

  return (
    <div className="mt-8">
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
        {!isLoading ? (
          <table className="w-full my-10">
            <thead>
              <tr className="text-left">
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
                    setModalDetails(modalDetails);
                    setShowModal(true);
                  }}
                >
                  <td className={tdStyle}>
                    {`${student.first_name} ${student.last_name}`}
                  </td>
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
          </table>
        ) : (
          <div className="h-screen z-10 text-center">
            <LoadingSpinner color="black" />
          </div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            scrollToTop();
          }}
        >
          Previous
        </button>

        {currentPage > 4 && (
          <>
            <button
              className="mx-1 bg-blue-500 text-blue-900 hover:bg-blue-700 font-bold py-2 px-4 rounded"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            {currentPage > 5 && <span className="mx-1">...</span>}
          </>
        )}

        {Array.from(
          { length: Math.ceil(students?.length / studentsPerPage) },
          (_, index) => {
            const pageNumber = index + 1;

            if (
              (pageNumber === 1 && currentPage <= 4) ||
              (pageNumber === Math.ceil(students?.length / studentsPerPage) &&
                currentPage >=
                  Math.ceil(students?.length / studentsPerPage) - 3) ||
              (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
            ) {
              return (
                <button
                  key={index}
                  className={`mx-1 ${
                    currentPage === pageNumber
                      ? "bg-blue-700 text-white"
                      : "bg-blue-500 text-blue-900"
                  } hover:bg-blue-700 font-bold py-2 px-4 rounded`}
                  onClick={() => {
                    setCurrentPage(pageNumber);
                    scrollToTop();
                  }}
                >
                  {pageNumber}
                </button>
              );
            }

            return null;
          }
        )}

        {currentPage < Math.ceil(students?.length / studentsPerPage) - 3 && (
          <>
            {currentPage <
              Math.ceil(students?.length / studentsPerPage) - 4 && (
              <span className="mx-1">...</span>
            )}
            <button
              className="mx-1 bg-blue-500 text-blue-900 hover:bg-blue-700 font-bold py-2 px-4 rounded"
              onClick={() => {
                setCurrentPage(Math.ceil(students?.length / studentsPerPage));
                scrollToTop();
              }}
            >
              {Math.ceil(students?.length / studentsPerPage)}
            </button>
          </>
        )}

        <button
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={
            currentPage === Math.ceil(students?.length / studentsPerPage)
          }
          onClick={() => {
            setCurrentPage(currentPage + 1);
            scrollToTop();
          }}
        >
          Next
        </button>
      </div>

      {showModal && (
        <StudentDetail
          showModal={showModal}
          hideModal={() => setShowModal(false)}
          details={modalDetails}
        />
      )}
    </div>
  );
}

export default StudentsScreen;

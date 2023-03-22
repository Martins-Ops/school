import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { getAuthCall } from "../utils/exports";

const tdStyle = "py-3 text-sm text-gray-500 mb-8 ";

function StudentsScreen() {
  const fetchStudents = async () => {
    const response = await getAuthCall("app/students");
    // console.log(response)
  };

  // useEffect(()=>{

  // fetchStudents()

  // },[])

  const students = [
    {
      name: "John Doe",
      id: "12345",
      class: "A",
      age: 18,
      date: "2022-01-01",
      gender: "Male",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      id: "67890",
      class: "B",
      age: 19,
      date: "2021-12-31",
      gender: "Female",
      email: "jane.smith@example.com",
    },
    {
      name: "Bob Johnson",
      id: "13579",
      class: "C",
      age: 20,
      date: "2021-11-01",
      gender: "Male",
      email: "bob.johnson@example.com",
    },
  ];

  return (
    <div>
      <div className="flex gap-20">
        <select className="rounded-lg p-2 px-10">
          <option value="JSS1">JSS1</option>
          <option value="JSS2">JSS2</option>
          <option value="JSS3">JSS3</option>
          <option value="SS1">SS1</option>
          <option value="SS2">SS2</option>
          <option value="SS3">SS3</option>
        </select>

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
          <tbody>
            {students.map((student) => (
              <tr
                className="text-left hover:bg-gray-200 cursor-pointer py-20"
                key={student.id}
              >
                <td className={tdStyle}>{student.name}</td>
                <td className={tdStyle}>{student.id}</td>
                <td className={tdStyle}>{student.class}</td>
                <td className={tdStyle}>{student.age}</td>
                <td className={tdStyle}>{student.gender}</td>
                <td className={tdStyle}>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsScreen;

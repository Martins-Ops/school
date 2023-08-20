import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authState } from "../../types/ProjectTypes";

function StudentResult() {
  const [studentScores, setStudentScores] = useState([]);

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  const fetchResult = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/app/results/",
        requestOptions
      );
      const result = await response.json();
      setStudentScores(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-4">Student Scores</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">Subject</th>
            <th className="py-2">Test Score</th>
            <th className="py-2">Exam Score</th>
            <th className="py-2">Total Score</th>
          </tr>
        </thead>
        <tbody>
          {studentScores.map((studentSubject: any) => (
            <tr key={studentSubject.id}>
              <td className="py-2">{studentSubject.subject}</td>
              <td className="py-2">{studentSubject.test_score}</td>
              <td className="py-2">{studentSubject.exam_score}</td>
              <td className="py-2">{studentSubject.total_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentResult;

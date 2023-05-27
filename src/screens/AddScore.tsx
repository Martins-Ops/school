import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/exports";
import { studentAddScoreTypes } from "../types/ProjectTypes";
import { tdStyle } from "../utils/projectStyles";
import { AiFillEdit, AiFillCheckCircle } from "react-icons/ai";
import LoadingModal from "../modals/LoadingModal";

function AddScore() {
  const [students, setStudents] = useState([]);
  const [testScores, setTestScores] = useState<{
    [key: string]: string | number;
  }>({});
  const [examScore, setExamScore] = useState(0);
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [loadingUpdate,setLoadingUpdate] = useState<boolean>(false)

  const { subjectId } = useParams();

  const fetchReq = async () => {
    try {
      const response = await get(`app/mysubjectscore/${subjectId}`);
      setStudents(response);
      console.log(response);
      setTestScores(
        response.reduce((scores: any, student: any) => {
          scores[student._id] = student.test_score;
          return scores;
        }, {})
      );
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };



  const updateResult = async (id: number) => {
    try {
      const testScore = testScores[id];

      console.log(testScore);

      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ test_score: testScore, student_id: id }),
      };


      setLoadingUpdate(true)

      const response = await fetch(
        `http://127.0.0.1:8000/app/mysubjectscore/${subjectId}/`,
        requestOptions
      );
      const result = await response.json();
      console.log(result);

      fetchReq()

      setLoadingUpdate(false)

    } catch (error) {
      // Handle error...
    }
  };

    useEffect(() => {
    fetchReq();
  }, []);

  return (
    <div className="mt-40">
      <table className="w-full my-10">
        <thead>
          <tr className="text-left">
            <th className="py-3">Name</th>
            <th className="py-3">Test</th>
            <th className="py-3">Exam</th>
            <th className="py-3">Total</th>
            <th className="py-3">Update</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student: studentAddScoreTypes) => (
            <tr
              className="text-left hover:bg-gray-200 cursor-pointer py-20"
              key={student._id}
            >
              <td className={tdStyle}>{`${student.first_name} ${student.last_name}`}</td>
              <td className={tdStyle}>
                {editingRow === student._id ? (
                  <input
                    value={testScores[student._id]?.toString() || ""}
                    type="number"
                    className="m-0 p-0 text-center bg-gray border border-black w-1/6"
                    onChange={(e) => {
                      const updatedScores = { ...testScores };
                      updatedScores[student._id] = parseInt(e.target.value, 10);
                      setTestScores(updatedScores);
                    }}
                  />
                ) : (
                  <div onClick={() => setEditingRow(student._id)}>
                    {testScores[student._id]}
                  </div>
                )}
              </td>
              <td className={tdStyle}>
                <input
                  value={student.exam_score}
                  type="text"
                  className="bg-gray text-center border border-black w-1/6"
                  onChange={(e) => {
                    /* Handle exam score change */
                  }}
                />
              </td>
              <td className={tdStyle}>
                <input
                  value={student.total_score}
                  type="text"
                  className="bg-gray text-center border border-black w-1/6"
                />
              </td>
              <td>
                {editingRow === student._id ? (
                  <AiFillCheckCircle
                    onClick={() => {
                      setEditingRow(null);
                      updateResult(student._id);
                    }}
                  />
                ) : (
                  <AiFillEdit onClick={() => setEditingRow(student._id)} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <LoadingModal loading={loadingUpdate} />

    </div>
  );
}

export default AddScore;

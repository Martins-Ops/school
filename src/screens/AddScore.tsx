import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { get } from "../utils/exports";
import { studentAddScoreTypes } from "../types/ProjectTypes";
import { tdStyle } from "../utils/projectStyles";
import { AiFillEdit,AiFillCheckCircle } from "react-icons/ai";

function AddScore() {
  const [students, setStudents] = useState([]);
const [testScores, setTestScores] = useState<{ [key: string]: string | number }>({});
  const [examScore, setExamScore] = useState(0)
  const [toUpdate, setToupddate] = useState(false)

  const [editingRow, setEditingRow] = useState(Number);




  const { subjectId } = useParams();

  const fetchReq = async () => {
  try {
    const response = await get(`app/mysubjectscore/${subjectId}`);
    setStudents(response);
    console.log(response)
    setTestScores(response.reduce((scores:any, student:any) => {
      scores[student.id] = student.test_score;
      return scores;
    }, {}));
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

useEffect(() => {
  fetchReq();
}, []);


  const updateResult = async (id: number) => {
  try {
    const testScore = testScores[id];

    console.log(id)

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test_score: testScore ,student_id:id}),
    };

const response = await fetch(`http://127.0.0.1:8000/app/mysubjectscore/${id}/`, requestOptions);
const result = await response.text();
    console.log(result);  } catch (error) {
    // Handle error...
  }
};



  return (
    <div className="mt-40">
      <table className="w-full my-10">
        <thead>
          <tr className="text-left">
            <th className="py-3">Name</th>

            {/* <th className="py-3">Class</th> */}

            <th className="py-3">Test</th>
            <th className="py-3">Exam</th>
            <th className="py-3">Total</th>
            <th className="py-3">Update</th>
          </tr>
        </thead>

     


{students?.map((student: studentAddScoreTypes) => (
  <tr className="text-left hover:bg-gray-200 cursor-pointer py-20" key={student.id}>
    <td className={tdStyle}>{`${student.first_name} ${student.last_name}`}</td>
    <td className={tdStyle}>
      {editingRow === student.id ? (
        <input
          value={testScores[student.id]?.toString() || ''}
          type="number"
          className="m-0 p-0 text-center bg-gray border border-black w-1/6"
          onChange={(e) => {
            const updatedScores = { ...testScores };
            updatedScores[student.id] = parseInt(e.target.value, 10);
            setTestScores(updatedScores);
          }}
        />
      ) : (
        <div onClick={() => setEditingRow(student.id)}>
          {testScores[student.id]}
        </div>
      )}
    </td>
    <td className={tdStyle}>
      <input
        value={student.exam_score}
        type="text"
        className="bg-gray text-center border border-black w-1/6"
        onChange={(e) => { /* Handle exam score change */ }}
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
  {editingRow === student.id ? (
    <AiFillCheckCircle onClick={() => {setEditingRow(0); updateResult(student._id)}} />
  ) : (
    <AiFillEdit onClick={() => setEditingRow(student.id)} />
  )}
</td>
  </tr>
))}


      </table>
    </div>
  );
}

export default AddScore;

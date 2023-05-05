import React, { useEffect, useState } from "react";
import { get, getLoginAuthCall } from "../utils/exports";
import StudentDetail from "../modals.tsx/StudentDetail";

function MySubjects() {

  const [subject, setSubject] = useState([])

  const fetchSubject = async () => {

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    const response = await fetch('http://127.0.0.1:8000/app/mysubjects', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    setSubject(data)

  }





  useEffect(() => {
    fetchSubject()
  }, [])

  return (
    <div className="my-32">
      <div>
        {subject?.map((each: any) => (
          <p className="bg-gray-400 my-8 mr-28 py-4 hover:bg-gray-300" key={each.id}>{each.name}</p>
        ))}
      </div>
    </div>
  );
}

export default MySubjects;

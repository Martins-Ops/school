import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

console.log(subject)
  useEffect(() => {
    fetchSubject()
  }, [])

  return (
    <div className="my-32">
<div>
  {subject?.map((each: any) => (
    <Link to={`/mysubjects/${each.id}`} className="block bg-gray-400 my-8 mr-28 py-4 hover:bg-gray-300" key={each.id}>
      {each.name}
    </Link>
  ))}
</div>
    </div>
  );
}

export default MySubjects;

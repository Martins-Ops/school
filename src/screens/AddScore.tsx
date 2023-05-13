import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import { get } from '../utils/exports';


function AddScore() {

  const [students, setStudents] = useState([])

    const { subjectId } = useParams();

   const fetchReq = async () => {
    const response = await get(`app/mysubjects/${subjectId}`);
    setStudents(response)
   };
  
  useEffect(() => {
    fetchReq()
  }, [])
  
  console.log(students)

  return (
    <div className='mt-40'>AddScore</div>
  )
}

export default AddScore
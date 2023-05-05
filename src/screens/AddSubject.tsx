import React, { useEffect, useState } from 'react'
import { classroom, get, post } from '../utils/exports';
import { TeacherTypes } from '../types/ProjectTypes';
import { inputStyles } from '../utils/styles';
import BtnTeal from '../components/BtnTeal';

function AddSubject() {
const [subject,setSubject] = useState({
  name:'',
  class_offered:'',
  teacher:''
})

const [teachers, setTeachers] = useState([])

  const fetchTeachers = async () => {
    const response = await get("app/teachers");
    setTeachers(response)
  };

  const handlerFormChange = (e: any) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const submitHandler=async()=>{
    const response = await post("app/subjects/",subject);
    console.log(response)

    if(response.status===201){
      setSubject(subject)
    }else{
      alert('error while creating teacher. contact admin')
    }
  }

  useEffect(() => {
    fetchTeachers()
  }, [])


  return (
    <form onSubmit={submitHandler} className='mt-28'>

      <div className="mb-20 flex gap-20 mt-10 mx-12">
        <input name='name' placeholder='Add subject name' type="text" id="last-name" value={subject.name} onChange={handlerFormChange} className={inputStyles} required />
      </div>

      <div className="mb-20 flex gap-20 mt-10 mx-12">
        <select id="nationality" name='class_offered' value={subject.class_offered} onChange={handlerFormChange} className={inputStyles} required>
          <option value="">Select a class</option>
          {classroom.map((classroom) => (
            <option key={classroom.id} value={classroom.id}>{classroom.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-6 flex gap-20 mt-10 mx-12">
        <select id="nationality"name='teacher'  value={subject.teacher} onChange={handlerFormChange} className={inputStyles} required>
          <option value="">Select a Teacher</option>
          {teachers?.map((teacher:TeacherTypes) => (
            <option key={teacher.id} value={teacher.id}>{teacher.last_name}</option>
          ))}
        </select>
      </div>

      <BtnTeal />

    </form>
  )
}

export default AddSubject
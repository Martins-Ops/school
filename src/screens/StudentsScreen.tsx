import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import { getAuthCall } from '../utils/exports';

function StudentsScreen() {

const fetchStudents = async()=>{
    const response =await getAuthCall('app/students')
   // console.log(response)

}

// useEffect(()=>{

// fetchStudents()

// },[])

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

    </div>

  )
}

export default StudentsScreen
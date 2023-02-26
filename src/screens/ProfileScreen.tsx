import {useState}from 'react'
import AddStudents from './AddStudents'
import StudentsScreen from './StudentsScreen'

function ProfileScreen() {
    const [currScreen, setCurrScreen] = useState<string>('viewStudents')
  return (
    <div className='flex w-full gap-20'>
        <div className='w-1/4 h-screen bg-teal-700'>
            <h3 className='text-white text-center text-3xl font-mono mt-8'>Profile</h3>
            <div className='mt-12 mx-10'>
                <p onClick={()=>{setCurrScreen('viewStudents')}} className='text-gray-300 text-xl pointer mb-8 hover:border hover:px-4 hover:py-1 hover:bg-teal-900'>View Students</p>
                <p onClick={()=>{setCurrScreen('addStudents')}} className='text-gray-300 text-xl pointer mb-8 hover:border hover:px-4 hover:py-1 hover:bg-teal-900'>Add Student</p>
                <p className='text-gray-300 text-xl pointer mb-8 hover:border hover:px-4 hover:py-1 hover:bg-teal-900'>Change Password</p>
                <p className='text-gray-300 text-xl pointer mb-8 hover:border hover:px-4 hover:py-1 hover:bg-teal-900'>Upload Results</p>
                </div>
        </div>

        
<div className='mt-10 flex-grow w-3/4 mx-auto text-center'>

        {currScreen==='viewStudents'&& <StudentsScreen />}
        {currScreen === 'addStudents' && <AddStudents />}

        </div>

    </div>
  )
}

export default ProfileScreen
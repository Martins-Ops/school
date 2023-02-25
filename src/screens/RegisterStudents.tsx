import { useState } from 'react';

import { countries } from '../utils/countries';

function ProfileForm() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [nationality, setNationality] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [sex, setSex] = useState('');
  const [homeAddress, setHomeAddress] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (



<form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-6 w-full">
            <div className="mb-6">
           
            <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border-b border-gray-400 py-2 px-3 w-full rounded-none focus:outline-none focus:border-blue-500" placeholder='firstname' required />
            </div>
            <div className="mb-6">
            <label htmlFor="middle-name" className="block text-gray-700 font-bold mb-2">Middle Name:</label>
            <input type="text" id="middle-name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} className="border-b border-gray-400 py-2 px-3 w-full rounded-none focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
            <label htmlFor="last-name" className="block text-gray-700 font-bold mb-2">Last Name:</label>
            <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border-b border-gray-400 py-2 px-3 w-full rounded-none focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-6">
            <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
            <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} className="border-b border-gray-400 py-2 px-3 w-full rounded-none focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-6">
            <label htmlFor="nationality" className="block text-gray-700 font-bold mb-2">Nationality:</label>
            <select id="nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} className="border-b border-gray-400 py-2 px-3 w-full rounded-none focus:outline-none focus:border-blue-500" required>
                <option value="">Select a country</option>
                {countries.map((country) => (
                <option key={country.code} value={country.name}>{country.name}</option>
                ))}
            </select>
            </div>
            <div className="mb-6">
            <label htmlFor="student-class" className="block text-gray-700 font-bold mb-2">Student Class:</label>
            <input type="text" id="student-class" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} className="border-b border-gray-400 py-2 px-3 w-full rounded-none focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
   

   


        <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Save
            </button>
        </div>
        </div>
        </div>

</form>
 )}

export default ProfileForm
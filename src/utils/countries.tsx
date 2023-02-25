export var countries = [
    {name:'Mali',code:231},
    {name:'Togo',code:441}
]


//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       <div className="mb-6">
//         <label htmlFor="first-name" className="block text-gray-700 font-bold mb-2">First Name:</label>
//         <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border border-gray-400 py-2 px-3 w-full rounded-lg shadow-sm focus:outline-none focus:border-blue-500" required />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="middle-name" className="block text-gray-700 font-bold mb-2">Middle Name:</label>
//         <input type="text" id="middle-name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} className="border border-gray-400 py-2 px-3 w-full rounded-lg shadow-sm focus:outline-none focus:border-blue-500" />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="last-name" className="block text-gray-700 font-bold mb-2">Last Name:</label>
//         <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border border-gray-400 py-2 px-3 w-full rounded-lg shadow-sm focus:outline-none focus:border-blue-500" required />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
//         <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} className="border border-gray-400 py-2 px-3 w-full rounded-lg shadow-sm focus:outline-none focus:border-blue-500" required />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="nationality" className="block text-gray-700 font-bold mb-2">Nationality:</label>
//         <select id="nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} className="border border-gray-400 py-2 px-3 w-full rounded-lg shadow-sm focus:outline-none focus:border-blue-500" required>
//           <option value="">Select a country</option>
//           {countries.map((country) => (
//             <option key={country.code} value={country.name}>{country.name}</option>
//           ))}
//         </select>
//       </div>

//       <div className="mb-6">
//         <label htmlFor="student-class" className="block text-gray-700 font-bold mb-2">Student Class:</label>
//         <input type="text" id="student-class" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//     </div>

//     <div className="mb-6">
//         <label htmlFor="sex" className="block text-gray-700 font-bold mb-2">Sex:</label>
//         <div className="mt-2">
//             <label className="inline-flex items-center">
//                 <input type="radio" className="form-radio" name="sex" value="male" checked={sex === "male"} onChange={(e) => setSex(e.target.value)} />
//                 <span className="ml-2">Male</span>
//             </label>
//             <label className="inline-flex items-center ml-6">
//                 <input type="radio" className="form-radio" name="sex" value="female" checked={sex === "female"} onChange={(e) => setSex(e.target.value)} />
//                 <span className="ml-2">Female</span>
//             </label>
//         </div>
//     </div>

//     {/* <div className="mb-6">
//         <label htmlFor="home-address" className="block text-gray-700 font-bold mb-2">Home Address:</label>
//         <textarea id="home-address" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3"></textarea>
//     </div> */}

//     <div className="flex items-center justify-center">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//             Save
//         </button>
//     </div>


// </form>
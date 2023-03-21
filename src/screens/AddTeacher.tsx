import React, { useState } from "react";
import { countries } from "../utils/countries";
import { apiRequest, post } from "../utils/exports";

function AddTeacher() {
  interface FormDetails {
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    //   date_of_birth: string;
    address: string;
    nationality: string;
    state_of_origin: string;
    gender: string;
    student_class: Number;
  }

  const initialFormDetails: FormDetails = {
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    //   date_of_birth: '',
    address: "",
    nationality: "",
    state_of_origin: "",
    gender: "",
    student_class: 0,
  };

  const [formDetails, setFormDetails] =
    useState<FormDetails>(initialFormDetails);

  const handlerFormChange = (e: any) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await apiRequest("POST", "app/addstudent", formDetails);
    const data = await response;

    // const response = await post('app/addstudent',formDetails)
    // const data = await response
    // console.log(data)
  };

  const inputStyles =
    "border  border-gray-300 py-2 px-3 w-1/2 rounded-lg focus:outline-none focus:border-blue-500";

  return (
    <div>
      <h3 className="text-lg bold-500 capitalize mx-auto capitalize">Add a New Teacher</h3>

      <form onSubmit={submitHandler} action="">
        <div className="mb-6 flex gap-20 mt-10 mx-12">
          <input
            onChange={handlerFormChange}
            name="last_name"
            type="text"
            id="first-name"
            className={inputStyles}
            placeholder="Surname"
            required
          />

          <input
            onChange={handlerFormChange}
            name="first_name"
            type="text"
            id="first-name"
            className={inputStyles}
            placeholder="Firstname"
            required
          />
        </div>

        <div className="mb-6 flex gap-20 mt-10 mx-12">
          <input
            onChange={handlerFormChange}
            name="middle_name"
            type="text"
            id="first-name"
            className={inputStyles}
            placeholder="Middle Name"
            required
          />

          <input
            onChange={handlerFormChange}
            name="email"
            type="email"
            id="first-name"
            className={inputStyles}
            placeholder="Email Address"
            required
          />
        </div>

        <div className="mb-6 flex gap-20 mt-10 mx-12">
          {/* <input onChange={handlerFormChange} name='date_of_birth' type="date" id="first-name"  className="border-b border-gray-400 py-2 px-3 w-1/2 rounded-none focus:outline-none focus:border-blue-500" placeholder='Date of Birth' required /> */}

          <input
            onChange={handlerFormChange}
            name="address"
            type="select"
            className={inputStyles}
            placeholder="Residential Address"
            required
          />
          <input
            onChange={handlerFormChange}
            name="address"
            type="number"
            className={inputStyles}
            placeholder="Address"
            required
          />
        </div>

        <div className="mb-6 flex gap-20 mt-10 mx-12">
          <select
            onChange={handlerFormChange}
            name="nationality"
            id="nationality"
            className={inputStyles}
            required
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <select
            onChange={handlerFormChange}
            name="state_of_origin"
            id="state"
            className={inputStyles}
            required
          >
            <option value="">State of origin</option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6 flex gap-20 mt-10 mx-12">
          <select
            onChange={handlerFormChange}
            name="gender"
            id="nationality"
            className={inputStyles}
            required
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select
            onChange={handlerFormChange}
            name="student_class"
            id="nationality"
            className={inputStyles}
            required
          >
            <option value="">Student Class</option>

            <option value={1}>JSS1</option>
            <option value={2}>JSS2</option>
            <option value={3}>JSS3</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white px-5 py-3 rounded-lg text-center mt-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTeacher;

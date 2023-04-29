import React, { useState } from "react";
import { countries } from "../utils/countries";
import { apiRequest, post } from "../utils/exports";
import { ToastContainer, toast } from "react-toastify";


function AddStudents() {
  const [loading,setLoading] = useState(false)
  interface FormDetails {
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    nationality: string;
    state_of_origin: string;
    gender: string;
    student_class: Number;
    is_teacher: boolean;
    is_student: boolean;
    is_principal: boolean;
    password: string;
  }

  const initialFormDetails: FormDetails = {
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    nationality: "",
    state_of_origin: "",
    gender: "",
    student_class: 0,
    is_teacher: false,
    is_student: true,
    is_principal: false,
    password: "password1234",
  };




  const [formDetails, setFormDetails] =
    useState<FormDetails>(initialFormDetails);
  
    const notify = () => toast("Student has been added");


  const handlerFormChange = (e: any) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await post("auth/signup", formDetails);
      setLoading(false);
      const data = await response.data;
      if (data.email) {
        notify();
        setFormDetails(initialFormDetails);
      }
      console.log(data);
    } catch (error) {}
  };

  const inputStyles =
    "border border-gray-300 py-2 px-3 w-1/2 rounded-lg focus:outline-none focus:border-blue-500";

  return (
    <div className="my-32">
      <h3 className="text-lg bold-500 capitalize mx-auto">Add new student</h3>
      <ToastContainer />

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

export default AddStudents;

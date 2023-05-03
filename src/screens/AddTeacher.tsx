import React, { useState } from "react";
import { countries } from "../utils/countries";
import { post } from "../utils/exports";
import { ToastContainer, toast } from "react-toastify";

function AddTeacher() {
  const [loading, setLoading] = useState(false);

  interface FormDetails {
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    password: string;
    nationality: string;
    state_of_origin: string;
    gender: string;
    is_teacher: boolean;
    is_student: boolean;
    is_principal: boolean;
  }

  const initialFormDetails: FormDetails = {
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    password: "password1234",
    nationality: "",
    state_of_origin: "",
    gender: "",
    is_teacher: true,
    is_student: false,
    is_principal: false,
  };

  const notify = () => toast("Teacher has been added");

  const [formDetails, setFormDetails] =
    useState<FormDetails>(initialFormDetails);

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
    "border  border-gray-300 py-2 px-3 w-1/2 rounded-lg focus:outline-none focus:border-blue-500";

  return (
    <div className="mt-32">
      <h3 className="text-lg bold-500 capitalize mx-auto capitalize">
        Add a New Teacher
      </h3>
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
            value={formDetails.last_name}
          />

          <input
            onChange={handlerFormChange}
            name="first_name"
            type="text"
            id="first-name"
            className={inputStyles}
            placeholder="Firstname"
            required
            value={formDetails.first_name}
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
            value={formDetails.middle_name}
          />

          <input
            onChange={handlerFormChange}
            name="email"
            type="email"
            id="first-name"
            className={inputStyles}
            placeholder="Email Address"
            required
            value={formDetails.email}
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

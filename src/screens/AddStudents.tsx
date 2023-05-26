import React, { useState } from "react";
import { countries } from "../utils/countries";
import { ToastContainer } from "react-toastify";
import BtnTeal from "../components/BtnTeal";
import { post } from "../utils/exports";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Rodal from "rodal";
import { FormDetails } from "../types/ProjectTypes";

function AddStudents() {
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const initialFormDetails: FormDetails = {
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    nationality: "",
    state_of_origin: "",
    gender: "",
    classroom: 0,
    is_teacher: false,
    is_student: true,
    is_principal: false,
    password: "password1234",
  };

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
        //  notify();

        setSuccessModal(true);
        setTimeout(() => {
          setSuccessModal(false);
        }, 5000);

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
            id="last_name"
            className={inputStyles}
            placeholder="Surname"
            value={formDetails.last_name}
            required
          />

          <input
            onChange={handlerFormChange}
            name="first_name"
            type="text"
            id="first_name"
            className={inputStyles}
            placeholder="Firstname"
            value={formDetails.first_name}
            required
          />
        </div>

        <div className="mb-6 flex gap-20 mt-10 mx-12">
          <input
            onChange={handlerFormChange}
            name="middle_name"
            type="text"
            id="middle_name"
            className={inputStyles}
            placeholder="Middle Name"
            value={formDetails.middle_name}
            required
          />

          <input
            onChange={handlerFormChange}
            name="email"
            type="email"
            id="email"
            className={inputStyles}
            placeholder="Email Address"
            value={formDetails.email}
            required
          />
        </div>

        <div className="mb-6 flex gap-20 mt-10 mx-12">
          <select
            onChange={handlerFormChange}
            name="nationality"
            id="nationality"
            className={inputStyles}
            value={formDetails.nationality}
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
            value={formDetails.state_of_origin}
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
            value={formDetails.gender}
            required
          >
            <option value="">Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>

          <select
            onChange={handlerFormChange}
            name="classroom"
            id="classroom"
            className={inputStyles}
            required
          >
            <option value="">Student Class</option>

            <option value={1}>JSS1</option>
            <option value={2}>JSS2</option>
            <option value={3}>JSS3</option>
          </select>
        </div>

        <BtnTeal loading={loading} value="submit" />
      </form>

      <Rodal visible={successModal}>
        <h3 className="text-lg font-bold mb-4">Student added sucessfully</h3>

        {successModal && (
          <div className="success-checkmark w-20 h-20 mx-auto">
            <AiOutlineCheckCircle className="text-green-500 w-12 h-12 animate-success-check" />
          </div>
        )}
      </Rodal>
    </div>
  );
}

export default AddStudents;

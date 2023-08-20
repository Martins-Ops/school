import React, { useState } from "react";
import { countries } from "../utils/countries";
import { post } from "../utils/exports";
import { ToastContainer, toast } from "react-toastify";
import { inputStyles } from "../utils/styles";
import BtnTeal from "../components/BtnTeal";
import Rodal from "rodal";
import { AiOutlineCheckCircle } from "react-icons/ai";
import LoadingSpinner from "../components/LoadingSpinner";
import { TeacherFormDetails } from "../types/ProjectTypes";


function AddTeacher() {
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);



  const initialFormDetails: TeacherFormDetails = {
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


  const [formDetails, setFormDetails] =
    useState<TeacherFormDetails>(initialFormDetails);

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
        setSuccessModal(true);
        setTimeout(() => {
          setSuccessModal(false);
        }, 5000);

        setFormDetails(initialFormDetails);
      }
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className="mt-32">
      <h3 className="text-lg bold-500 mx-auto capitalize">
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

        <BtnTeal value="Submit" loading={loading} />
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

export default AddTeacher;

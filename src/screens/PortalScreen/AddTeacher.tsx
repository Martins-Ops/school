import React, { useState } from "react";
import { states } from "../../utils/countries";
import { ToastContainer } from "react-toastify";
import BtnTeal from "../../components/BtnTeal";
import { authPost } from "../../utils/exports";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Rodal from "rodal";
import { StudentFormDetails } from "../../types/ProjectTypes";
import PortalFormInput from "./components/PortalFormInput";

function AddTeacher() {
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const initialFormDetails: StudentFormDetails = {
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
    profile_image: null,
  };

  const [formDetails, setFormDetails] = useState<StudentFormDetails>(
    initialFormDetails
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageFile = e.target.files[0];
      setFormDetails({ ...formDetails, profile_image: imageFile });
    }
  };
  const handlerFormChange = (e: any) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();

      Object.entries(formDetails).forEach(([key, value]) => {
        if (key === "profile_image") {
          formData.append(key, value); // Append the file
        } else {
          formData.append(key, JSON.stringify(value)); // Append other form data as stringified JSON
        }
      });

      const response = await authPost("auth/signup/", formDetails);

      setLoading(false);
      const data = await response.data;
      if (data.email) {
        setSuccessModal(true);
        setTimeout(() => {
          setSuccessModal(false);
        }, 3000);
        setFormDetails(initialFormDetails);
      }
      console.log(data);
    } catch (error) {
      // Handle error
    }
  };

  const inputStyles =
    "border border-gray-300 py-2 px-3 w-1/2 rounded-lg focus:outline-none focus:border-blue-500";

  const inputFlexDiv = "mb-16 flex gap-4 md:gap-20 mt-10 mx-12";

  return (
    <div className="my-12">
      <h3 className="text-lg bold-500 capitalize mx-auto">Add new Teacher</h3>
      <ToastContainer />

      <form onSubmit={submitHandler} action="">
        <div className={inputFlexDiv}>
          <PortalFormInput
            onChange={handlerFormChange}
            name="last_name"
            type="text"
            id="last_name"
            placeholder="Surname"
            value={formDetails.last_name}
            required
          />

          <PortalFormInput
            onChange={handlerFormChange}
            name="first_name"
            type="text"
            id="first_name"
            placeholder="Firstname"
            value={formDetails.first_name}
            required
          />
        </div>

        <div className={inputFlexDiv}>
          <PortalFormInput
            onChange={handlerFormChange}
            name="middle_name"
            type="text"
            id="middle_name"
            placeholder="Middle Name"
            value={formDetails.middle_name}
            required
          />

          <PortalFormInput
            onChange={handlerFormChange}
            name="email"
            type="email"
            id="email"
            placeholder="Email Address"
            value={formDetails.email}
            required
          />
        </div>

        <div className={inputFlexDiv}>
          <PortalFormInput
            onChange={handlerFormChange}
            name="contact_number"
            type="number"
            id="contact_number"
            placeholder="Contact Number"
            value={formDetails.middle_name}
            required
          />

          <PortalFormInput
            onChange={handlerFormChange}
            name="parent_number"
            type="number"
            id="parent_number"
            placeholder="Phone Number 2"
            value={formDetails.email}
            required={false}
          />
        </div>

        <div className={inputFlexDiv}>
          <PortalFormInput
            onChange={handlerFormChange}
            name="address"
            type="text"
            id="address"
            placeholder="House_Address"
            value={formDetails.first_name}
            required
          />

          <select
            onChange={handlerFormChange}
            name="state_of_origin"
            id="state"
            className={inputStyles}
            value={formDetails.state_of_origin}
            required
          >
            <option value="">State of origin</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
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
            <option value="">Marital Status</option>

            <option value={1}>Single</option>
            <option value={2}>Married</option>
          </select>
        </div>

        <div className="my-10">
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageChange}
            // className={inputStyles}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload" className={inputStyles}>
            Add Image
          </label>
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

export default AddTeacher;

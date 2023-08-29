import React from "react";

const inputStyles =
  "border  border-gray-300 py-2 px-3 w-full rounded-lg focus:outline-none focus:border-blue-500 bg-gray-200";
const labelStyle = "block align-left mb-4";

const subjects = ["English", "Mathematics", "Chemistry"];

function TeacherDetail({ details, hideModal }: any) {
  console.log(details);
  return (
    <div className="pt-28 flex flex-col ">
      <button onClick={hideModal} className="absolute top-10 left-10">
        X
      </button>
      <h3>Teacher Details</h3>
      <div className="flex items-center gap-8 justify-center text-center mt-20 mx-10">
        <div className="w-1/2">
          <label className={labelStyle}>First Name</label>
          <input className={inputStyles} type="text" value={details.name} />
        </div>

        <div className="w-2/4">
          <label className={labelStyle}>Last Name</label>
          <input className={inputStyles} type="text" value={details.lastName} />
        </div>
      </div>

      <div className="flex items-center gap-8 justify-center text-center mt-10 mx-10">
        <div className="w-1/2">
          <label className={labelStyle}>Email</label>
          <input className={inputStyles} type="text" value={details.email} />
        </div>

        <div className="w-2/4">
          <label className={labelStyle}>Subjects</label>
          <select
            // onChange={handlerFormChange}
            name="state_of_origin"
            id="state"
            className={inputStyles}
            value={"Mathematics"}
            required
          >
            <option value="">{subjects[0]}</option>
            {subjects.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;

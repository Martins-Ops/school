import React from "react";

interface propTypes {
  value: string;
  onChange: any;
  name: string;
  type: string;
  id: string;
  placeholder: string;
  required: boolean;
}

function PortalFormInput({
  value,
  onChange,
  name,
  type,
  id,
  placeholder,
  required,
}: propTypes) {
  const inputStyles =
    "border border-gray-300 py-2 px-3 w-1/2 rounded-lg focus:outline-none focus:border-blue-500";

  return (
    <>
      <input
        onChange={onChange}
        name={name}
        type={type}
        id={id}
        className={inputStyles}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </>
  );
}

export default PortalFormInput;

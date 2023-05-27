import React from "react";
import { FaSpinner } from "react-icons/fa";

function LoadingSpinner() {
  return (
   <span className="flex items-center justify-center">
            <FaSpinner className="animate-spin text-white" />
    </span>
  );
}

export default LoadingSpinner;

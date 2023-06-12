import React from "react";
import { FaSpinner } from "react-icons/fa";

function LoadingSpinner({ color }:any) {
  var spinnerColor = 'text-'+color
  return (
   <span className="flex items-center justify-center">
            <FaSpinner className={`animate-spin ${spinnerColor}`} />
    </span>
  );
}

export default LoadingSpinner;

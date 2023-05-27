import React from "react";
import { FaSpinner } from "react-icons/fa";
import Rodal from "rodal";

function LoadingModal({loading}:any) {
  return (
    <Rodal visible={loading} width={400}
  height={200}
  className="rounded-lg bg-gray-100 relative">
      <span className="flex items-center justify-center">
        <FaSpinner className="animate-spin text-lg text-black" />
      </span>
    </Rodal>
  );
}

export default LoadingModal;

import logo from "../../src/assets/images/logo.png";
import { FaUser, FaWarehouse, FaFacebookMessenger } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-700 py-8 px-4 md:px-8 md:gap-10">
      <div className="max-w-screen-lg mx-auto md:flex justify-center">
        <div className="w-full md:w-1/3 my-10">
          <img src={logo} className="w-32 h-32 justify-center" alt="logo" />
          <h2 className="text-red-600 text-xl my-2 font-bold uppercase">
            ST PAUL COLLEGE
          </h2>
        </div>

        <div className="w-full md:w-1/3 my-10">
          <p className="flex gap-4 text-white my-4">
            <FaFacebookMessenger color="white" /> mspcollegesagamu@gmail.com
          </p>
          <p className="flex gap-2 text-white my-4">
            <FaUser /> (+234)7030151626
          </p>
          <p className="flex gap-2 text-white my-4">
            <FaUser /> (+234)7030151626
          </p>
        </div>

        <div className="w-full md:w-1/3 my-10">
          <p className="flex gap-4 text-white my-4">
            <FaWarehouse color="white" /> Apele community{" "}
          </p>
          <p className="flex gap-2 text-white my-4">
            <FaUser /> Off Court road, Makun
          </p>
          <p className="flex gap-2 text-white my-4">
            <FaUser /> Sagamu ogun state Nigeria
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

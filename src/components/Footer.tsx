import logo from "../../src/assets/images/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const params = pathSegments[pathSegments.length - 1];
  const dashboardParams = pathSegments[pathSegments.length - 2];

  const dashboardParams2 = pathSegments[pathSegments.length - 3]; // pls optimise and remove this logic

  return (
    <div>
      {params === "login" ||
      params === "dashboard" ||
      dashboardParams2 === "dashboard" ||
      dashboardParams === "dashboard" ? (
        <></>
      ) : (
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
                <AiOutlineMail color="white" /> mspcollegesagamu@gmail.com
              </p>
              <p className="flex gap-2 text-white my-4">
                <BsTelephoneInbound /> (+234)7030151626
              </p>
              <p className="flex gap-2 text-white my-4">
                <BsTelephoneInbound /> (+234)7030151626
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;

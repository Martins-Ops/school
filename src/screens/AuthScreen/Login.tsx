import { FaUser, FaLock, FaSpinner } from "react-icons/fa";
import { BASE_URL, post } from "../../utils/exports";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import img2 from "../..//assets/images/img6.jpg";

const loginInput = "w-full  border-none focus:outline-none";
const loginInputDiv =
  "flex items-center w-3/4 border-b border-gray-300 pb-3 mb-12 mt-8 ";

function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkUser = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const response = await fetch(`${BASE_URL}app/user/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      const result = await response.json();
      console.log(result);
      localStorage.setItem("is_teacher", result.is_teacher);
      localStorage.setItem("is_student", result.is_student);
      localStorage.setItem("is_principal", result.is_principal);

      if (result.is_principal === true) {
        navigate("/dashboard", { replace: true });
      } else if (result.is_teacher === true) {
        navigate("/mysubjects", { replace: true });
      } else if (result.is_student === true) {
        navigate("/myresults", { replace: true });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const [loading, setLoading] = useState(false);
  const [loginErr, setLoginerr] = useState(false);
  const [passwordInputError, setPasswordInputErr] = useState(false);
  const [emailInputError, setemailInputErr] = useState(false);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginerr(false);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setPasswordInputErr(false);
    setemailInputErr(false);
  };

  const loginHandler = async () => {
    if (credentials.email.length < 3) {
      setemailInputErr(true);
    } else if (credentials.password.length < 4) {
      setPasswordInputErr(true);
    } else {
      try {
        setLoading(true);
        const response = await post("auth/login/", {
          email: credentials.email,
          password: credentials.password,
        });
        setLoading(false);
        const data = await response.data;

        if (data) {
          console.log(data);
          localStorage.setItem("isLoggedin", "true");
          document.cookie = `token=${data.access} `;

          checkUser();
        }
      } catch (error) {
        setLoginerr(true);
        setCredentials({ ...credentials, password: "" });
        setLoading(false);
      }
    }
  };
  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-0 md:w-1/2 bg-black bg-opacity-60">
        <img
          src={img2}
          alt={img2}
          className="h-full brightness-50 object-cover"
        />
      </div>
      <div className="min-h-screen bg-gray-100 w-full md:w-1/2  items-center">
        <div className="bg-white pt-40 w-full h-screen p-10 rounded-lg shadow-lg">
          {loginErr && (
            <p className="text-red-700 py-8">Invalid email or password</p>
          )}
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <div className={loginInputDiv}>
            <FaUser className="text-gray-400 mr-3" />
            <input
              onChange={handleChange}
              type="email"
              className={loginInput}
              placeholder="Email"
              name="email"
              value={credentials.email}
            />
          </div>
          {emailInputError && (
            <p className="text-red-700 text-sm mt-1">Invalid Email</p>
          )}
          <div className={loginInputDiv}>
            <FaLock className="text-gray-400 mr-3" />
            <input
              onChange={handleChange}
              type="password"
              className={loginInput}
              placeholder="Password"
              name="password"
              value={credentials.password}
            />
          </div>
          {passwordInputError && (
            <p className="text-red-700 text-sm mt-4">
              Password must be greater than 4 characters
            </p>
          )}

          <button
            onClick={loginHandler}
            className=" mt-4 w-2/3 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg relative"
          >
            {loading ? (
              <>
                <span className="flex items-center justify-center absolute top-0 left-0 w-full h-full">
                  <FaSpinner className="animate-spin text-white" />
                </span>
                <span className="opacity-0">Sign In</span>
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

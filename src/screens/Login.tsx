import { FaUser, FaLock } from "react-icons/fa";
import {
  BASE_URL,
  getAuthCall,
  getLoginAuthCall,
  post,
} from "../utils/exports";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkUser = async (token: string) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    //  myHeaders.append("Content-Type", "application/json");

    try {
      const response = await fetch(`${BASE_URL}app/user/`, {
        method: "GET",
        headers: myHeaders,
        credentials: "include",
        redirect: "follow",
      });

      const result = await response.text();
      console.log(result);
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
        const response = await post("auth/login", {
          email: credentials.email,
          password: credentials.password,
        });
        setLoading(false);
        const data = await response.data;

        if (data) {
          console.log(data);
          localStorage.setItem("token", data.access);
          localStorage.setItem("isLoggedin", "true");

          document.cookie = `access_token=${data.access}; HttpOnly`;

          navigate("/dashboard", { replace: true });
          checkUser(data.access);
        }
      } catch (error) {
        setLoginerr(true);
        setCredentials({ ...credentials, password: "" });
        setLoading(false);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        {loginErr && (
          <p className="text-red-700 py-8">Invalid email or password</p>
        )}
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="flex items-center border-b border-gray-300 pb-3 mt-8 mb-2">
          <FaUser className="text-gray-400 mr-3" />
          <input
            onChange={handleChange}
            type="email"
            className="w-full border-none focus:outline-none"
            placeholder="Email"
            name="email"
            value={credentials.email}
          />
        </div>
        {emailInputError && (
          <p className="text-red-700 text-sm mt-1">Invalid Email</p>
        )}
        <div className="flex items-center border-b border-gray-300 mt-4 py-3">
          <FaLock className="text-gray-400 mr-3" />
          <input
            onChange={handleChange}
            type="password"
            className="w-full border-none focus:outline-none"
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
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg mt-6"
        >
          {!loading ? "Sign In" : "..."}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;

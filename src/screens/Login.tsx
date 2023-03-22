
import { FaUser, FaLock } from 'react-icons/fa';
import { post } from '../utils/exports';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const [loading,setLoading] = useState(false)
   const [loginErr,setLoginerr] = useState(false)
   const [passwordInputError, setPasswordInputErr] = useState(false)
   const [usernameInputError, setUsernameInputErr] = useState(false)

   const navigate = useNavigate()

const [credentials, setCredentials] = useState<{ username: string, password: string }>({ username: '', password: '' });

const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setLoginerr(false)
  setCredentials({...credentials, [e.target.name]: e.target.value})
  setPasswordInputErr(false)
  setUsernameInputErr(false)
}
 

const loginHandler=async()=>{

 if(credentials.username.length <3){
    setUsernameInputErr(true)
  }else if(credentials.password.length <4 ){
    setPasswordInputErr(true)
  }
  
  else{
        try{
    setLoading(true)
    const response =  await post('login',
    {
    username:credentials.username,
    password:credentials.password
   })
   setLoading(false)
   const data = await response.data
   console.log(data.token)
   if (data.status==='error'){
    setLoginerr(true)
     setCredentials({...credentials, 'password': ''})
   }else{
     localStorage.setItem('token',data.token)
     localStorage.setItem('isLoggedin','true')
    navigate('/')
   }


  }catch(error){
  }

  }
 
}
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        {loginErr && (
          <p className="text-red-700">Invalid Username or password</p>
        )}
        <div className="flex items-center border-b border-gray-300 pb-3 mt-8">
          <FaUser className="text-gray-400 mr-3" />
          <input
            onChange={handleChange}
            type="email"
            className="w-full border-none focus:outline-none"
            placeholder="Email"
            name="username"
            value={credentials.username}
          />
        </div>
        {usernameInputError && (
          <p className="text-red-700 text-sm mt-1 absolute">
            Username must be greater than 4 characters
          </p>
        )}
        <div className="flex items-center border-b border-gray-300 py-3">
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
          className="w-full bg-blue-900 hover:bg-teal-600 text-white font-bold py-3 rounded-lg mt-6"
        >
          {!loading ? "Sign In" : "..."}
        </button>
      </div>
    </div>
  );
}


export default LoginPage;

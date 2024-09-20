import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";
import Inputs from "../../components/inputs.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="h-full w-full  flex justify-center items-center">
      <div className=" h-[60vh] lg:h-[70vh] w-full lg:w-[30vw] md:w-[35vw]  rounded-2xl shadow-2xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  overflow-hidden  flex flex-col justify-center items-center text-white  px-2 py-4 gap-y-4 lg:px-5 lg:py-10 lg:gap-y-20 border-2 border-stone-800 ">

        <h1 className="text-3xl font-semibold text-center text-gray-300 col-span-2">
          Login
        
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-6  rounded-md">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <Inputs
              type="text"
              placeholder="Enter username"
              handleInput={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
          
            <Inputs type="password" placeholder="enter your password" handleInput={(e) => setPassword(e.target.value)}/>
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-primary btn-outline w-full glass  " disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

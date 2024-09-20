import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";
import Inputs from "../../components/Inputs.jsx";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center ">
      <section className="w-full h-fit md:w-[45vw]  lg:w-[30vw] xl:w-[25vw] rounded-lg lg:rounded-xl shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 text-white border-2 border-stone-800 px-2 py-4 text-center lg:px-4 lg:py-8">
        <label className="lg:text-3xl font-semibold text-center ">
          Sign Up
        </label>

        <form
          onSubmit={handleSubmit}
          className="text-white h-full w-full flex flex-col gap-y-2 lg:gap-y-4"
        >
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-yellow-300">
                Full Name
              </span>
            </label>
            <Inputs
              placeholder="John Doe"
              handleInput={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text  text-yellow-300">
                Username
              </span>
            </label>
            <Inputs
              placeholder="johndoe"
              handleInput={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-yellow-300">
                Password
              </span>
            </label>
            <Inputs
              type="password"
              placeholder="Enter Password"
              handleInput={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-yellow-400">
                Confirm Password
              </span>
            </label>
            <Inputs
              type="password"
              placeholder="Confirm Password"
              handleInput={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            href="#"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-primary w-full glass   "
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default SignUp;

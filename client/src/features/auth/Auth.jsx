import React, { useState } from "react";
import { registerUser, loginUser } from "./authSlice";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    cpassword: "",
    image: "",
  });

  // changes the values according to the name identifers of the inputs
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // refers to if the page is on signup form or login in form

  const [isSignUp, setisSignUp] = useState(false);
  // disaptch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(
        registerUser({
          fullName: inputs.fullName,
          userName: inputs.userName,
          email: inputs.email,
          password: inputs.password,
          image: inputs.image,
        })
      );
    } else {
      dispatch(
        loginUser({
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
        })
      );
      dispatch(login());
      navigate("/postfeed");
    }
  };

  return (
    <section className="flex items-center justify-center mt-20">
      <article classNameName="">
        <form
          className="max-w-sm mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>

          {/* fullname */}
          {isSignUp && (
            <>
              <div className="relative border-b-2 focus-within:border-blue-500">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder=" "
                  value={inputs.fullName}
                  onChange={handleChange}
                  className="block w-full appearance-none focus:outline-none bg-transparent"
                />
                <label
                  htmlFor="fullName"
                  className="absolute top-0 -z-1 duration-200 origin-0"
                >
                  Full Name
                </label>
              </div>
              {/* username */}
              <div className="relative border-b-2 focus-within:border-blue-500">
                <input
                  type="text"
                  name="userName"
                  placeholder=" "
                  value={inputs.userName}
                  onChange={handleChange}
                  className="block w-full appearance-none focus:outline-none bg-transparent"
                />
                <label
                  htmlFor="userName"
                  className="absolute top-0 -z-1 duration-200 origin-0"
                >
                  Username
                </label>
              </div>
            </>
          )}

          {/* email */}

          <div className="relative border-b-2 focus-within:border-blue-500">
            <input
              type="text"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
            />
            <label
              htmFor="email"
              className="absolute top-0 -z-1 duration-200 origin-0"
            >
              Email
            </label>
          </div>
          {/* password */}
          <div className="relative border-b-2 focus-within:border-blue-500">
            <input
              value={inputs.password}
              onChange={handleChange}
              type="password"
              name="password"
              placeholder=" "
              className="block w-full appearance-none focus:outline-none bg-transparent"
            />
            <label
              htmlFor="password"
              className="absolute top-0 -z-1 duration-200 origin-0"
            >
              Password
            </label>
          </div>

          {/* confirm password */}
          {isSignUp && (
            <div className="relative border-b-2 focus-within:border-blue-500">
              <input
                type="password"
                name="cpassword"
                value={inputs.cpassword}
                onChange={handleChange}
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
              />
              <label
                htmlFor="cpassword"
                className="absolute top-0 -z-1 duration-200 origin-0"
              >
                Confirm Password
              </label>
            </div>
          )}

          {/* image */}

          {isSignUp && (
            <div className="relative border-b-2 focus-within:border-blue-500">
              <input
                value={inputs.image}
                onChange={handleChange}
                type="file"
                name="image"
                placeholder=" "
                className="block w-full appearance-none focus:outline-none bg-transparent"
              />
              <label
                htmlFor="image"
                className="absolute top-0 -z-1 duration-200 origin-0"
              >
                Image
              </label>
            </div>
          )}

          {/* submit */}
          <button
            type="submit"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
          >
            {isSignUp ? "Register" : "Sign In"}
          </button>

          <button
            onClick={() => setisSignUp(!isSignUp)}
            type="button"
            class="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
          >
            {isSignUp
              ? " Already have an account? Sign In"
              : "No account? Go ahead and Sign Up!"}
          </button>
        </form>
      </article>
    </section>
  );
};

export default Auth;
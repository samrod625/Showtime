import React, { useState } from "react";

const SignIn = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`relative w-[750px] h-[450px] border-2 border-primary shadow-custom overflow-hidden transition-all duration-500 ${
        isActive ? "bg-dark" : ""
      }`}
    >
      {/* Decorative Shapes */}
      <div
        className={`absolute right-0 top-[-5px] h-[600px] w-[850px] bg-gradient-to-br from-dark to-primary transform rotate-10 skew-y-40 origin-bottom-right transition-all duration-[1.5s] ${
          isActive ? "rotate-0 skew-y-0" : ""
        }`}
      ></div>
      <div
        className={`absolute left-[250px] top-full h-[700px] w-[850px] bg-primary border-t-4 border-primary transform rotate-10 skew-y-40 origin-bottom-left transition-all duration-[1.5s] ${
          isActive ? "rotate-[-11deg] skew-y-[-41deg]" : ""
        }`}
      ></div>

      {/* Login Form */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center px-10 ${
          isActive ? "opacity-0 transform -translate-x-full" : "opacity-100"
        } transition-all duration-700`}
      >
        <h2 className="text-2xl text-center">Login</h2>
        <form action="#">
          <div className="relative w-full h-12 mt-6">
            <input
              type="text"
              required
              className="w-full h-full bg-transparent border-none outline-none text-white font-medium border-b-2 border-white pr-6 focus:border-primary"
            />
            <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all">
              Username
            </label>
            <i className="absolute right-0 top-1/2 transform -translate-y-1/2 text-lg text-white bx bxs-user"></i>
          </div>
          <div className="relative w-full h-12 mt-6">
            <input
              type="password"
              required
              className="w-full h-full bg-transparent border-none outline-none text-white font-medium border-b-2 border-white pr-6 focus:border-primary"
            />
            <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all">
              Password
            </label>
            <i className="absolute right-0 top-1/2 transform -translate-y-1/2 text-lg text-white bx bxs-lock-alt"></i>
          </div>
          <button
            className="relative w-full h-12 bg-transparent rounded-full mt-6 font-semibold border-2 border-primary overflow-hidden hover:bg-gradient-to-r hover:from-dark hover:via-primary hover:to-dark hover:text-primary"
            type="submit"
          >
            Login
          </button>
          <div className="text-center mt-4 text-sm">
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
                onClick={handleRegisterClick}
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center px-10 ${
          isActive ? "opacity-100 transform translate-x-0" : "opacity-0"
        } transition-all duration-700`}
      >
        <h2 className="text-2xl text-center">Register</h2>
        <form action="#">
          <div className="relative w-full h-12 mt-6">
            <input
              type="text"
              required
              className="w-full h-full bg-transparent border-none outline-none text-white font-medium border-b-2 border-white pr-6 focus:border-primary"
            />
            <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all">
              Username
            </label>
            <i className="absolute right-0 top-1/2 transform -translate-y-1/2 text-lg text-white bx bxs-user"></i>
          </div>
          <div className="relative w-full h-12 mt-6">
            <input
              type="email"
              required
              className="w-full h-full bg-transparent border-none outline-none text-white font-medium border-b-2 border-white pr-6 focus:border-primary"
            />
            <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all">
              Email
            </label>
            <i className="absolute right-0 top-1/2 transform -translate-y-1/2 text-lg text-white bx bxs-envelope"></i>
          </div>
          <div className="relative w-full h-12 mt-6">
            <input
              type="password"
              required
              className="w-full h-full bg-transparent border-none outline-none text-white font-medium border-b-2 border-white pr-6 focus:border-primary"
            />
            <label className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white transition-all">
              Password
            </label>
            <i className="absolute right-0 top-1/2 transform -translate-y-1/2 text-lg text-white bx bxs-lock-alt"></i>
          </div>
          <button
            className="relative w-full h-12 bg-transparent rounded-full mt-6 font-semibold border-2 border-primary overflow-hidden hover:bg-gradient-to-r hover:from-dark hover:via-primary hover:to-dark hover:text-primary"
            type="submit"
          >
            Register
          </button>
          <div className="text-center mt-4 text-sm">
            <p>
              Already have an account?{" "}
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
                onClick={handleLoginClick}
              >
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

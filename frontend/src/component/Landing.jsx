import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      style={{ height: "calc(100vh - 48px)" }}
      className="my-3 p-5 mx-auto flex flex-col justify-end  md:w-72 box-border"
    >
      <h1 className="font-bold text-xl">Welcome to PopX</h1>

      <p className="text-sm mt-1">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipisicing elit.
      </p>

      <div className="flex flex-col gap-2 mt-4">
        <Link
          to="/signup"
          className="p-2 text-white font-semibold bg-blue-800 rounded-md text-center"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="p-2 font-semibold bg-violet-300 rounded-md text-center"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Landing;

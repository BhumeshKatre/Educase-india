import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const inputStyles = {
  "& label": { color: "#897bed" },
  "& .MuiInputBase-input": { padding: "10px", width: "100%" },
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputFields = [
    { label: "Email Address", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    window.location.href = "/home"; 
  };

  return (
    <div
      style={{ height: "calc(100vh - 48px)" }}
      className="my-3 p-5 bg-gray-200 mx-auto flex flex-col justify-start md:w-72 box-border"
    >
      <h1 className="text-2xl font-bold mb-2">
        Sign in to your <br /> PopX account
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <form className="mt-4" onSubmit={handleSubmit}>
        {inputFields.map((field, index) => (
          <div key={index} className="mt-4">
            <TextField
              type={field.type}
              name={field.name}
              label={field.label}
              value={formData[field.name]}
              onChange={handleInputChange}
              required
              sx={inputStyles}
              className="w-full"
            />
          </div>
        ))}

        <Link
          to="/home"
          className="bg-gray-300 block  w-full p-2 mt-4 hover:bg-gray-500 text-white"
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default Login;

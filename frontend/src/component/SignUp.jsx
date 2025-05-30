import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const inputStyles = {
  "& label": { color: "#897bed" },
  "& .MuiInputBase-input": { padding: "10px", width: "100%" },
};

const SignUp = () => {
  const inputField = [
    { label: "Full Name", defaultValue: "Marry Doe" },
    { label: "Phone Number", defaultValue: "Marry Doe" },
    { label: "Email Address", defaultValue: "Marry Doe" },
    { label: "Password", defaultValue: "Marry Doe" },
    { label: "Company Name", defaultValue: "Marry Doe" },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: false,
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   window.location.href = "/home"; 

  // };

  return (
    <div
      style={{ height: "calc(100vh - 48px)" }}
      className="my-3 p-5 mx-auto flex flex-col justify-between  md:w-72 box-border"
    >
      <div>
        <h1 className="font-bold text-3xl  p-2 ">
          Create Your <br />
          PopX Account{" "}
        </h1>

        <form className="mt-2 " action="">
          {inputField.map((field, index) => (
            <div key={index} className="mt-4  ">
              <TextField
                // onChange={handleInputChange}
                required
                id="outlined-required"
                label={field.label}
                defaultValue="Marry doe"
                sx={inputStyles}
                className="w-full"
              />
            </div>
          ))}

          <div className="mt-4">
            <label htmlFor="radio-btn">Are you an Agency?* </label>
            <div>
              <input
                type="radio"
                name="agency"
                id="yes"
                value="yes"
                className="mx-2"
              />
              <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                name="agency"
                id="no"
                value="no"
                className="mx-2"
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </form>
      </div>

      <div>
        {/* create </button> */}
        <Link
          to="/home"
          className="p-2 w-full block   text-white font-semibold bg-blue-800 rounded-md text-center"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

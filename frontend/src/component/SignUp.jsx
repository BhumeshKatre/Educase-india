import React from "react";
import TextField from "@mui/material/TextField";

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
            <div className="mt-4  ">
              <TextField
                required
                id="outlined-required"
                label={field.label}
                defaultValue="Marry doe "
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
        <button className="p-2 w-full  text-white font-semibold bg-blue-800 rounded-md text-center">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;

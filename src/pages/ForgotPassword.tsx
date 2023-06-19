import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={handleSubmit}
          className="bg-white px-6 py-8 rounded-lg shadow-slate-500 shadow-2xl text-black w-full"
        >
          <h1 className="mb-4 text-2xl font-bold">Reset Password</h1>
          <label htmlFor="email" className="text-base mt-2">
            Email
          </label>
          <input
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-btn-primary text-white hover:bg-green-dark focus:outline-none my-1 hover:bg-btn-secondry"
          >
            Next
          </button>
          <div className="text-center m-6">
            <h1>Don't have an account?</h1>
            <NavLink
              to={"/register"}
              className="text-base text-blue-700 font-semibold hover:underline"
            >
              Register Here
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgetPassword;

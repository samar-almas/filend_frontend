import { useState } from "react";
import { NavLink } from "react-router-dom";
import InputField from "./InputField";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: 0,
    password: "",
    confirmPassword: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const fields = [
    {
      id: "username",
      name: "username",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      labelText: "Username",
      labelFor: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      labelText: "Email Address",
      labelFor: "email",
      required: true,
    },

    {
      id: "password",
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      labelText: "Password",
      labelFor: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: "confirmPassword",
      name: "confirmPassword",
      type: "password",
      errorMessage: "Passwords don't match!",
      labelText: "Confirm Password",
      labelFor: "confirmPassword",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsFormSubmitted(true);
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={handleSubmit}
          className="bg-white px-6 py-8 rounded-lg shadow-slate-500 shadow-2xl text-black w-full"
        >
          <h1 className="mb-4 text-2xl font-bold">Sign Up</h1>

          {fields.map((field) => (
            <InputField
              key={field.id}
              value={values[field.name as keyof typeof values]}
              handleChange={onChange}
              isFormSubmitted={isFormSubmitted}
              {...field}
            />
          ))}

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-btn-primary text-white hover:bg-green-dark focus:outline-none my-1 hover:bg-btn-secondry"
          >
            Sign Up
          </button>
          <div className="text-center m-6">
            <h1>Already have an account?</h1>
            <NavLink
              to={"/login"}
              className="text-base text-blue-700 font-semibold hover:underline"
            >
              Login Here
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;

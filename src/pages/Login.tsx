import { NavLink } from "react-router-dom";
import { useState } from "react";
import InputFiled from "../InputField";

const Login = () => {
  const [values, setValues] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const fields = [
    {
      labelText: "Email Address",
      labelFor: "email-address",
      id: "email-address",
      name: "email",
      type: "email",
      isRequired: true,
    },
    {
      labelText: "Password",
      labelFor: "password",
      id: "password",
      name: "password",
      type: "password",
      isRequired: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
          <h1 className="mb-4 text-2xl font-bold">Sign In to FilEnd</h1>

          {fields.map((field) => (
            <InputFiled
              key={field.id}
              value={values[field.name as keyof typeof values]}
              handleChange={onChange}
              {...field}
            />
          ))}
          <div className="text-center m-6">
            <NavLink
              to={"/password-reset"}
              className="text-base text-blue-700 font-semibold hover:underline"
            >
              Forgot Password?
            </NavLink>
          </div>

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-btn-primary text-white hover:bg-green-dark focus:outline-none my-1 hover:bg-btn-secondry"
          >
            Sign In
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
export default Login;

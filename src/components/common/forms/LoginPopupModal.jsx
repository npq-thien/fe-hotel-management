import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useSignIn } from "libs/react-query/queriesAndMutations"; // Adjust the import path according to your project structure

const LoginPopupModal = ({ toggleLoginPopup, switchRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: registerUser, isLoading, error } = useSignIn();

  const onSubmit = (data) => {
    registerUser(data);

  };

  return (
    <div className="modal">
      <div className="bg-white rounded-lg shadow-lg flex-col flex p-8 gap-5 w-full max-w-md">
        <button
          type="button"
          onClick={() => toggleLoginPopup(true)}
          className="ml-auto text-2xl text-gray-400 hover:text-gray-500"
        >
          <FaWindowClose size={24} />
        </button>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center h2-bold">Welcome!</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="p-2 border rounded-lg"
              placeholder="Enter your username"
              {...register("username", { require: "Username is required" })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="p-2 border rounded-lg"
              placeholder="Enter your password"
              {...register("password", { require: "Password is required" })}
            />
          </div>
        </form>

        {/* Remember me and forgot password */}
        <div className="flex-between">
          <div className="block min-h-6 ml-6">
            <input className="check-box" type="checkbox" id="cb-remember-me" />
            <label className="inline-block ml-1 hover:cursor-pointer" htmlFor="cb-remember-me">
              Remember me
            </label>
          </div>
          <a href="#!" className="text-blue-600">
            Forgot password
          </a>
        </div>

        <div className="flex flex-col items-center gap-5">
          <button
            className="log-in-btn font-bold text-white w-full py-2 rounded-lg"
            type="submit"
            style={{
              background: "linear-gradient(to right, #7FC7D9, #365486, #0F1035)",
            }}
            onClick={handleSubmit(onSubmit)} // Call handleLogin on button click
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>

          {/* {isError && <p className="text-red-500">Error: {error.message}</p>} */}

          <p className="flex gap-2 base-semibold">
            Don't have an account?
            <Link onClick={() => switchRegister()} className="text-red-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopupModal;

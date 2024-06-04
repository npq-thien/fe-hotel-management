import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPopupModal = ({ toggleRegisterPopup, switchLogin }) => {
  return (
    <div className="modal">
      <div className="bg-white rounded-lg shadow-lg flex-col flex p-8 gap-5 w-full max-w-md">
        <button
          type="button"
          onClick={() => toggleRegisterPopup(true)} // Use the provided onClose prop to close the popup
          className="ml-auto text-2xl text-gray-400 hover:text-gray-500"
        >
          <FaWindowClose size={24} /> 
        </button>

        <form className="flex flex-col gap-5">
          <h2 className="text-center h2-bold">Create new account &#128513;</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="p-2 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="p-2 border rounded-lg"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="p-2 border rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirm-password" className="text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              className="p-2 border rounded-lg"
              placeholder="Confirm your password"
            />
          </div>
        </form>

        <div className="flex flex-col items-center gap-5">
          <button
            className="log-in-btn font-bold text-white w-full py-2 rounded-lg"
            type="button"
            style={{ background: "linear-gradient(to right, #7FC7D9, #365486, #0F1035)" }}
          >
            Register
          </button>

          <p className="flex gap-2 base-semibold">
            Already have an account?
            <Link onClick={() => switchLogin()} className="text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopupModal;

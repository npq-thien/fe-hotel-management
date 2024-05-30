import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
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
          <TEInput type="email" label="Email" size="lg" className="" />
          <TEInput type="text" label="Username" size="lg" className="" />
          <TEInput type="password" label="Password" size="lg" />
          <TEInput type="password" label="Confirm password" size="lg" />
        </form>

        <div className="flex flex-col items-center gap-5">
          <TERipple rippleColor="light" className="w-full">
            <button
              className="log-in-btn font-bold"
              type="button"
              style={{ background: "linear-gradient(to right, #7FC7D9, #365486, #0F1035)" }}
            >
              Register
            </button>
          </TERipple>

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

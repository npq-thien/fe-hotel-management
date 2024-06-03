import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPopupModal = ({ toggleLoginPopup, switchRegister }) => {
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

        <form className="flex flex-col gap-5">
          <h2 className="text-center h2-bold">Welcome!</h2>
          <TEInput type="text" label="Username" size="lg" className="" />
          <TEInput type="password" label="Password" size="lg" />
        </form>

        {/* Remember me and forgot password */}
        <div className="flex justify-between">
          <div className="mb-0.5 block min-h-6 pl-6">
            <input
              className="check-box"
              type="checkbox"
              id="cb-remember-me"
              // defaultChecked (Optional for default checked state)
            />
            <label className="inline-block ml-2 hover:cursor-pointer" htmlFor="cb-remember-me">
              Remember me
            </label>
          </div>
          <a href="#!" className="text-blue-600">
            Forgot password
          </a>
        </div>

        <div className="flex flex-col items-center gap-5">
          <TERipple rippleColor="light" className="w-full">
            <button
              className="log-in-btn font-bold text-white"
              type="button"
              style={{ background: "linear-gradient(to right, #7FC7D9, #365486, #0F1035)" }}
            >
              Log in
            </button>
          </TERipple>

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

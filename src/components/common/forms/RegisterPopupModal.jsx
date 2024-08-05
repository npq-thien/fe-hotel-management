import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { useMutation } from "react-query";

import { useRegisterAccount } from "api/authApi";

const RegisterPopupModal = ({ toggleRegisterPopup, switchLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isRegisterSuccessfully, setIsRegisterSuccessfully] = useState();

  const {
    mutate: registerAccount,
    isLoading,
    error,
  } = useMutation({
    mutationFn: useRegisterAccount,
    onSuccess: (data) => {
      if (data === "Register successfully") {
        setShowSnackbar(true);
        setIsRegisterSuccessfully(true);
      }
    },
    onError: () => {
      setShowSnackbar(true);
      setIsRegisterSuccessfully(false);
    },
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  return (
    <div className="modal">
      <div className="bg-white rounded-lg shadow-lg flex-col flex p-8 gap-5 w-full max-w-md">
        <button
          type="button"
          onClick={() => toggleRegisterPopup(true)}
          className="ml-auto text-2xl text-gray-400 hover:text-gray-500"
        >
          <FaWindowClose size={24} />
        </button>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit((data) => registerAccount(data))}>
          <h2 className="text-center h2-bold">Create new account</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="text-gray-700">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              className="p-2 border rounded-lg"
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/, // Pattern to allow only letters and spaces
                  message: "Full name must only contain letters and spaces",
                },
              })}
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-2 border rounded-lg"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="p-2 border rounded-lg"
              placeholder="Enter your username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
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
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="p-2 border rounded-lg"
              placeholder="Confirm your password"
              {...register("confirmPassword", { required: "Please confirm your password" })}
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <div className="flex flex-col items-center gap-5">
            <button
              className="log-in-btn font-bold text-white w-full py-2 rounded-lg"
              type="submit"
              style={{ background: "linear-gradient(to right, #7FC7D9, #365486, #0F1035)" }}
              disabled={isLoading}
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
        </form>

        {/* Snackbar for registration status */}
        <Snackbar
          open={showSnackbar}
          autoHideDuration={3000}
          transitionDuration={500}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          {isRegisterSuccessfully ? (
            <Alert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="success">
              Registration successfully
            </Alert>
          ) : (
            <Alert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
              {error?.response.data.message}
            </Alert>
          )}
        </Snackbar>
      </div>
    </div>
  );
};

export default RegisterPopupModal;

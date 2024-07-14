import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from 'react-redux'

import { useSignInAccount } from "api/authApi";
import { setToken } from "store/userSlice";


const LoginPopupModal = ({ toggleLoginPopup, switchRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isSignInSuccessfully, setIsSignInSuccessfully] = useState();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  const {
    mutate: signInAccount,
    isLoading,
    data,
    error,
  } = useMutation({
    mutationFn: useSignInAccount,
    onSuccess: (data) => {
      // console.log('Login successfully ', data);
      setShowSnackbar(true)
      setIsSignInSuccessfully(true)
      dispatch(setToken(data))
    },
    onError: (error) => {
      setShowSnackbar(true)
      setIsSignInSuccessfully(false)
      // console.log('Login failed ', error.response.data.message);
    },
  });

  const onSubmit = (data) => {
    signInAccount(data);
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
        </form>

        {/* Remember me and forgot password */}
        <div className="flex-between">
          {/* There's no remember me in Restful web but if i invisible this div it will be a little bit empty
          So don't care about it */}
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

        {/* Snackbar to show sign in status */}
        <Snackbar
          open={showSnackbar}
          autoHideDuration={3000}
          transitionDuration={500}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          {isSignInSuccessfully ? (
            <Alert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="success">
              Registration successful
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

export default LoginPopupModal;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Alert, Snackbar, TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useSignInEmployee } from "api/authApi";
import { login } from "store/userSlice";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isSignInSuccessfully, setIsSignInSuccessfully] = useState();

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  const {
    mutate: signInAdmin,
    isLoading,
    error,
  } = useMutation({
    mutationFn: useSignInEmployee,
    onSuccess: async (data) => {
      setShowSnackbar(true);
      setIsSignInSuccessfully(true);
      dispatch(login(data));
      await new Promise(r => setTimeout(r, 1000))
      navigate("/admin");
    },
    onError: () => {
      setShowSnackbar(true);
      setIsSignInSuccessfully(false);
    },
  });

  const onSubmit = (data) => {
    signInAdmin(data);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5f5f5"
      p={3}
    >
      <div className="flex-center flex-col flex-shrink-0 mx-auto mb-10 select-none">
        <img src="/logo.png" alt="Logo hotel" className="w-32 h-32 m-2" />
        <p className="h2-bold">The Cozy Nook</p>
      </div>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={2}
        bgcolor="white"
        p={4}
        borderRadius={2}
        boxShadow={2}
        width={{ xs: "100%", sm: 400 }}
      >
        <Typography variant="h4" textAlign="center" mb={2}>
          Admin Login
        </Typography>

        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          {...register("username", { required: "Username is required" })}
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button type="submit" variant="contained" disabled={isLoading} fullWidth sx={{ backgroundColor: "#FA9191" }}>
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
      </Box>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={1000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {isSignInSuccessfully ? (
          <Alert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="success">
            Login successfully
          </Alert>
        ) : (
          <Alert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
            Login failed
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
};

export default AdminLogin;

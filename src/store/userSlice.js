import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    role: null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.userDetails = action.payload.role;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
    },
    logout: (state) => {
      state.token = null;
      state.userDetails = {};
      localStorage.removeItem("token"); 
      localStorage.removeItem("role");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

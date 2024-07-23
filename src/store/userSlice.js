import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    userDetails: {},
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.userDetails = action.payload.userDetails;
      localStorage.setItem('token', action.payload.token);  // Save token to localStorage
    },
    logout: (state) => {
      state.token = null;
      state.userDetails = {};
      localStorage.removeItem('token');  // Remove token from localStorage
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

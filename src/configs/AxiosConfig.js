import axios from 'axios';
import store from '../store';

const BASE_URL = process.env.REACT_APP_API;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token && config.headers) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );


// Include token in API
api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.user.token;
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api, BASE_URL };

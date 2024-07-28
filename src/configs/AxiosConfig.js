import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// localstorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem('token');
//       localStorage.removeItem('tokenExpiry');
//       window.location.href = '/login'; // Redirect to login page
//     }
//     return Promise.reject(error);
//   }
// );


// Include token in API
// api.interceptors.request.use(
//   (config) => {
//     const state = store.getState();
//     const token = state.user.token;
//     if (token && config.headers) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export { api, BASE_URL };

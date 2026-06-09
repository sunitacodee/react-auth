// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://127.0.0.1:5000', // Replace with your backend URL
//   headers: { 'Content-Type': 'application/json' }
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("token:" + token)

  if (token && token !== "undefined" && token !== "null") {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
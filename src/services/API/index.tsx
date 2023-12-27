import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://Ieltsways.nimadorostkar.com:8000/",
});
axiosInstance.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});
export default axiosInstance;


// const baseURL = "http://Ieltsways.nimadorostkar.com:8000/";

// export const getToken = () => localStorage.getItem("token")
//   ? JSON.parse(localStorage.getItem("token"))
//   : null;

// export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

// export const axiosInstance = axios.create({
//   baseURL,
//   headers: { Authorization: getAuthorizationHeader() },
// });

// http://195.214.235.46:8000/

// // Add a response interceptor
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // If the error status is 401 and there is no originalRequest._retry flag,
//     // it means the token has expired and we need to refresh it
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = localStorage.getItem('refreshToken');
//         const response = await axios.post('/api/refresh-token', { refreshToken });
//         const { token } = response.data;

//         localStorage.setItem('token', token);

//         // Retry the original request with the new token
//         originalRequest.headers.Authorization = `Bearer ${token}`;
//         return axios(originalRequest);
//       } catch (error) {
//         // Handle refresh token error or redirect to login
//       }
//     }

//     return Promise.reject(error);
//   }
// );

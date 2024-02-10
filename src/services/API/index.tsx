import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.ieltsways.com/",
});
axiosInstance.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});
export default axiosInstance;
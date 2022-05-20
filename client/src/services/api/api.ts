import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://localhost:44340/api",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("jwt");
    config.headers = {
      Authorization: `Bearer ${token}`,
      // 'Accept': 'application/json',
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

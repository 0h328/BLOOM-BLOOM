import axios from "axios";
import { BASE_URL } from "./config";

export const userApi = axios.create({
  baseURL: `${BASE_URL}`,
});

axios.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getLogin = async (accessToken: string) => {
  return await userApi.get(`api/v1/oauth/login?accessToken=${accessToken}`);
};

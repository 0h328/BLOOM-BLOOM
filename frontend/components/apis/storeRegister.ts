import axios from "axios";
import { BASE_URL } from "./config";

export const storeRegister = axios.create({
  baseURL: `${BASE_URL}api/v1/admin`,
});

storeRegister.interceptors.request.use(
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

export const saveStore = async (data: any) => {
  return await storeRegister.post("", data, {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

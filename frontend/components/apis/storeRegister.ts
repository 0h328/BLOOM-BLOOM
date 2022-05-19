import axios from "axios";
import { BASE_URL } from "./config";

export const storeRegister = axios.create({
  baseURL: `${BASE_URL}`,
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

export const getOrderList = async (data: any) => {
  return await storeRegister.post("api/v1/admin", data, {
    headers: {
      "Content-type": "multipart/form-data"
    }
  });
};

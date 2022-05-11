import axios from "axios";
import { BASE_URL } from "./config";

export const order = axios.create({
  baseURL: `${BASE_URL}`,
});

order.interceptors.request.use(
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

export const getOrderList = async () => {
  return await order.get("api/v1/order");
};

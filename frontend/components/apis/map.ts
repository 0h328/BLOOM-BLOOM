import axios from "axios";
import { BASE_URL } from "./config";

export const mapApi = axios.create({
  baseURL: `${BASE_URL}`,
});

mapApi.interceptors.request.use(
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

export const getMap = async (data: Object) => {
  return await mapApi.post("api/v1/order/map", data);
};

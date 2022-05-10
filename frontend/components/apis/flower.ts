import axios from "axios";
import { BASE_URL } from "./config";

export const flowerApi = axios.create({
  baseURL: `${BASE_URL}`,
})


flowerApi.interceptors.request.use(
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

export const getFlower = async (data: Object) => {
  return await flowerApi.post("api/v1/flower", data);
};
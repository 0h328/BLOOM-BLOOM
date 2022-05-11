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

export const getWrap = async () => {
  return await flowerApi.get("api/v1/flower/wrap");
};

export const getDeco = async () => {
  return await flowerApi.get("api/v1/flower/deco");
};

export const getFlower = async () => {
  return await flowerApi.get("api/v1/flower/sub");
};
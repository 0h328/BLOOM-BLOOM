import axios from "axios";
import { BASE_URL } from "./config";

export const storeListApi = axios.create({
  baseURL: `${BASE_URL}`,
});

storeListApi.interceptors.request.use(
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

export const getStoreList = async () => {
  return await storeListApi.get("api/v1/admin");
};

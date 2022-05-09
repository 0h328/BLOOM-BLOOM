import axios from "axios";
import { BASE_URL } from "./config";

export const bouquetApi = axios.create({
  baseURL: `${BASE_URL}api/v1/flower`,
});

bouquetApi.interceptors.request.use(
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

export const getBouquetList = async () => {
  return await bouquetApi.get("");
};

export const getBouquetDetail = async (bouquetSeq: number) => {
  return await bouquetApi.get(`/${bouquetSeq}`);
};

export const getPresent = async (code: string) => {
  console.log(code);
  return await bouquetApi.get(`/present/${code}`);
};

export const savePresent = async (body: any) => {
  console.log(body);
  return await bouquetApi.post("/present", body);
};

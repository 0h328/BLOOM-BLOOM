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
  return await bouquetApi.get(`/present/${code}`);
};

export const savePresent = async (body: any) => {
  return await bouquetApi.post("/present", body);
};

export const getRecentBouquetList = async () => {
  return await bouquetApi.get("/recent");
};

export const getFlower = async () => {
  return await bouquetApi.get("/main");
};

export const saveBouquet = async (data: any) => {
  console.log(data.get("key"));
  console.log(data.get("file"));
  return await bouquetApi.post("", data, {
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("accessToken"),
    },
  });
};

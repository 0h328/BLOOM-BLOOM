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

export const getLogin = async () => {
  return await userApi.get("api/v1/oauth/login");
};

export const getKaokaoLogin = async (kakaoapi: string) => {
  // console.log(kakaoapi);
  return await userApi.get(kakaoapi);
};

export const login = async (code: string) => {
  console.log(code);
  return await userApi.get(`api/v1/oauth/kakao/callback?code=${code}`);
  // return await userApi.get(`api/v1/oauth/kakao/callback/${code}`);
};

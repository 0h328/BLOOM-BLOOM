import axios from "axios";
import { BASE_URL } from "./config";
import Router from "next/router";

export const useApi = axios.create({ baseURL: `${BASE_URL}` });

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

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

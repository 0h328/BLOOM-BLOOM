// import axios from "axios";
// import { BASE_URL } from "./config";

// export const storeRegisterApi = axios.create({
//   baseURL: `${BASE_URL}`,
// });

// storeRegisterApi.interceptors.request.use(
//   function (config) {
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//       config.headers.Authorization = "Bearer " + accessToken;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// export const getStoreRegister = async () => {
//   return await storeRegisterApi.post("api/v1/admin");
// };
import axios, { InternalAxiosRequestConfig, AxiosRequestHeaders } from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

$authHost.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  (config.headers as AxiosRequestHeaders).authorization = `Bearer ${window.localStorage.getItem("token")}`;
  return config;
});
//${window.localStorage.getItem("token")}
export { $host, $authHost };

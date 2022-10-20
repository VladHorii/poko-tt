import { API_URL } from "@/config/app";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
});

axios.interceptors.response.use((response) => {
  return response.data;
});

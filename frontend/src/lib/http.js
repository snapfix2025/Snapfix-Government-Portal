// src/lib/http.js
import axios from "axios";
import { API_BASE_URL } from "../config";

export const http = axios.create({
  baseURL: API_BASE_URL,
  // withCredentials: true, // uncomment if you use cookies/sessions
});

// Optional: response/error interceptor for consistent errors
http.interceptors.response.use(
  (res) => res,
  (err) => {
    // You can log or normalize errors here
    return Promise.reject(err);
  }
);

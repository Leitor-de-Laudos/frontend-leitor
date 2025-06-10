import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL_USER;

export const api =  axios.create({
  baseURL: apiUrl,
});

// Adiciona o token em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
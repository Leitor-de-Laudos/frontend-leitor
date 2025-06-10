import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL_READER;

export const apiReader =  axios.create({
  baseURL: apiUrl,
});


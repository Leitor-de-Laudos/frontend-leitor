import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL_REMINDER;

export const apiReminder =  axios.create({
  baseURL: apiUrl,
});


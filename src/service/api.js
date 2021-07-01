import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  timeout: 60000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://cadastro-cliente-api-production.up.railway.app/api/"
});

export default api;
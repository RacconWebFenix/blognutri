import axios from "axios";
// -> base URL https://sujeitoprogramador.com/
// ->  rotas da Api /rn-api/?api=posts
const BASE_URL = "https://sujeitoprogramador.com/rn-api/?api=posts/";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
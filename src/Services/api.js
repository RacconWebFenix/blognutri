import axios from "axios";
// -> base URL https://sujeitoprogramador.com/
// ->  rotas da Api /rn-api/?api=posts


const api = axios.create({
  baseURL: "https://sujeitoprogramador.com/",
});

export default api;
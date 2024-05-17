import axios from "axios";

export const clientesApi = axios.create({
  baseURL: 'https://editorial-pills-gotta-adoption.trycloudflare.com/api/v1/'
})
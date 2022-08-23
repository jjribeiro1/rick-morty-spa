import axios from "axios";
export const Api = {
  baseUrl: "https://m4-rick-morty.herokuapp.com",

  // endpoint da api
  createUrl: () => Api.baseUrl + "/characters/create",
  readAllUrl: (offset) => Api.baseUrl + `/characters/?page=${offset}&itens=4`,
  readByIdUrl: (id) => Api.baseUrl + "/characters/find/" + id,
  updateUrl: (id) => Api.baseUrl + "/characters/update/" + id,
  deleteUrl: (id) => Api.baseUrl + "/characters/delete/" + id,

  // requests
  GetRequest: (url) => {
    return axios.get(url);
  },

  PostRequest: (url, body) => {
    return axios.post(url, body);
  },

  PutRequest: (url, body) => {
    return axios.put(url, body);
  },

  DeleteRequest: (url) => {
    return axios.delete(url);
  }
};

import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8000/";
const authToken = localStorage.getItem("token");

const headers = { Authorization: `Bearer ${authToken}` };

export const get = (url, config = {}) => {
  return axios.get(BASE_URL + url, config).then((response) => response.data);
};

export const post = async (url, data, config = {}) => {
  console.log(data);
  return axios.post(BASE_URL + url, data, config).then((response) => response);
};

export const put = (url, data, config = {}) => {
  return axios
    .put(BASE_URL + url, data, config)
    .then((response) => response.data);
};

export const del = (url, config = {}) => {
  return axios.delete(BASE_URL + url, config).then((response) => response.data);
};

export const getAuthCall = async (url) => {
  return axios
    .get(BASE_URL + url, { headers })
    .then((response) => response.data);
};

export const getLoginAuthCall = async (url, token) => {
  return axios
    .get(BASE_URL + url, { Authorization: `Bearer ${token}` })
    .then((response) => response.data);
};

export async function apiRequest(method, url, data) {
  const headers = {
    "Content-Type": "application/json",
  };

  //headers["Authorization"] = `Bearer ${authToken}`;

  const options = {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  };

  const response = await fetch(BASE_URL + url, options);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.detail || "Something went wrong");
  }

  return responseData;
}

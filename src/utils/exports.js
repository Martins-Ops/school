import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/';

export const get = (url, config = {}) => {
  return axios.get(BASE_URL + url, config)
    .then(response => response.data)
   
};

export const post = async(url, data, config = {}) => {
    console.log(data)
  return axios.post(BASE_URL + url, data, config)
    .then(response => response)
    //  .then(response => console.log(response.data))
};

export const put = (url, data, config = {}) => {
  return axios.put(BASE_URL + url, data, config)
    .then(response => response.data);
};

export const del = (url, config = {}) => {
  return axios.delete(BASE_URL + url, config)
    .then(response => response.data);
};

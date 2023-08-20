import axios from "axios";

const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;

export const BASE_URL =
  ENVIRONMENT === "DEV"
    ? "http://127.0.0.1:8000/"
    : "https://stpaulschool.pythonanywhere.com/";
const authToken = localStorage.getItem("token");

const headers = { Authorization: `Bearer ${authToken}` };

export const get = (url, config = {}) => {
  return axios.get(BASE_URL + url, config).then((response) => response.data);
};

export const post = async (url, data, config = {}) => {
  return axios.post(BASE_URL + url, data, config).then((response) => response);
};

export const authPost = async (url, data, config = {}) => {
  const updatedConfig = {
    ...config,
    headers: {
      ...config.headers,
      "Content-Type": "multipart/form-data", // Set proper content type for file upload
    },
  };

  return axios
    .post(BASE_URL + url, data, updatedConfig)
    .then((response) => response);
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

export const classroom = [
  {
    name: "JSS1",
    id: "1",
  },
  {
    name: "JSS2",
    id: "2",
  },
  {
    name: "JSS3",
    id: "3",
  },
  {
    name: "SSS1",
    id: "4",
  },
  {
    name: "SSS2",
    id: "5",
  },
  {
    name: "SSS3",
    id: "6",
  },
];

export const achievementSlideSettings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "0",
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

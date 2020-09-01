import axios from "axios";

const BASE_URL = "https://convenience-store-api.herokuapp.com/";

export const register = (requestBody) => {
  return axios.post(`${BASE_URL}user/register`, requestBody);
};

export const login = (requestBody) => {
  return axios.post(`${BASE_URL}user/login`, requestBody);
};

export const getCategories = () => {
  return axios.get(`${BASE_URL}post/category`);
};

export const getItemsByCategory = (categorySlug) => {
  return axios.get(`${BASE_URL}post/category/${categorySlug}`);
};

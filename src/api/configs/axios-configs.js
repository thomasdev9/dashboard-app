import axios from 'axios';

export const api = axios.create({
  withCredentials: true,
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});

const errorHandler = (error) => {
  const statusCode = error?.response?.status;

  if (statusCode && statusCode !== 401) {
    console.log(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});

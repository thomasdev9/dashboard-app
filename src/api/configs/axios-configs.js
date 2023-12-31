import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dashboard-elegent.onrender.com',
  headers: {
    'Content-Type': 'application/json',
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

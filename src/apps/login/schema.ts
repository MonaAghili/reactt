import axios from 'axios';

const run = axios.create({
  baseURL: params.baseURL
});

run.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

run.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 403) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
    return Promise.reject(error);
  }
);

export default run
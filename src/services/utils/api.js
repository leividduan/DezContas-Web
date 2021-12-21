/* eslint-disable no-return-assign */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:5001',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = 'http://localhost:3000/login';
    }
    return error;
  },
);

api.interceptors.request.use((request) => {
  const user = JSON.parse(localStorage.getItem('user'));
  request.headers.Authorization = user?.token ? `Bearer ${user.token}` : '';
  return request;
});

export default api;

// @packages
import axios from 'axios';

// @utils
import { snakeCaseToCamelCase } from '../utils';

export const addRequestInterceptors = () => {
  axios.interceptors.request.use(
    (request) => request,
    (error) => Promise.reject(error)
  );
};

export const addResponseInterceptors = () => {
  axios.interceptors.response.use(
    (response) => snakeCaseToCamelCase(response.data),
    (error) => Promise.reject(error)
  );
};

export const addHttpInterceptors = () => {
  addRequestInterceptors();
  addResponseInterceptors();
};

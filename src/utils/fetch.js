import axios from 'axios';
// import { getToken } from './storage';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

instance.interceptors.request.use(async function (config) {
  // let token = getToken();

  // if (token) {
  //   config.headers['Authorization'] = `Bearer ${token}`;
  // }

  return config;
});

export const defaultError = {
  code: 500,
  status: 'error',
  message: 'Failed to fetch data. Please contact developer.',
};

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (err) {
    // let token = getToken();

    if (axios.isCancel(err)) {
      return Promise.reject('request canceled');
    }

    if (err.response && err.response.data) {
      if (err.response.status === 401) {
        window.location.href = '/login';
      }

      return Promise.reject(err.response.data);
    } else {
      return Promise.reject(defaultError);
    }
  }
);

export default instance;

export const uninterceptedAxiosInstance = axios.create();
uninterceptedAxiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (err) {
    if (axios.isCancel(err)) {
      return Promise.reject('request canceled');
    }

    if (err.response && err.response.data) {
      return Promise.reject(err.response.data);
    } else {
      return Promise.reject(defaultError);
    }
  }
);

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: ''
})

axios.defaults.baseURL = 'http://www.baidu.com';
axios.defaults.headers.common['Authorization'] = 'Bearer '+ 'xxxxxx';
axiosInstance.defaults.timeout = 30000;
axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axiosInstance.interceptors.request.use(
    req => {
      return req;
    },
    error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    res => {
        const result = res.data.data;
        return result;
    },
    error => {
        return Promise.reject(error);
    }
  );

export default axiosInstance
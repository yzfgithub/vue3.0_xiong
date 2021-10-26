import axiosInstance from '../utils/axios';

export const getJson = (url) => {
    return axiosInstance.get(url)
}
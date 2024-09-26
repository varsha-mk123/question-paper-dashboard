import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',  // This is where your Express server is running
});

export default axiosInstance;

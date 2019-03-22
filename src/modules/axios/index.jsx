import axios from 'axios';

import axiosConfiguration from './axiosConfiguration';

const axiosInstance = axios.create(axiosConfiguration);

export default axiosInstance;

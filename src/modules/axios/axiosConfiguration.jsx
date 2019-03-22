const axiosConfiguration = {
  baseURL: `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}/`,
  timeout: 1000
};

export default axiosConfiguration

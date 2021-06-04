import {AxiosInstance, AxiosRequestConfig} from 'axios';

const setResponseFormat = async (config: AxiosRequestConfig) => {
  switch (config.method) {
    case 'get':
      config.params.format = 'json';
      break;

    default:
      break;
  }
  return config;
};

const setInterceptor = (serv: AxiosInstance) => {
  serv.interceptors.request.use(function (config) {
    return new Promise(async resolve => {
      config = await setResponseFormat(config);
      resolve(config);
    });
  });
};

const requestConfig = {
  setInterceptor,
};
export default requestConfig;

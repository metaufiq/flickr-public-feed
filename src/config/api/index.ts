import {AxiosInstance} from 'axios';
import requestConfig from './request';
import responseConfig from './response';
import Feeds from './services/Feeds';

const service = {
  Feeds,
};

interface ServiceInstance {
  [key: string]: AxiosInstance;
}

const serviceTemp: ServiceInstance = service;

for (let key in serviceTemp) {
  let serv: AxiosInstance = serviceTemp[key];
  requestConfig.setInterceptor(serv);
  responseConfig.setInterceptor(serv);
  // Do something with value
}
export default service;

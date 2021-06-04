import {AxiosError, AxiosInstance} from 'axios';

const handleError = (error: AxiosError) => {
  const data = {data: undefined, errorMessage: '', status: 400, isError: true};
  if (error.message) {
    if (error.response) {
      // Request made and server responded
      data.errorMessage = error.response.data
    } else if (error.request) {
      // The request was made but no response was received
      data.errorMessage = error.request
    } else {
      data.errorMessage = error.message
    }
  }
  return {data};
};

const setInterceptor = (serv: AxiosInstance) => {
  serv.interceptors.response.use(
    function (_response) {
      // Do something with response data
      return _response;
    },
    error =>
      // Do something with response error
      handleError(error),
  );
};

const responseConfig = {
  setInterceptor,
};
export default responseConfig;

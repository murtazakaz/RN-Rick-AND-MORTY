import axios from 'axios';
import Configs from '../configs';

const axiosWrapper = async (params, authUser = {}) => {
  let apiParams = {
    url: Configs.baseURL,
    timeout: 300000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  apiParams.method = params.method;
  apiParams.url += params.path;
  apiParams.data = params.data;

  try {
    const response = await axios(apiParams);

    return response;
  } catch (ex) {
    throw ex;
  }
};
export default axiosWrapper;

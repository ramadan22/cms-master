import { Api } from '../../../helpers/axios';
import { GetStorage } from '../../../helpers/local-storage';

const ServicePermisson = () => {
  const url = `${process.env.REACT_APP_API_BASE_URL}`;

  const get = () => new Promise((resolve: any, reject: any) => {
    Api.get(`${url}/permission`, {
      headers: {
        Authorization: `Bearer ${GetStorage('token')}`,
      },
    }).then((response: any) => {
      resolve(response?.data);
    }).catch((error: any) => {
      reject(error?.response?.data?.message || 'Something Wrong!');
    });
  });

  return {
    get,
  };
};

export default ServicePermisson;

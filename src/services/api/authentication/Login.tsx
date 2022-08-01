import { Api } from '../../../helpers/axios';

const ServiceAuthentication = () => {
  const url = `${process.env.REACT_APP_API_BASE_URL}`;
  // const userService = `${process.env.REACT_APP_API_USER_URL}`;
  // const baseURL = `${url}${userService}`;

  const login = (params: any) => new Promise((resolve: any, reject: any) => {
    Api.post(`${url}/login`, {
      ...params,
    }).then((response: any) => {
      resolve(response?.data);
    }).catch((error: any) => {
      reject(error?.response?.data?.message || 'Something Wrong!');
    });
  });

  return {
    login,
  };
};

export default ServiceAuthentication;

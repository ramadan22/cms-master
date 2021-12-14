import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Accept-Language': 'ID',
});

Api.interceptors.request.use(
  (config) => config,
  (error) => { Promise.reject(error); },
);

Api.interceptors.response.use((response) => response, (error) => {
  // const condition = (
  //   (!GetStorage('access_token') || !GetStorage('refresh_token') || !GetStorage('role'))
  //   && window.location.pathname !== '/'
  //   && window.location.pathname !== '/forgot-password'
  // );

  // if (error && error.response && error.response.status === 401 && GetStorage('access_token')) {
  //   RemoveStorage('role');
  //   RemoveStorage('access_token');
  //   RemoveStorage('refresh_token');
  //   window.location.href = '/';
  // }

  if (error && error.response && error.response.status === 401) {
   console.log(error);
  }

  // if (condition) {
  //   window.location.href = '/';
  // }

  return Promise.reject(error);
});

export { Api };
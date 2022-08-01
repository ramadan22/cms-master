import { GetStorage } from '../../helpers/local-storage';

const Private = (to: any, from: any, next: any) => {
  try {
    const token = GetStorage('token');
    const lockLoginViewUrl = to?.match?.path;

    const condition = (
      lockLoginViewUrl === '/'
      // || destinationURL === '/login'
      // || destinationURL === '/forgot-password'
      // || destinationURL === '/verify-code'
      // || destinationURL === '/change-password'
    );

    if (!token) next.redirect('/');
    if (condition) next.redirect('/dashboard');
    next();
  } catch (error) {
    next.redirect('/');
  }
};

export default Private;

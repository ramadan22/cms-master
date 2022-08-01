import { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';

import { SetStorage } from '../../../helpers/local-storage';
import ServiceAuthentication from '../../../services/api/authentication/Login';

interface LoginParams {
  email: string;
  password: string;
}

const Service = () => {
  const alert = useAlert();
  const history = useHistory();
  const { login } = ServiceAuthentication();

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [params, setParams] = useState<LoginParams>({
    email: '',
    password: '',
  });

  const handlerParams = (key: string, value: string) => {
    setParams({
      ...params,
      [key]: value,
    });
  };

  const submitApi = async (payload: object) => {
    try {
      setIsLoading(true);
      const result: any = await login(payload);
      SetStorage('token', result?.response?.rememberToken);
      history.push('/dashboard');
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      alert.error(error);
    }
  };

  const submit = () => {
    submitApi(params);
  };

  useEffect(() => () => {
    setIsShowPassword(false);
    setIsLoading(false);
    setParams({
      email: '',
      password: '',
    });
  }, []);

  return {
    submit,
    params,
    isLoading,
    handlerParams,
    isShowPassword,
    setIsShowPassword,
  };
};

export default Service;

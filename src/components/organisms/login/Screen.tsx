import React from 'react';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EmailIcon from '@material-ui/icons/Email';

import Loader from '../../molecules/general/Loader';
import TextField from '../../molecules/form-login/textField';
import Button from '../../atoms/common/Button';
import Title from '../../atoms/common/Title';

import Service from './Service';

const FormLogin = () => {
  const {
    submit,
    params,
    isLoading,
    handlerParams,
    isShowPassword,
    setIsShowPassword,
  } = Service();

  return (
    <div className="w-full h-full fixed inset-0 flex justify-center items-center">
      {isLoading && <Loader />}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="max-w-sm w-96">
          <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
            <div
              className={`bg-blue-400 -mt-10 mb-4 rounded-xl text-white grid 
              items-center w-full h-24 py-4 px-8 justify-center shadow-lg-light-blue`}
            >
              <Title
                text="Login"
                styles={{ marginBottom: '0px' }}
                classes="text-white text-2xl font-bold leading-normal mt-0 mb-2"
              />
            </div>
            <div className="p-4">
              <form>
                <TextField
                  type="email"
                  icon={<EmailIcon />}
                  value={params?.email}
                  placeholder="Email Address"
                  handler={(value: string) => handlerParams('email', value)}
                />
                <TextField
                  type={`${isShowPassword ? 'text' : 'password'}`}
                  value={params?.password}
                  icon={isShowPassword
                    ? <VisibilityIcon />
                    : <VisibilityOffIcon />}
                  placeholder="Password"
                  handlerButton={() => setIsShowPassword(!isShowPassword)}
                  handler={(value: string) => handlerParams('password', value)}
                />
                <div className="mb-4 px-4 flex items-center justify-end">
                  <Button
                    text="Forgot Password?"
                    classes="text-sm"
                  />
                </div>
              </form>
            </div>
            <div className="p-4 flex justify-center">
              <Button
                text="Login"
                handler={() => submit()}
                classes={`w-full bg-gradient-to-tr from-purple-500 
                to-purple-700 gap-4 py-3 px-4 rounded-lg text-white text-sm`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;

import React from 'react';
import Templates from '../../../templates/Default';
import Content from '../../../templates/content/Default';
import TitleContent from '../../../molecules/general/TitleContent';
import Service from './Service';

const FormManageUsers = () => {
  const { title } = Service();

  return (
    <Templates>
      <Content>
        <TitleContent text={title} />
        <div className="p-4">
          <div className="mb-12 px-4">
            <div className="w-full relative h-11">
              <input id="input-email" type="email" placeholder="" className="w-full h-full text-gray-800 leading-normal shadow-none outline-none focus:outline-none focus:ring-0 focus:text-gray-800 pl-0 pr-7 mt-input-light-blue-500 mt-input bg-transparent border border-none" />
              <label htmlFor="input-email" className="text-gray-500 absolute left-0 -top-0.5 w-full h-full border-gray-300 pointer-events-none border border-t-0 border-l-0 border-r-0 border-b-1">
                <span className="false absolute top-1/4 transition-all duration-300">Email Address</span>
              </label>
            </div>
          </div>
          <div className="mb-8 px-4">
            <div className="w-full relative h-11">
              <input type="password" placeholder=" " className="w-full h-full text-gray-800 leading-normal shadow-none outline-none focus:outline-none focus:ring-0 focus:text-gray-800 pl-0 pr-7 false mt-input-light-blue-500 mt-input bg-transparent border border-none" />
              <label className="text-gray-500 absolute left-0 -top-0.5 w-full h-full border-gray-300 pointer-events-none border border-t-0 border-l-0 border-r-0 border-b-1 false false false false false">
                <span className="false absolute top-1/4 transition-all duration-300">Password</span>
              </label>
            </div>
          </div>
          <div className="mb-4 px-4">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="mt-checkbox mt-checkbox-light-blue-500 hidden overflow-hidden" />
            </div>
          </div>
        </div>
      </Content>
    </Templates>
  );
};

export default FormManageUsers;

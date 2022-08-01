import React, { ReactNode } from 'react';
import Input from '../../atoms/common/Input';

interface Props {
  type: string;
  value: string;
  icon: ReactNode;
  placeholder: string;
  handlerButton?: () => void;
  handler: (value: string) => void;
}

const TextField = (props: Props) => {
  const {
    type,
    icon,
    value,
    handler,
    placeholder,
    handlerButton,
  } = props;

  return (
    <div className="mb-8 px-4">
      <div className="w-full flex justify-center relative h-11">
        <button
          type="button"
          onClick={handlerButton}
          className={`material-icons p-0 text-gray-600 
          text-opacity-60 border-none absolute z-10 top-1/2 right-0 
          transform -translate-y-1/2 text-2xl`}
        >
          {icon}
        </button>
        <Input
          type={type}
          value={value}
          handler={(event) => handler(event?.target?.value)}
          placeholder={placeholder}
          classes={`w-full h-full text-gray-800 leading-normal 
          shadow-none outline-none focus:outline-none focus:ring-0 
          focus:text-gray-800 pl-0 pr-7 mt-input-light-blue-500 mt-input 
          bg-transparent border-b border-gray-300`}
        />
      </div>
    </div>
  );
};

TextField.defaultProps = {
  handlerButton: () => { },
};

export default TextField;

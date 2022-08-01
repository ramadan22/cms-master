import React from 'react';
import { AlertTemplateProps } from 'react-alert';

import Label from '../../atoms/common/Label';
import Button from '../../atoms/common/Button';

import {
  SuccessAlertIcon,
  WarningWhiteIcon,
  AlertCloseWhiteIcon,
} from '../../../assets/images';

const AlertTemplate: React.FC<AlertTemplateProps> = ({
  style, options, message, close,
}) => {
  const typeAlertClass = (
    ((options.type === 'info') && 'bg-error3 text-white')
    || ((options.type === 'success') && 'bg-successState text-white')
    || ((options.type === 'error') && 'bg-error3 text-white')
  );

  return (
    <div className={`text-white shadow-lg py-2 px-4 m-2 rounded-lg flex items-center ${typeAlertClass}`}>
      {options.type === 'info' && <img src={WarningWhiteIcon} alt="icon alert window" className="w-4" />}
      {options.type === 'success' && <img src={SuccessAlertIcon} alt="icon alert window" className="w-4" />}
      {options.type === 'error' && <img src={WarningWhiteIcon} alt="icon alert window" className="w-4" />}
      <Label text={`${message}`} classes="px-5" />
      <Button classesImage="w-3" handler={() => close()} image={AlertCloseWhiteIcon} />
    </div>
  );
};

export default AlertTemplate;

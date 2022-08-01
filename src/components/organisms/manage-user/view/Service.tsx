import { useState } from 'react';

const Service = () => {
  const [title] = useState<string>('Setting Users');

  return {
    title,
  };
};

export default Service;

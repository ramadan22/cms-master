import { useState } from 'react';

const Service = () => {
  const [title] = useState<string>('Form User');

  return {
    title,
  };
};

export default Service;

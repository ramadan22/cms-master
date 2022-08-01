import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Service = () => {
  const location = useLocation();
  const [visibility, setVisibility] = useState<string>('');

  useEffect(() => {
    setVisibility(location?.pathname);
  }, [location]);

  useEffect(() => () => {
    setVisibility('');
  }, []);

  return {
    visibility,
    setVisibility,
  };
};

export default Service;

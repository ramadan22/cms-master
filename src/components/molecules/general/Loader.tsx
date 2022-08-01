import React from 'react';
import LoaderImage from '../../../assets/images/loader/loading-button.gif';

const Loader = () => (
  <div className="w-full h-full fixed inset-0 z-10 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <img src={LoaderImage} alt="Loader Icon GIF" className="w-20" />
  </div>
);

export default Loader;

import React from 'react';
import SideBar from './sidebar/Sidebar';
import Footer from './Footer';

interface Props {
  children: any,
}

const Templates = (props: Props) => {
  const { children } = props;

  return (
    <div className="flex flex-col fixed z-10 w-full h-full">
      <SideBar />
      <div className="md:ml-56 flex-1 relative">
        <div className="absolute w-full h-full flex flex-col">
          <div className="flex-1 h-full overflow-auto">
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;

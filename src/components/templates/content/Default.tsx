import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Content = (props: Props) => {
  const { children } = props;

  return (
    <>
      <div className="bg-blue-500 px-3 md:px-8 h-40" />
      <div className="px-3 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <div className="w-full bg-white rounded-xl shadow-md p-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

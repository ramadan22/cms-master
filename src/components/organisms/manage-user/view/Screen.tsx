import React from 'react';
import Templates from '../../../templates/Default';
import Content from '../../../templates/content/Default';
import TitleContent from '../../../molecules/general/TitleContent';
import Service from './Service';

const ManageUsers = () => {
  const { title } = Service();

  return (
    <Templates>
      <Content>
        <TitleContent text={title} />
        <div className="p-4">
          test
        </div>
      </Content>
    </Templates>
  );
};

export default ManageUsers;

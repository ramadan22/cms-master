import React from 'react';

import TitleContent from '../../molecules/general/TitleContent';
import TableData from '../../molecules/permission/TableData';
import Content from '../../templates/content/Default';
import Templates from '../../templates/Default';

import useForm from './hooks/useForm';
import useTable from './hooks/useTable';
import service from './hooks';

const PermissionList = () => {
  const { handleParams } = useForm();
  const { tableHeader } = useTable();
  const { list, title } = service();

  return (
    <Templates>
      <Content>
        <TitleContent text={title} />
        {
          list && list?.length > 0
          && list?.map((row: any) => (
            <div key={row?.id}>
              <TableData
                tableList={row?.permission || []}
                tableHeader={tableHeader}
                tableTitle={row?.name}
                handleCheckbox={(
                  key: string,
                  value: boolean,
                  payload: any,
                ) => handleParams(key, value, payload)}
              />
            </div>
          ))
        }
      </Content>
    </Templates>
  );
};

export default PermissionList;

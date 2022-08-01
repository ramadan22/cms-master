import React, { memo } from 'react';

import Checkbox from '../../atoms/common/Checkbox';
import Title from '../../atoms/common/Title';

interface TableHeaderField {
  text: string;
}

interface TableList {
  id: number,
  slug: string,
  view: boolean,
  add: boolean,
  delete: boolean,
  edit: boolean,
  other: boolean
}

interface Props {
  tableHeader: Array<TableHeaderField>;
  tableList: Array<TableList>;
  tableTitle: string;
  handleCheckbox: (key: string, value: boolean, payload: any) => void
}

const TableData = (props: Props) => {
  const {
    tableHeader,
    tableList,
    tableTitle,
    handleCheckbox,
  } = props;

  const thClass: string = ''
    + 'px-2 text-purple-500 align-middle border-b border-solid '
    + 'border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left';
  const tdClass: string = ''
    + 'border-b border-gray-200 align-middle font-light text-sm '
    + 'whitespace-nowrap px-2 py-4 text-left';

  const TableHeader = memo((payload: any) => (
    <thead>
      <tr>
        {payload?.field
          && payload?.field.length > 0
          && payload?.field.map((row: any) => (
            <th key={row?.text} className={thClass}>{row?.text}</th>
          ))}
      </tr>
    </thead>
  ));

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <Title text={tableTitle} classes="text-2xl" />
        <table className="items-center w-full bg-transparent border-collapse">
          <TableHeader field={tableHeader} />
          <tbody>
            {
              tableList && tableList?.length > 0
                ? tableList?.map((row: any) => (
                  <tr key={row?.id}>
                    <td className={tdClass}>{row?.slug}</td>
                    <td className={tdClass}>
                      <Checkbox
                        handler={() => handleCheckbox('VIEW', row?.view, row)}
                        checked={row?.view}
                      />
                    </td>
                    <td className={tdClass}>
                      <Checkbox
                        handler={() => handleCheckbox('ADD', row?.add, row)}
                        checked={row?.add}
                      />
                    </td>
                    <td className={tdClass}>
                      <Checkbox
                        handler={() => handleCheckbox('EDIT', row?.edit, row)}
                        checked={row?.edit}
                      />
                    </td>
                    <td className={tdClass}>
                      <Checkbox
                        handler={() => handleCheckbox('DELETE', row?.delete, row)}
                        checked={row?.delete}
                      />
                    </td>
                    <td className={tdClass}>
                      <Checkbox
                        handler={() => handleCheckbox('OTHER', row?.other, row)}
                        checked={row?.other}
                      />
                    </td>
                  </tr>
                ))
                : (
                  <tr>
                    <td className="text-center p-10" colSpan={6}>Tidak ada data hak akses</td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;

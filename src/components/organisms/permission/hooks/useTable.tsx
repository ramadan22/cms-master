import { useState } from 'react';

const Service = () => {
  interface TableHeader {
    text: string;
  }

  const [tableHeader] = useState<TableHeader[]>([
    {
      text: 'Service Name',
    },
    {
      text: 'View',
    },
    {
      text: 'Add',
    },
    {
      text: 'Edit',
    },
    {
      text: 'Delete',
    },
    {
      text: 'Other',
    },
  ]);

  return {
    tableHeader,
  };
};

export default Service;

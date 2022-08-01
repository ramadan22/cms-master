import { useState, useEffect } from 'react';
import ServicePermisson from '../../../../services/api/permission';

const service = () => {
  interface IList {
    id: number;
    slug: string;
    view: boolean;
    add: boolean;
    delete: boolean;
    edit: boolean;
    other: boolean;
  }

  const { get } = ServicePermisson();

  const [title] = useState<string>('Pengaturan Hak Akses');
  const [list, setList] = useState<IList[] | []>([]);

  const getList = async () => {
    try {
      const result: any = await get();
      setList(result?.response || []);
    } catch (error: any) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => () => {
    setList([]);
  }, []);

  return {
    list,
    title,
  };
};

export default service;

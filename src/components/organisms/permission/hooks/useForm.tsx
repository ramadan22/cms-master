import { useState, useEffect } from 'react';

interface IParams {
  id: number;
  slug: string;
  view: boolean;
  add: boolean;
  delete: boolean;
  edit: boolean;
  other: boolean;
}

const useForm = () => {
  const [params, setParams] = useState<IParams[] | []>([]);

  const handleParams = (key: string, value: boolean, payload: any) => {
    const payloadUpdate: any = { ...payload };
    delete payloadUpdate.id_role;

    const idx: number = params?.findIndex((o: any) => o.id === payload?.id);

    const condition: boolean = idx > -1;

    if (condition) {
      params[idx] = {
        ...params[idx],
        [key.toLowerCase()]: Number(!value),
      };
    }

    setParams(condition ? [...params] : [...params, {
      ...payloadUpdate,
      [key.toLowerCase()]: Number(!value),
    }]);
  };

  useEffect(() => () => {
    setParams([]);
  }, []);

  return {
    params,
    handleParams,
  };
};

export default useForm;

import { AppContext } from '@/app/providers/appProvider';
import { filterAppListBySearchValue } from '@/utils/helpers';
import { ChangeEvent, useContext } from 'react';

export const useSearch = () => {
  const { baseAppList, setAppList } = useContext(AppContext);

  const handleSearchBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value) return setAppList(baseAppList);

    if (baseAppList) setAppList(filterAppListBySearchValue(value, baseAppList));
  };

  return {
    handleSearchBarChange,
  };
};

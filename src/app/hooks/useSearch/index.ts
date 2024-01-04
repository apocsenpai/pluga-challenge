import { AppContext } from '@/app/providers/appProvider';
import { filterAppListBySearchValue, getAppListByPage } from '@/utils/helpers';
import { ChangeEvent, useContext } from 'react';

export const useSearch = () => {
  const { baseAppList, setAppList } = useContext(AppContext);

  const handleSearchBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value)
    if (!value && baseAppList) return setAppList(getAppListByPage(1, baseAppList));

    if (baseAppList) setAppList(filterAppListBySearchValue(value, baseAppList));
  };

  return {
    handleSearchBarChange,
  };
};

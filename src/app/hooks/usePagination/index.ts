import { AppContext } from '@/app/providers/appProvider';
import { getAppListByPage } from '@/utils/helpers';

import { useContext, useState } from 'react';

export const usePagination = (defaultPage: number) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const { baseAppList, setAppList } = useContext(AppContext);

  const advancePage = (pagesQuantity: number) => {
    if (currentPage >= pagesQuantity) return;

    const newPage = currentPage + 1;

    setCurrentPage(newPage);
    setAppList(getAppListByPage(newPage, baseAppList));
  };

  const backPage = () => {
    if (currentPage <= 1) return;

    const newPage = currentPage - 1;

    setCurrentPage(newPage);
    setAppList(getAppListByPage(newPage, baseAppList));
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
    setAppList(getAppListByPage(index, baseAppList));
  };

  return {
    currentPage,
    advancePage,
    backPage,
    goToPage,
  };
};

import { AppContext } from '@/app/providers/appProvider';
import { IApp } from '@/services/app';
import { getAppListByPage } from '@/utils/helpers';

import { Dispatch, useContext, useState } from 'react';

export const usePagination = (defaultPage: number) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const { baseAppList, setAppList } = useContext(AppContext);

  const advancePage = (pagesQuantity: number) => {
    if (currentPage >= pagesQuantity) return;

    const newPage = currentPage + 1;

    if (baseAppList)
      handlePageChange(setCurrentPage, newPage, setAppList, baseAppList);
  };

  const backPage = () => {
    if (currentPage <= 1) return;

    const newPage = currentPage - 1;

    if (baseAppList)
      handlePageChange(setCurrentPage, newPage, setAppList, baseAppList);
  };

  const goToPage = (index: number) => {
    if (baseAppList)
      handlePageChange(setCurrentPage, index, setAppList, baseAppList);
  };

  return {
    currentPage,
    advancePage,
    backPage,
    goToPage,
  };
};

function handlePageChange(
  changePageTo: Dispatch<React.SetStateAction<number>>,
  newPage: number,
  setNewList: Dispatch<React.SetStateAction<IApp[] | undefined>>,
  appList: IApp[],
) {
  changePageTo(newPage);
  setNewList(getAppListByPage(newPage, appList));
}

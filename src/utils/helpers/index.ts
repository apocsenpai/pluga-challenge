import { IApp } from '@/services/app';

export const filterAppListBySearchValue = (value: string, appList: IApp[]) =>
  appList.filter((item) => item.name.includes(value));

export const existInList = (newApp: IApp, appList: IApp[]) =>
  appList.find((item) => item.app_id === newApp.app_id);

export const createPageIndexList = (totalItems: number, itemsPerPage = 12) => {
  const pageQuantity = Math.ceil(totalItems / itemsPerPage);

  return Array.from({ length: pageQuantity }, (_e, index) => index + 1);
};

export const getAppListByPage = (
  pageNumber: number,
  appList: IApp[],
  itemsPerPage = 12,
) => {
  const firstItemIndex = (pageNumber - 1) * itemsPerPage;

  const lastItemNotIncludeIndex = pageNumber * itemsPerPage;

  return appList.slice(firstItemIndex, lastItemNotIncludeIndex);
};

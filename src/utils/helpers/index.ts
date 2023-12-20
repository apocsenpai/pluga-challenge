import { IApp } from '@/services/app';

export const filterAppListBySearchValue = (value: string, appList: IApp[]) =>
  appList.filter((item) => item.name.includes(value));

export const existInList = (newApp: IApp, appList: IApp[]) =>
  appList.find((item) => item.app_id === newApp.app_id);

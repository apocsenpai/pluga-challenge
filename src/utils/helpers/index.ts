import { IApp } from '@/services/app';

export const filterAppListBySearchValue = (value: string, appList: IApp[]) =>
  appList.filter((item) => item.name.includes(value));

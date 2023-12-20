import appService, { IApp } from '@/services/app';

import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

interface IAppContext {
  appList: IApp[] | undefined;
  baseAppList: IApp[] | undefined;
  setAppList: React.Dispatch<React.SetStateAction<IApp[] | undefined>>;
}

export const AppContext = React.createContext<IAppContext>({
  baseAppList: undefined,
  appList: undefined,
  setAppList: () => false,
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: baseAppList } = useQuery({
    queryKey: ['card-list'],
    queryFn: appService.getAll,
  });

  const [appList, setAppList] = useState(baseAppList);

  useEffect(() => {
    if (baseAppList) setAppList(baseAppList);
  }, [baseAppList]);

  const contextValue = useMemo(() => ({ baseAppList, appList, setAppList }), [ baseAppList, appList, setAppList]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

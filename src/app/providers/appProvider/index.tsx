import appService, { IApp } from '@/services/app';

import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

interface IAppContext {
  appList: IApp[] | undefined;
}

export const AppContext = React.createContext<IAppContext>({
  appList: undefined,
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: appList } = useQuery({
    queryKey: ['card-list'],
    queryFn: appService.getAll,
  });

  const contextValue = useMemo(() => ({ appList }), [appList]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

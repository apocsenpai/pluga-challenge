import { useLocalStorage } from '@/app/hooks';
import { IApp } from '@/services/app';
import { existInList } from '@/utils/helpers';

export const usePreviousApp = () => {
  const { getItem, setItem } = useLocalStorage();

  const updatePrevious = (app: IApp) => {
    const previousApps = getItem<IApp[]>('previous-apps') || [];

    if (existInList(app, previousApps)) return;

    if (previousApps.length < 3)
      return setItem('previous-apps', [app, ...previousApps]);

    const lastTwoApps = previousApps.slice(0, 2);

    setItem('previous-apps', [app, ...lastTwoApps]);
  };

  const getPreviousApp = () => getItem<IApp[]>('previous-apps');

  return {
    updatePrevious,
    getPreviousApp,
  };
};

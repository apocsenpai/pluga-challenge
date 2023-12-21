import { AppCard } from '@/components/molecules';
import { IApp } from '@/services/app';

import { CardList as List } from './index.styled';

interface ICardList {
  appList: IApp[] | undefined;
}

export const CardList = ({ appList }: ICardList) => {
  return (
    <List>
      {!appList ? (
        <>Loading..</>
      ) : (
        appList.map((app) => <AppCard key={app.app_id} {...app} background />)
      )}
    </List>
  );
};

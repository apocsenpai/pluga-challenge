import { AppCard } from '@/components/molecules';

import { CardList as List } from './index.styled';
import { IApp } from '@/services/app';

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

import Card from '@/components/Card';

import { CardList as List } from './index.styled';

import { useContext } from 'react';
import { AppContext } from '@/app/providers/appProvider';

const CardList = () => {
  const { appList } = useContext(AppContext)

  return (
    <List>
      {!appList ? (
        <>Loading..</>
      ) : (
        appList.map((app) => <Card key={app.app_id} {...app} />)
      )}
    </List>
  );
};

export default CardList;

import Card from '@/components/Card';
import appService from '@/services/app';

import { CardList as List } from './index.styled';
import { useQuery } from 'react-query';

const CardList = () => {
  const { data: appList } = useQuery({
    queryKey: ['card-list'],
    queryFn: appService.getAll,
  });

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

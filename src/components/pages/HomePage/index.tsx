import { AppContext } from '@/app/providers/appProvider';
import { CardList, Header } from '@/components/organisms';

import { Container, Content } from './index.styled';
import { useContext } from 'react';

export const HomePage = () => {
  const { appList } = useContext(AppContext);

  return (
    <Container>
      <Content>
        <Header />
        <CardList appList={appList} />
      </Content>
    </Container>
  );
};

import { AppContext } from '@/app/providers/appProvider';
import { AppModal, CardList, Footer, Header } from '@/components/organisms';

import { Container, Content } from './index.styled';
import { useContext } from 'react';
import { useToggle } from '@/app/hooks';

export const HomePage = () => {
  const { appList } = useContext(AppContext);

  const { isActive } = useToggle();

  return (
    <Container>
      <Content>
        <Header />
        <CardList appList={appList} />
        <Footer />
        {isActive && (
          <AppModal {...isActive} />
        )}
      </Content>
    </Container>
  );
};

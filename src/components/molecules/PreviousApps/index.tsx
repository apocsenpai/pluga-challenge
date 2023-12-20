import { AppContext } from '@/app/providers/appProvider';
import { Title } from '@/components/atoms';
import { AppCard } from '@/components/molecules';
import { useContext } from 'react';
import { Footer } from './index.styled';

export const PreviousApps = () => {
  const { appList } = useContext(AppContext);

  return (
    <Footer>
      <Title minSize="0.75rem" maxSize="1.25rem">
        ÚLTIMAS FERRAMENTAS VISUALIZADAS
      </Title>
      <AppCard {...appList[0]} />
    </Footer>
  );
};

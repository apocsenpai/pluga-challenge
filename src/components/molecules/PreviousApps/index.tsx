import { usePreviousApp } from '@/app/hooks';
import { Title } from '@/components/atoms';
import { AppCard } from '@/components/molecules';

import { Footer, PreviousGrid } from './index.styled';

export const PreviousApps = () => {
  const { getPreviousApp } = usePreviousApp();

  return (
    <Footer>
      <Title $minSize="0.75rem" $maxSize="1.25rem">
        ÚLTIMAS FERRAMENTAS VISUALIZADAS
      </Title>
      <PreviousGrid>
        {getPreviousApp().map((item) => (
          <AppCard key={item.app_id} {...item} background />
        ))}
      </PreviousGrid>
    </Footer>
  );
};

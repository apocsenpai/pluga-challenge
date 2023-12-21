import { useToggle } from '@/app/hooks';
import { AppAccess } from '@/components/molecules';
import { PreviousApps } from '@/components/molecules/PreviousApps';
import { IApp } from '@/services/app';

import { Container, Modal, ShadowScreen } from './index.styled';

export const AppModal = (props: IApp) => {
  const { turnOffElement } = useToggle();

  return (
    <Container>
      <ShadowScreen onClick={turnOffElement} />
      <Modal>
        <AppAccess {...props} />
        <PreviousApps />
      </Modal>
    </Container>
  );
};

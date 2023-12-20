import { IApp } from '@/services/app';
import { Container, Modal, ShadowScreen } from './index.styled';
import { AppAccess } from '@/components/molecules';
import { PreviousApps } from '@/components/molecules/PreviousApps';

interface IAppModal extends IApp {
  turnOffElement: () => void;
}

export const AppModal = ({ turnOffElement, ...props }: IAppModal) => (
  <Container>
    <ShadowScreen onClick={turnOffElement} />
    <Modal background={props.color}>
      <AppAccess {...props} />
      <PreviousApps/>
    </Modal>
  </Container>
);

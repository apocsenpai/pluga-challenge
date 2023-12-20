import { IApp } from '@/services/app';
import { Container, Modal, ShadowScreen } from './index.styled';

interface IAppModal extends IApp{
  turnOffElement: () => void;
}

export const AppModal = ({ turnOffElement }: IAppModal) => (
  <Container>
    <ShadowScreen onClick={turnOffElement} />
    <Modal>
        
    </Modal>
  </Container>
);


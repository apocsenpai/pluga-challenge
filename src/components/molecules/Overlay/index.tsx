import { ChevronRight } from 'lucide-react';

import { Container } from './index.styled';

export const Overlay = () => {
  return (
    <Container>
      <p>
        EXPLORAR
        <span>
          <ChevronRight size={20} color={'#0ea7ff'} strokeWidth={3} />
        </span>
      </p>
    </Container>
  );
};

import { Button, ImageWrapper, Title } from '@/components/atoms';
import { IApp } from '@/services/app';

import { Container, InfoWrapper } from './index.styled';

export const AppAccess = ({ color, icon, link, name }: IApp) => {
  return (
    <Container>
      <ImageWrapper height={'10rem'} width={'10rem'}>
        <img src={icon} alt={`App ${name}`} />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{name}</Title>
        <Button>ACESSAR</Button>
      </InfoWrapper>
    </Container>
  );
};

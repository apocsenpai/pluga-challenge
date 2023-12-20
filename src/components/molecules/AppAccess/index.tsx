import { Button, ImageWrapper, Title } from '@/components/atoms';
import { IApp } from '@/services/app';

import { Background, Container, InfoWrapper } from './index.styled';

export const AppAccess = ({ color, icon, link, name }: IApp) => {
  return (
    <Container>
      <Background background={color}>
        <ImageWrapper height={'10rem'} width={'10rem'}>
          <img src={icon} alt={`App ${name}`} />
        </ImageWrapper>
      </Background>
      <InfoWrapper>
        <Title>{name}</Title>
        <Button
          href={link}
          background={color}
        >
          ACESSAR
        </Button>
      </InfoWrapper>
    </Container>
  );
};

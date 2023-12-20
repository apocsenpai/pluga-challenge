import { useToggle } from '@/app/hooks';
import { ImageWrapper, Title } from '@/components/atoms';
import { Overlay } from '@/components/molecules';
import { AppModal } from '@/components/organisms';
import { IApp } from '@/services/app';

import { Card } from './index.styled';

export interface IAppCard extends IApp {
  background?: boolean;
}

export const AppCard = ({ background = false, ...props }: IAppCard) => {
  const { isActive, turnOffElement, turnOnElement } = useToggle();

  const { icon, name } = props;

  return (
    <>
      <Card onClick={turnOnElement} background={background}>
        <ImageWrapper width={'6rem'} height={'6rem'}>
          <img src={icon} alt={`${name} application`} />
        </ImageWrapper>
        <Title>{name}</Title>
        <Overlay />
      </Card>
      {isActive && <AppModal turnOffElement={turnOffElement} {...props} />}
    </>
  );
};

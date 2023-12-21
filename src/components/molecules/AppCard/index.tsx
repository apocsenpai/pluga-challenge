import { usePreviousApp, useToggle } from '@/app/hooks';
import { ImageWrapper, Title } from '@/components/atoms';
import { Overlay } from '@/components/molecules';
import { IApp } from '@/services/app';

import { Card } from './index.styled';

export interface IAppCard extends IApp {
  background?: boolean;
}

export const AppCard = ({ background = false, ...props }: IAppCard) => {
  const { turnOnElement } = useToggle();

  const { updatePrevious } = usePreviousApp();

  const { icon, name } = props;

  const handCardClick = () => {
    updatePrevious(props);
    turnOnElement(props);
  };

  return (
    <Card onClick={handCardClick} background={background}>
      <ImageWrapper width={'6rem'} height={'6rem'}>
        <img src={icon} alt={`${name} application`} />
      </ImageWrapper>
      <Title $maxSize="1rem" $minSize="0.75rem">
        {name}
      </Title>
      <Overlay />
    </Card>
  );
};

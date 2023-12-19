import { ChevronRight } from 'lucide-react';
import { Card as Item, ImageWrapper, Overlay } from './index.styled';
import { IApp } from '@/services/app';

const Card = ({ icon, name, color, link, app_id }: IApp) => {
  return (
    <Item>
      <ImageWrapper>
        <img src={icon} alt={`${name} application`} />
      </ImageWrapper>
      <span>{name}</span>
      <Overlay>
        <p>
          EXPLORAR
          <span>
            <ChevronRight size={20} color={'#0ea7ff'} strokeWidth={3} />
          </span>
        </p>
      </Overlay>
    </Item>
  );
};

export default Card;

import { ButtonHTMLAttributes } from 'react';
import { Button } from './index.styled';

export interface ICircleButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string;
  hasHover?: boolean
}

export const CircleButton = ({
  background = '#ffffff',
  hasHover = false,
  children,
  ...props
}: ICircleButton) => {
  return (
    <Button hasHover={hasHover} background={background} {...props}>
      {children}
    </Button>
  );
};

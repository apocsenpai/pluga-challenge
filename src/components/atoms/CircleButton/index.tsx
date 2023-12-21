import { ButtonHTMLAttributes } from 'react';
import { Button } from './index.styled';

export interface ICircleButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  $hasHover?: boolean;
  $active?: boolean;
}

export const CircleButton = ({
  $active = false,
  $hasHover = false,
  children,
  ...props
}: ICircleButton) => {
  return (
    <Button $hasHover={$hasHover} $active={$active} {...props}>
      {children}
    </Button>
  );
};

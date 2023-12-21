import { ButtonHTMLAttributes } from 'react';
import { CustomButton } from './index.styled';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string;
}

export const Button = ({
  children,
  background = '#0ea7ff',
  ...props
}: IButton) => (
  <CustomButton background={background} {...props}>
    {children}
  </CustomButton>
);

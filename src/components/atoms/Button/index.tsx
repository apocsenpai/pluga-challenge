import { PropsWithChildren } from 'react';
import { CustomButton } from './index.styled';

export interface IButton extends PropsWithChildren {}

export const Button = ({ children }: IButton) => (
  <CustomButton>{children}</CustomButton>
);

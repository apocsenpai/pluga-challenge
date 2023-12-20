import { PropsWithChildren } from 'react';
import { CustomTitle } from './index.styled';

export interface ITitle extends PropsWithChildren {
  color?: string;
}

export const Title = ({ children, color = '#6e6e6e' }: ITitle) => (
  <CustomTitle color={color}>{children}</CustomTitle>
);

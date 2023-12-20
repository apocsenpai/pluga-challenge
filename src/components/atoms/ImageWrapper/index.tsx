import { PropsWithChildren } from 'react';
import { Wrapper } from './index.styled';

export interface IImageWrapper extends PropsWithChildren {
  width: string;
  height: string;
}

export const ImageWrapper = ({ children, ...props }: IImageWrapper) => (
  <Wrapper {...props}>{children}</Wrapper>
);

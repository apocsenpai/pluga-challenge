import { PropsWithChildren } from 'react';
import { CustomTitle } from './index.styled';

export interface ITitle extends PropsWithChildren {
  $color?: string;
  $minSize?: string;
  $maxSize?: string;
}

export const Title = ({
  children,
  $color = '#6e6e6e',
  $minSize = '0.75rem',
  $maxSize = '2.5rem',
}: ITitle) => (
  <CustomTitle $color={$color} $maxSize={$maxSize} $minSize={$minSize}>
    {children}
  </CustomTitle>
);

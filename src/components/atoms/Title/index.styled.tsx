import styled from 'styled-components';
import { ITitle } from '.';

export const CustomTitle = styled.p<ITitle>`
  position: relative;
  z-index: 1;
  font-size: clamp(
    ${({ minSize }) => minSize},
    0.9953rem + 1.2539vw,
    ${({ maxSize }) => maxSize}
  );
  font-weight: 700;
  line-height: 1.125rem;
  color: ${({ color }) => color};
`;

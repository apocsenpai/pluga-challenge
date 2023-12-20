import styled from 'styled-components';
import { ITitle } from '.';

export const CustomTitle = styled.p<ITitle>`
  position: relative;
  z-index: 1;
  font-weight: 700;
  line-height: 1.125rem;
  color: ${({ color }) => color};
`;

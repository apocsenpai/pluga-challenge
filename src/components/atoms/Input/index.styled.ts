import styled from 'styled-components';
import { IInput } from '.';

export const Input = styled.input<IInput>`
  width: 100%;
  font-size: clamp(0.75rem, 0.6991rem + 0.2508vw, 1rem);
  color: #333333;
  outline: none;
  border: none;

  &::placeholder {
    color: ${({ $focused }) => ($focused ? '#0ea7ff' : '#a8b8c0')};
  }
`;

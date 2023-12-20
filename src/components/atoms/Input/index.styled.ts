import styled from 'styled-components';
import { IInput } from '.';

export const Input = styled.input<IInput>`
  width: 100%;
  font-size: 1rem;
  color: #333333;
  outline: none;
  border: none;

  &::placeholder {
    color: ${({ focused }) => (focused ? '#0ea7ff' : '#a8b8c0')};
  }
`;

import styled from 'styled-components';
import { ICircleButton } from '.';

export const Button = styled.button<ICircleButton>`
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  border: 0.0625rem solid transparent;
  border-radius: 100%;
  color: #0ea7ff;
  background-color: ${({ background }) => background};
  cursor: pointer;
  transition: 150ms linear;

  &:hover {
    ${({ hasHover }) =>
      hasHover &&
      `background-color: #0ea7ff;
    color: #ffffff;`}

    opacity: 0.85;
  }
`;

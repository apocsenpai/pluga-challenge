import styled, { css } from 'styled-components';
import { ICircleButton } from '.';

const activeButton = css`
  background-color: #0ea7ff;
  color: #ffffff;
`;
const inactiveButton = css`
  background-color: #ffffff;
  color: #0ea7ff;
`;

export const Button = styled.button<ICircleButton>`
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  border: 0.0625rem solid transparent;
  border-radius: 100%;
  color: #0ea7ff;

  ${({ $active }) => ($active ? activeButton : inactiveButton)};
  cursor: pointer;
  transition: 150ms linear;

  &:hover {
    ${({ $hasHover }) => $hasHover && activeButton}

    opacity: 0.85;
  }
`;

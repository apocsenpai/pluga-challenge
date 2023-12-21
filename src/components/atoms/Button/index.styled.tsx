import styled from 'styled-components';
import { IButton } from '.';

export const CustomButton = styled.button<IButton>`
  border: 0.0625rem solid transparent;
  border-radius: 2rem;
  padding: 1rem;
  cursor: pointer;
  background-color: ${({ background }) => background};
  transition: 200ms ease-out;
  text-align: center;

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.9;
    box-shadow: rgba(66, 113, 151, 0.09) 0 0 0 0.0625rem;
  }
`;

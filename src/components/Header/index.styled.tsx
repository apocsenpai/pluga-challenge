import styled from 'styled-components';

interface IInputBox {
  focused: boolean;
}

export const InputBox = styled.label<IInputBox>`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid;
  border-color: ${({ focused }) => (focused ? '#0ea7ff' : '#a8b8c0')};
  cursor: pointer;

  &:hover {
    border-color: #0ea7ff;

    svg {
      stroke: #0ea7ff;
    }

    input::placeholder {
      color: #0ea7ff;
    }
  }
`;

export const Input = styled.input<IInputBox>`
  width: 100%;
  font-size: 1rem;
  color: #333333;
  outline: none;
  border: none;

  &::placeholder {
    color: ${({ focused }) => (focused ? '#0ea7ff' : '#a8b8c0')};
  }
`;

import styled from 'styled-components';

interface IInputBox {
  focused: boolean;
}

export const Header = styled.header`
  padding: 1rem 1.25rem;
`;

export const InputBox = styled.label<IInputBox>`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid;
  border-color: ${({ focused }) => (focused ? '#27aae1' : '#a8b8c0')};
  cursor: pointer;

  &:hover {
    border-color: #27aae1;

    svg {
      stroke: #27aae1;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.25rem;
  color: #333333;
  outline: none;
  border: none;
`;

import { IInput } from '@/components/atoms/Input';
import styled from 'styled-components';

export const InputBox = styled.label<IInput>`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid;
  border-color: ${({ $focused }) => ($focused ? '#0ea7ff' : '#a8b8c0')};
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

import styled from 'styled-components';
import { IImageWrapper } from '.';

export const Wrapper = styled.div<IImageWrapper>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`;

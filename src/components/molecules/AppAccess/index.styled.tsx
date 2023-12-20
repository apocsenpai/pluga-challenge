import styled from 'styled-components';

interface IBackground {
  background: string;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  padding: 3rem 8rem 0;
`;

export const Background = styled.div<IBackground>`
  background-color: ${({ background }) => `${background}dd`};
  padding: 0.25rem;
  border: 0.0625rem solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(66, 113, 151, 0.09) 0 0 0 0.0625rem;
`;

export const InfoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

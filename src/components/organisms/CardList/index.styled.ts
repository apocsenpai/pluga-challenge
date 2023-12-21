import styled from 'styled-components';

export const CardList = styled.ul`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 11.125rem;
  gap: 3rem 1.5rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 1.5rem;
  }
  @media (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 460px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`;

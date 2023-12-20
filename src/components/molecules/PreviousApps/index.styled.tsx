import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  padding: 1.5rem 2rem;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  background: #ffffff;
`;

export const PreviousGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  width: 100%;
`;

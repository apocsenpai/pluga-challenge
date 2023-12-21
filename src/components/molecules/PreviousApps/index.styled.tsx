import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  padding: 1.5rem 2rem;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  border-radius: 1rem;
  background: #ffffff;

  @media (max-width: 580px) {
    padding: 1rem 1rem;
  }
`;

export const PreviousGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: 50%;

    &::-webkit-scrollbar {
      width: 0.25rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #0ea7ff;
      border-radius: 0.5rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #0ea7ff;
    }
  }
`;

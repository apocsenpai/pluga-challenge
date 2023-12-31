import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const ShadowScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000088;
`;

export const Modal = styled.main`
  width: min(75%, 45rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 0.0625rem solid transparent;
  border-radius: 1rem;
  position: absolute;
  background-color: #ffffff;

  @media (max-width: 580px) {
    padding: 3rem 1rem 1rem;
    gap: 1rem;
    flex-direction: column;
    height: 90vh;
    overflow: hidden;
  }
`;

export const AppContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

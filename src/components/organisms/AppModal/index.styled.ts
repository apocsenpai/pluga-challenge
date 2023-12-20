import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
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
  gap: 3rem;
  border: 0.0625rem solid transparent;
  padding: 3rem 2rem 1rem;
  border-radius: 0.25rem;
  position: absolute;
  background-color: white;
`;

export const AppContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
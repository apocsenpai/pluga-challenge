import styled from 'styled-components';

interface IModal {
  background: string;
}

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

export const Modal = styled.main<IModal>`
  width: min(75%, 45rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 0.0625rem solid transparent;
  border-radius: 1rem;
  position: absolute;
  background-color: ${({  background }) =>  background};
`;

export const AppContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

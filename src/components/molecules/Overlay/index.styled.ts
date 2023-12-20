import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    20% {
        transform: scale(1.5);
    }
    40%{
        transform: scale(1.125);
    }
    60%{
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }

`;

const slide = keyframes`
    0% {
        transform: translateX(-0.125rem);
    }
    50% {
        transform: translateX(0.125rem);
    }
    100% {
        transform: translateX(-0.125rem);
    }
`;

export const Container = styled.div`
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 0.25rem;
  transition: 300ms ease-out;

  p {
    display: none;
    position: relative;
    margin-top: 2.25rem;
    font-weight: 700;
    font-size: clamp(0.75rem, 0.6111rem + 0.7407vw, 1.5rem);
    animation: ${pulse} 0.5s linear forwards;
    color: #0ea7ff;

    span {
      height: 1.25rem;
      animation: ${slide} 1s ease-in-out infinite;
    }
  }
`;

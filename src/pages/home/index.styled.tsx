import styled, { keyframes } from 'styled-components';

interface IInputBox {
  focused: boolean;
}

export const Container = styled.div`
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  width: min(100%, 1440px);
`;

export const InputBox = styled.label<IInputBox>`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid;
  border-color: ${({ focused }) => (focused ? '#0ea7ff' : '#a8b8c0')};
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

export const Input = styled.input<IInputBox>`
  width: 100%;
  font-size: 1rem;
  color: #333333;
  outline: none;
  border: none;

  &::placeholder {
    color: ${({ focused }) => (focused ? '#0ea7ff' : '#a8b8c0')};
  }
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 3rem 1.5rem;
  padding: 2rem;
`;

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: rgba(66, 113, 151, 0.09) 0 0 0 0.0625rem;
  cursor: pointer;

  & > span {
    position: relative;
    z-index: 1;
    font-weight: 700;
    color: #9e9e9e;
  }
`;

export const ImageWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.5rem;
  overflow: hidden;
  background-color: red;

  img {
    width: 100%;
    height: auto;
  }
`;

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    20% {
        transform: scale(1.5);
    }
    40%{
        transform: scale(1);
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
`

export const Overlay = styled.div`
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
    font-size: 1.25rem;
    animation: ${pulse} 0.55s linear forwards;
    color: #0ea7ff;

    span {
      height: 1.25rem;
      animation: ${slide} 1s ease-in-out infinite;
    }
  }

  &:hover {
    background-color: #eef7fc99;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.125rem;
    }
  }
`;

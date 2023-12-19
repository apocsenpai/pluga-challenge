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

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 11.125rem;
  gap: 3rem 1.5rem;
  padding: 2rem;
`;

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: rgba(66, 113, 151, 0.09) 0 0 0 0.0625rem;
  cursor: pointer;
  background-color: #dddddd;
  text-align: center;

  & > span {

    position: relative;
    z-index: 1;
    font-weight: 700;
    line-height: 1.125rem;
    color: #6e6e6e;
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

  img {
    width: 100%;
    height: auto;
  }
`;

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
    animation: ${pulse} 0.5s linear forwards;
    color: #0ea7ff;

    span {
      height: 1.25rem;
      animation: ${slide} 1s ease-in-out infinite;
    }
  }

  &:hover {
    background-color: #eef7fcaa;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.125rem;
    }
  }
`;

import styled, { css } from 'styled-components';

interface ICard {
  background?: boolean;
}

const cardHover = css`
  background-color: #eef7fcaa;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.125rem;
  }
`;

export const Card = styled.li<ICard>`
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

  &:hover div:nth-child(3) {
    ${cardHover}
  }
`;


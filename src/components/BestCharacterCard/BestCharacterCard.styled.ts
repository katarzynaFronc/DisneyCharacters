import styled from "styled-components";

export const BestCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  width: 80%;

  background-color: var(--color-secondary);
  color: var(--color-primary-light);
  border-radius: 20px;
  margin-top: 100px;

  @media (min-width: 960px) {
    flex-direction: row;
  }

  h1 {
    font-size: 3rem;
    padding-bottom: 24px;
    margin: 2rem 0;
    font-weight: lighter;
  }

  p {
    margin: 0%;
  }
`;

export const PictureContairer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;

  @media (min-width: 960px) {
    height: 450px;
    width: 450px;
  }
`;

export const Picture = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 50px;
  max-width: 450px;
`;

export const FilterInput = styled.input`
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 2.5rem;
  margin: auto;
  border: 1px solid var(--color-primary-light);
  border-radius: 4px;
  background-color: var(--color-secondary);
  padding-left: 24px;
  color: var(--color-primary-light);
`;

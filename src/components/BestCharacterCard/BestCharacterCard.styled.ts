import styled from "styled-components";

export const BestCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  background-color: var(--color-secondary);
  color: var(--color-primary-light);
  border-radius: 20px;

  @media (min-width: 960px) {
    flex-direction: row;
  }

  h1 {
    font-size: 3rem;
    padding-bottom: 24px;
    margin: 0;
  }
`;

export const Picture = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  max-width: 450px;
`;

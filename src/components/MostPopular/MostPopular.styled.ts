import styled from "styled-components";

export const MostPopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, var(--color-primary-dark) 95%, var(--color-primary-light) 5%);
  width: 100%;
  height: auto;

  h1 {
    font-size: 3.5rem;
    padding: 100px 0 0 0;
    text-align: center;
  }
`;

export const MostPopularCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  margin: auto;
  height: 500px;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

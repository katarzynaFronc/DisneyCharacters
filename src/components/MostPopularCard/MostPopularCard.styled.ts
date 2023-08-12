import styled from "styled-components";

export const MostPopular = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 5px 5px var(--color-primary-dark);
  background-color: var(--color-primary-light);
  width: 300px;
`;

export const ImageContainer = styled.div`
  height: 300px;
  width: 100%;
  background-color: var(--color-secondary);

  img {
    height: 100%;
    width: 100%;
  }
`;

export const Achievements = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  padding: 0 25px 25px;

  h3 {
    margin: 0;
    padding-top: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

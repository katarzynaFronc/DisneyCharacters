import styled from "styled-components";

export const ListContainer = styled.div`
  background-color: var(--color-primary-light);
  box-shadow: 3px 5px 5px var(--color-primary-dark);
  width: 100%;

  @media (min-width: 960px) {
    width: 90%;
  }

  h3 {
    padding-left: 25px;
  }
`;

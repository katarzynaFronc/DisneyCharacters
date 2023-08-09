import styled from "styled-components";

export const ListContainer = styled.div`
  background-color: var(--color-primary-light);
  box-shadow: 3px 5px 5px var(--color-primary-dark);
  width: 90%;
  margin: auto;

  @media (min-width: 740px) {
    width: 50%;
  }

  h3 {
    padding-left: 25px;
  }
`;

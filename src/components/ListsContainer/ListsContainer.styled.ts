import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin: auto;
  gap: 50px;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

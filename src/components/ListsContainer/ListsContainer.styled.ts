import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 80%;
  margin: auto;
  margin-bottom: 100px;
  gap: 50px;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

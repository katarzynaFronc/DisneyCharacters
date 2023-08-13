import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-primary-dark);
  height: 80px;
  padding: 0 50px;
  gap: 2rem;

  a {
    color: var(--color-secondary);
    text-decoration: none;
  }
  h1,
  h3 {
    margin: 0;
  }
`;

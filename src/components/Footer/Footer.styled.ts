import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 600px;
  background-color: var(--color-primary-light);
  padding: 100px 0 50px 0;

  h2 {
    text-align: center;
    margin: 0;
    line-height: 150%;
  }
`;

export const GitHubButton = styled.button`
  background-color: var(--color-primary-light);
  border-radius: 8px;
  max-width: 250px;
  padding: 36px 60px;
  color: blue;
  font-size: 1.2rem;

  :hover {
    cursor: pointer;
  }
`;

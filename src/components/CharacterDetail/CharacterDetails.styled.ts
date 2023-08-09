import styled from "styled-components";

export const CharacterDescribe = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 0 25px;

  img {
    grid-column: 1/2;
    max-height: 2rem;
  }

  span {
    grid-column: 2/3;
  }

  p {
    grid-column: 3/4;
    text-align: right;
  }
`;

export const CharacterName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ShowsIcon = styled.div`
  cursor: pointer;
`;

export const StarButton = styled.button`
  display: flex;
  grid-column: 8/9;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  height: 25px;
  width: 25px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

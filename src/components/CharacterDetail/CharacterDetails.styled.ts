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
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  span {
    grid-column: 2/3;
  }

  p {
    grid-column: 3/4;
    text-align: right;
  }
`;

export const ImageContainer = styled.div`
  height: 46px;
  width: 46px;
`;

export const CharacterName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ShowsIcon = styled.div`
  cursor: pointer;
`;

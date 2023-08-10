import { ListContainer } from "../CharactersList/CharactersList.styled";
import { CharacterDescribe } from "../CharacterDetail/CharacterDetails.styled";

export const MyFavorites = () => {
  return (
    <ListContainer>
      <h3>My Favorite</h3>
      <CharacterDescribe>
        <h4>Picture</h4>
        <h4>Name</h4>
        <h4 style={{ textAlign: "right" }}>Films count</h4>
        <h4 style={{ textAlign: "right" }}>Favorites</h4>
      </CharacterDescribe>
    </ListContainer>
  );
};

import { ListContainer } from "../CharactersList/CharactersList.styled";
import { CharacterDescribe } from "../CharacterDetail/CharacterDetails.styled";
import { CharacterProps, FavoritesContext } from "../../context/favorites.provider";
import { useContext } from "react";
import { CharacterDetails } from "../CharacterDetail/CharacterDetails.component";

export const MyFavorites = () => {
  const favorites = useContext(FavoritesContext);
  return (
    <ListContainer>
      <h3>My Favorites</h3>
      <CharacterDescribe>
        <h4>Picture</h4>
        <h4>Name</h4>
        <h4 style={{ textAlign: "right" }}>Films count</h4>
        <h4 style={{ textAlign: "right" }}>Favorites</h4>
      </CharacterDescribe>
      {favorites.map((character: CharacterProps) => (
        <CharacterDetails key={character._id} _id={character._id} character={character} />
      ))}
    </ListContainer>
  );
};

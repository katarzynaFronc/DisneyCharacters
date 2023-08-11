import { ListContainer } from "../CharactersList/CharactersList.styled";
import { CharacterDescribe } from "../CharacterDetail/CharacterDetails.styled";
import { CharacterDetails, CharacterProps } from "../CharacterDetail/CharacterDetails.component";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const MyFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

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

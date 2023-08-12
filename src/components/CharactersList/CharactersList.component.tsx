import { useContext } from "react";
import { CharactersContext } from "../../context/characters.context";
import { CharacterDetails } from "../CharacterDetail/CharacterDetails.component";
import { CharacterDescribe } from "../CharacterDetail/CharacterDetails.styled";
import { ListContainer } from "./CharactersList.styled";

export const CharactersList = () => {
  const characters = useContext(CharactersContext);

  if (!characters || characters.length === 0) {
    return null;
  }
  return (
    <ListContainer>
      <h3>Disney Characters</h3>
      <CharacterDescribe>
        <h4>Picture</h4>
        <h4>Name</h4>
        <h4 style={{ textAlign: "right" }}>Films count</h4>
        <h4 style={{ textAlign: "right" }}>Favorites</h4>
      </CharacterDescribe>
      {characters.map((character) => (
        <CharacterDetails character={character} key={character._id} {...character} />
      ))}
    </ListContainer>
  );
};

import { CharacterDetails, CharacterProps } from "../CharacterDetail/CharacterDetails.component";
import { CharacterDescribe } from "../CharacterDetail/CharacterDetails.styled";
import { ListContainer } from "./CharactersList.styled";

export interface CharactersListProps {
  characters?: CharacterProps[];
  findfavorite?: CharacterProps[];
  onAddToFavorites?: (character: CharacterProps) => void;
}

export const CharactersList = ({ characters }: CharactersListProps) => {
  const withFilms = characters ? characters.filter((character) => character.films.length > 0) : [];
  return (
    <ListContainer>
      <h3>Disney Characters</h3>
      <CharacterDescribe>
        <h4>Picture</h4>
        <h4>Name</h4>
        <h4 style={{ textAlign: "right" }}>Films count</h4>
        <h4 style={{ textAlign: "right" }}>Favorites</h4>
      </CharacterDescribe>
      {withFilms.map((character) => (
        <CharacterDetails character={character} key={character._id} {...character} />
      ))}
    </ListContainer>
  );
};

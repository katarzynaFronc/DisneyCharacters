import { BestCharacterCard } from "../BestCharacterCard/BestCharacterCard.component";
import { GetCharacters } from "../GetCharacters/GetCharacters.component";
import { ListsContainer } from "../ListsContainer/ListsContainer.component";
import { CharactersContainer } from "./Characters.styled";

export const Characters = () => {
  const characters = GetCharacters();

  return (
    <CharactersContainer>
      <BestCharacterCard character={characters} />
      <ListsContainer />
    </CharactersContainer>
  );
};

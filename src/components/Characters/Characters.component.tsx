import { BestCharacterCard } from "../BestCharacterCard/BestCharacterCard.component";
import { CharacterProps } from "../CharacterDetail/CharacterDetails.component";
import { ListsContainer } from "../ListsContainer/ListsContainer.component";
import { CharactersContainer } from "./Characters.styled";

export interface CharactersListProps {
  characters?: CharacterProps[];
  findfavorite?: CharacterProps[];
  onAddToFavorites?: (character: CharacterProps) => void;
  character?: CharacterProps;
}

export const Characters = ({ characters }: CharactersListProps) => {
  return (
    <CharactersContainer>
      <BestCharacterCard characters={characters} />
      <ListsContainer characters={characters} />
    </CharactersContainer>
  );
};

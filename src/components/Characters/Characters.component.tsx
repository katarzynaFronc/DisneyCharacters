import { useState } from "react";
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

export const Characters = () => {
  const [filteredData, setFilteredData] = useState<CharacterProps[]>([]);

  const handleFilter = (filteredData: CharacterProps[]) => {
    setFilteredData(filteredData);
  };

  return (
    <CharactersContainer>
      <BestCharacterCard onFilter={handleFilter} />
      <ListsContainer filteredData={filteredData} />
    </CharactersContainer>
  );
};

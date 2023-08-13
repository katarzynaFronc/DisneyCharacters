import { useContext, useState } from "react";
import { CharactersContext } from "../../context/characters.context";
import { CharacterProps } from "../CharacterDetail/CharacterDetails.component";
import { BestCard, FilterInput, Picture, PictureContairer, TextContainer } from "./BestCharacterCard.styled";
import { FavoritesContext } from "../../context/favorites.provider";

export interface BestCharacterProps {
  character: CharacterProps[];
}

export interface BestCharacterCardProps {
  onFilter: (filteredData: CharacterProps[]) => void;
}

export const BestCharacterCard = ({ onFilter }: BestCharacterCardProps) => {
  const characters = useContext(CharactersContext);
  const { favorites } = useContext(FavoritesContext);

  const [filterInput, setFilterInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setFilterInput(inputValue);

    const filteredData = favorites.filter((favorite) => favorite.name.toLowerCase().includes(inputValue.toLowerCase()));

    onFilter(filteredData);
  };

  if (!characters || characters.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomCharacter = characters[randomIndex];
  const { imageUrl } = randomCharacter || {};

  const withTvShows = characters ? characters.filter((character) => character.tvShows.length > 0) : [];

  return (
    <BestCard>
      <PictureContairer>
        <Picture src={imageUrl} alt="image" />
      </PictureContairer>
      <TextContainer>
        <p>List of {withTvShows.length} Disney Characters with own Tv Shows</p>
        <h1> The Best Animated Disney Characters of All Time</h1>
        <div>
          <FilterInput type="text" placeholder="Search Character" value={filterInput} onChange={handleInputChange} />
        </div>
      </TextContainer>
    </BestCard>
  );
};

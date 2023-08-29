import { useContext, useState, useMemo } from "react";
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

  const randomCaharcter = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * characters.length);

    return characters[randomIndex];
  }, [characters]);

  const imageUrl = randomCaharcter?.imageUrl;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setFilterInput(inputValue);

    const filteredData = favorites.filter((favorite) => favorite.name.toLowerCase().includes(inputValue.toLowerCase()));

    onFilter(filteredData);
  };

  if (!characters || characters.length === 0) {
    return null;
  }

  const withTvShows = characters ? characters.filter((character) => character.tvShows.length > 0) : [];

  return (
    <BestCard>
      <PictureContairer>
        <Picture src={imageUrl} alt="Default character image" />
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

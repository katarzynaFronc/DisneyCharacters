import { CharacterProps } from "../CharacterDetail/CharacterDetails.component";
import { CharactersListProps } from "../Characters/Characters.component";
import { FilterInput } from "../FilterInput/FilterInput.component";
import { BestCard, Picture, TextContainer } from "./BestCharacterCard.styled";

export interface BestCharacterProps {
  character: CharacterProps[];
}

export const BestCharacterCard = ({ characters }: CharactersListProps) => {
  if (!characters || characters.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomCharacter = characters[randomIndex];
  const { imageUrl } = randomCharacter || {};

  return (
    <BestCard>
      <Picture src={imageUrl} alt="image" />
      <TextContainer>
        <h1> The Best Animated Disney Characters of All Time</h1>
        <FilterInput />
      </TextContainer>
    </BestCard>
  );
};

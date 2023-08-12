import { useContext } from "react";
import { CharacterProps, CharactersContext } from "../../context/characters.context";
import { MostPopularCardContainer, MostPopularContainer } from "./MostPopular.styled";
import { MostPopularCard } from "../MostPopularCard/MostPopularCard.component";

export interface MostPopularProps {
  mostPopular: CharacterProps[];
}

export const MostPopular = () => {
  const characters = useContext(CharactersContext);

  return (
    <MostPopularContainer>
      <h1>
        Most popular Disney
        <br />
        Characters
      </h1>
      <MostPopularCardContainer>
        <MostPopularCard></MostPopularCard>
        <MostPopularCard></MostPopularCard>
        <MostPopularCard></MostPopularCard>
      </MostPopularCardContainer>
    </MostPopularContainer>
  );
};

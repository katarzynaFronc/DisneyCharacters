import { useContext } from "react";
import { CharacterProps, CharactersContext } from "../../context/characters.context";
import { MostPopularCardContainer, MostPopularContainer } from "./MostPopular.styled";
import { MostPopularCard } from "../MostPopularCard/MostPopularCard.component";

export interface MostPopularProps {
  mostPopular: CharacterProps[];
}

export const MostPopular = () => {
  const characters = useContext(CharactersContext);

  const mostPopularCharacters = [...characters].sort((a, b) => b.films.length - a.films.length).slice(0, 3);

  return (
    <MostPopularContainer>
      <h1>
        Most popular Disney
        <br />
        Characters
      </h1>
      <MostPopularCardContainer>
        {mostPopularCharacters.map((character) => (
          <MostPopularCard key={character._id} character={character} />
        ))}
      </MostPopularCardContainer>
    </MostPopularContainer>
  );
};

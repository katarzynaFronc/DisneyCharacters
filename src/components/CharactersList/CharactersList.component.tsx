import { CharacterDetails, CharacterProps } from "../CharacterDetail/CharacterDetails.component";

export interface CharactersListProps {
  characters: CharacterProps[];
}

export const CharactersList = ({ characters }: CharactersListProps) => {
  const withFilms = characters.filter((character) => character.films.length > 0);

  return (
    <div>
      {withFilms.map((character) => (
        <CharacterDetails character={character} key={character.name} {...character} />
      ))}
    </div>
  );
};

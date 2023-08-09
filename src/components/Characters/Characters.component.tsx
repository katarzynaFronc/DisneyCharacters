import { CharactersList } from "../CharactersList/CharactersList.component";
import { GetCharacters } from "../GetCharacters/GetCharacters.component";
import { MyFavorites } from "../MyFavorites/MyFavorites.component";
import { CharactersContainer } from "./Characters.styled";

export const Characters = () => {
  const characters = GetCharacters();

  return (
    <CharactersContainer>
      <CharactersList characters={characters} />
      <MyFavorites />
    </CharactersContainer>
  );
};

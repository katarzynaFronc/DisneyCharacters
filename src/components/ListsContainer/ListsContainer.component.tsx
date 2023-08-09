import { CharactersList } from "../CharactersList/CharactersList.component";
import { GetCharacters } from "../GetCharacters/GetCharacters.component";
import { MyFavorites } from "../MyFavorites/MyFavorites.component";
import { Container } from "./ListsContainer.styled";

export const ListsContainer = () => {
  const characters = GetCharacters();

  return (
    <Container>
      <CharactersList characters={characters} />
      <MyFavorites />
    </Container>
  );
};

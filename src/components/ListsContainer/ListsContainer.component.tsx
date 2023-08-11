import { CharactersListProps } from "../Characters/Characters.component";
import { CharactersList } from "../CharactersList/CharactersList.component";
import { MyFavorites } from "../MyFavorites/MyFavorites.component";
import { Container } from "./ListsContainer.styled";

export const ListsContainer = ({ characters }: CharactersListProps) => {
  return (
    <Container>
      <CharactersList characters={characters} />
      <MyFavorites />
    </Container>
  );
};

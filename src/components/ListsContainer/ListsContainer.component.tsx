import { CharacterProps } from "../CharacterDetail/CharacterDetails.component";
import { CharactersList } from "../CharactersList/CharactersList.component";
import { MyFavorites } from "../MyFavorites/MyFavorites.component";
import { Container } from "./ListsContainer.styled";

export interface ListsContainerProps {
  filteredData: CharacterProps[];
}

export const ListsContainer = ({ filteredData }: ListsContainerProps) => {
  return (
    <Container>
      <CharactersList />
      <MyFavorites filteredData={filteredData} />
    </Container>
  );
};

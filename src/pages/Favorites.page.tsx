import { ListsContainerProps } from "../components/ListsContainer/ListsContainer.component";
import { Container } from "../components/ListsContainer/ListsContainer.styled";
import { MyFavorites } from "../components/MyFavorites/MyFavorites.component";

export const FavoritePage = ({ filteredData }: ListsContainerProps) => {
  return (
    <>
      <Container>
        <MyFavorites filteredData={filteredData} />
      </Container>
    </>
  );
};

import { ListContainer } from "../CharactersList/CharactersList.styled";
import { CharacterDescribe } from "../CharacterDetail/CharacterDetails.styled";
import { CharacterProps, FavoritesContext } from "../../context/favorites.provider";
import { useContext } from "react";
import { CharacterDetails } from "../CharacterDetail/CharacterDetails.component";

export interface MyFavoritesProps {
  filteredData: CharacterProps[];
}

export const MyFavorites = ({ filteredData }: MyFavoritesProps) => {
  const { favorites } = useContext(FavoritesContext);
  const favoritesToRender = filteredData.length > 0 ? filteredData : favorites;

  return (
    <ListContainer>
      <h3>My Favorites</h3>
      <CharacterDescribe>
        <h4>Picture</h4>
        <h4>Name</h4>
        <h4 style={{ textAlign: "right" }}>Films count</h4>
        <h4 style={{ textAlign: "right" }}>Favorites</h4>
      </CharacterDescribe>
      {favoritesToRender.map((character: CharacterProps) => (
        <CharacterDetails key={character._id} _id={character._id} character={character} />
      ))}
    </ListContainer>
  );
};

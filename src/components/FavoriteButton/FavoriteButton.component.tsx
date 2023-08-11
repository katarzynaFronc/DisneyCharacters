import { useState, useEffect, useContext } from "react";
import { StarBorder } from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { CharacterProps, SingleCharacterDetailsProps } from "../CharacterDetail/CharacterDetails.component";
import { StarButton } from "./FavoriteButton.styled";
import { FavoritesContext } from "../../context/favorites.provider";

export const FavoriteButton = ({ _id, character }: SingleCharacterDetailsProps) => {
  const favorites = useContext(FavoritesContext);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      const parsedFavorites: CharacterProps[] = JSON.parse(savedFavorites);
      const isCharacterFavorited = parsedFavorites.some((fav) => fav._id === _id);
      setIsFavorited(isCharacterFavorited);
    }
  }, [_id]);

  const handleClick = () => {
    const savedFavorites = localStorage.getItem("favorites");
    let favoriteCharacters: CharacterProps[] = [];
    if (savedFavorites) {
      favoriteCharacters = JSON.parse(savedFavorites);
    }

    if (isFavorited) {
      const updatedFavorites = favoriteCharacters.filter((fav) => fav._id !== _id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favoriteCharacters.push(character);
      localStorage.setItem("favorites", JSON.stringify(favoriteCharacters));
    }

    setIsFavorited(!isFavorited);
  };

  return <StarButton onClick={handleClick}>{isFavorited ? <StarRateIcon style={{ color: "#ffd000" }} /> : <StarBorder />}</StarButton>;
};

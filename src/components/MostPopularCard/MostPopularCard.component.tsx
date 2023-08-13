import { useContext } from "react";
import { CharacterProps } from "../../context/characters.context";
import { FavoritesContext } from "../../context/favorites.provider";
import { Achievements, ImageContainer, Info, MostPopular } from "./MostPopularCard.styled";
import StarRateIcon from "@mui/icons-material/StarRate";

interface MostPopularCardProps {
  character: CharacterProps;
}

export const MostPopularCard = ({ character }: MostPopularCardProps) => {
  const { favorites } = useContext(FavoritesContext);

  const { imageUrl, name, films, tvShows } = character;

  return (
    <MostPopular>
      <ImageContainer>
        <img src={imageUrl} alt="image" />
      </ImageContainer>
      <Info>
        <h2>{name}</h2>
        {favorites.some((favCharacter) => favCharacter._id === character._id) ? <StarRateIcon style={{ color: "#ffd000" }} /> : null}
      </Info>
      <Achievements>
        <h3>Films:</h3>
        <h3>{films.length}</h3>
        <h3>Tv Shows:</h3>
        <h3>{tvShows.length}</h3>
      </Achievements>
    </MostPopular>
  );
};

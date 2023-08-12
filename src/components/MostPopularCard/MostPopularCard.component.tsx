import { CharacterProps } from "../../context/characters.context";
import { Achievements, ImageContainer, Info, MostPopular } from "./MostPopularCard.styled";
import StarRateIcon from "@mui/icons-material/StarRate";

interface MostPopularCardProps {
  character: CharacterProps;
}

export const MostPopularCard = ({ character }: MostPopularCardProps) => {
  const { imageUrl, name, films, tvShows } = character;

  return (
    <MostPopular>
      <ImageContainer>
        <img src={imageUrl} alt="image" />
      </ImageContainer>
      <Info>
        <h2>{name}</h2>
        <StarRateIcon style={{ color: "#ffd000" }} />
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

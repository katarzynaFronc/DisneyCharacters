import TvIcon from "@mui/icons-material/Tv";
import { StarBorder } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { CharacterDescribe, CharacterName, ShowsIcon } from "./CharacterDetails.styled";
import { StarButton } from "../CharacterDetail/CharacterDetails.styled";

export interface CharacterProps {
  _id: number;
  name: string;
  imageUrl: string;
  films: string[];
  tvShows: string[];
}

export interface SingleCharacterDetailsProps {
  character: CharacterProps;
}

export const CharacterDetails = ({ character }: SingleCharacterDetailsProps) => {
  const { name, imageUrl, films, tvShows } = character;
  let icon;
  if (tvShows.length > 0) {
    icon = <TvIcon />;
  }

  return (
    <CharacterDescribe>
      <img src={imageUrl} alt="image"></img>
      <CharacterName>
        <span>{name}</span>
        <ShowsIcon>
          <Tooltip title={tvShows} arrow>
            <IconButton>{icon}</IconButton>
          </Tooltip>
        </ShowsIcon>
      </CharacterName>
      <p>{films.length}</p>
      <StarButton>
        <StarBorder />
      </StarButton>
    </CharacterDescribe>
  );
};

import TvIcon from "@mui/icons-material/Tv";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { CharacterDescribe, CharacterName, ShowsIcon } from "./CharacterDetails.styled";

import { FavoriteButton } from "../FavoriteButton/FavoriteButton.component";

export interface CharacterProps {
  _id: number;
  name: string;
  imageUrl: string;
  films: string[];
  tvShows: string[];
}

export interface SingleCharacterDetailsProps {
  _id: number;
  character: CharacterProps;
}

export const CharacterDetails = ({ _id, character }: SingleCharacterDetailsProps) => {
  const { name, imageUrl, films, tvShows } = character || {};

  return (
    <CharacterDescribe>
      <img src={imageUrl} alt="image"></img>
      <CharacterName>
        <span>{name}</span>
        <ShowsIcon>
          <Tooltip title={tvShows} arrow>
            <IconButton>{tvShows && tvShows.length > 0 ? <TvIcon /> : null}</IconButton>
          </Tooltip>
        </ShowsIcon>
      </CharacterName>
      <p>{films.length}</p>
      <FavoriteButton _id={_id} character={character} />
    </CharacterDescribe>
  );
};

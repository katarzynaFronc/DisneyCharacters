import TvIcon from "@mui/icons-material/Tv";
import { StarBorder } from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { CharacterDescribe, CharacterName, ShowsIcon } from "./CharacterDetails.styled";
import { StarButton } from "../CharacterDetail/CharacterDetails.styled";
import { useState } from "react";

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

  const [favorites, setFavorites] = useState<CharacterProps[]>([]);

  const addToFav = (character: CharacterProps) => {
    setFavorites(() => {
      const existingFavorites = JSON.parse(localStorage.getItem("favorites") || "[]") as CharacterProps[];
      const isAlreadyFavorited = existingFavorites.some((fave: CharacterProps) => fave._id === character._id);

      let updatedFavorites;
      if (isAlreadyFavorited) {
        updatedFavorites = existingFavorites.filter((fave: CharacterProps) => fave._id !== character._id);
      } else {
        updatedFavorites = [...existingFavorites, character];
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      console.log(updatedFavorites);
      return updatedFavorites;
    });
  };

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
      <StarButton onClick={() => addToFav(character)}>{favorites.some((fave: CharacterProps) => fave._id === _id) ? <StarRateIcon /> : <StarBorder />}</StarButton>
    </CharacterDescribe>
  );
};

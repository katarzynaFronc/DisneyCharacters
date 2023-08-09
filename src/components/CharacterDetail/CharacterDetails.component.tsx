import { StarBorder } from "@mui/icons-material";
import TvIcon from "@mui/icons-material/Tv";

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
    <div>
      <img src={imageUrl} alt="image"></img>
      <h1>{name}</h1>
      <div>{icon}</div>
      <p>{films.length}</p>
      <button>
        <StarBorder />
      </button>
    </div>
  );
};

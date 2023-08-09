import { CharacterProps } from "../CharacterDetail/CharacterDetails.component";
import { BestCard, Picture, TextContainer } from "./BestCharacterCard.styled";
import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { textFieldStyles } from "./BestCharacterCard.styled";

export interface BestCharacterProps {
  character: CharacterProps[];
}

export const BestCharacterCard = ({ character }: BestCharacterProps) => {
  const randomIndex = Math.floor(Math.random() * character.length);
  const randomCharacter = character[randomIndex];

  const { imageUrl } = randomCharacter || {};

  const CustomTextField = withStyles(textFieldStyles)(TextField);

  return (
    <BestCard>
      <Picture src={imageUrl} alt="image" />
      <TextContainer>
        <h1> The Best Animated Disney Characters of All Time</h1>
        <CustomTextField
          id="outlined-basic"
          label="Search Character"
          variant="outlined"
          sx={{
            input: {
              color: "white",
            },
          }}
        />
      </TextContainer>
    </BestCard>
  );
};

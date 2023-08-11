import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { textFieldStyles } from "./FilterInput.styled";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useState } from "react";

export const FilterInput = () => {
  const CustomTextField = withStyles(textFieldStyles)(TextField);

  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [query, setQuery] = useState("");

  const searchFav = favorites.filter((favorite: { name: string }) => {
    return favorite.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
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
  );
};

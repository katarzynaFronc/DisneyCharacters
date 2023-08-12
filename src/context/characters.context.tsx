import React, { ReactNode } from "react";
import { GetCharacters } from "../components/GetCharacters/GetCharacters.component";

interface ProviderProps {
  children: ReactNode;
}

export interface CharacterProps {
  _id: number;
  name: string;
  imageUrl: string;
  films: string[];
  tvShows: string[];
}

export const CharactersContext = React.createContext<Array<CharacterProps>>([]);

export const CharactersContextProvider = ({ children }: ProviderProps) => {
  const characters = GetCharacters();

  return <CharactersContext.Provider value={characters}>{children}</CharactersContext.Provider>;
};

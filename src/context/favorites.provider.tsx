import React, { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

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

export const FavoritesContext = React.createContext<Array<CharacterProps>>([]);

export const FavoritesContextProvider = ({ children }: ProviderProps) => {
  const favorites = useLocalStorage("favorites", []);

  return <FavoritesContext.Provider value={favorites}>{children}</FavoritesContext.Provider>;
};

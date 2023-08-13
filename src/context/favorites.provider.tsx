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

export interface FavoritesContextProps {
  favorites: CharacterProps[];
  setLocalStorageValue: (value: CharacterProps[]) => void;
}

const initialContext: FavoritesContextProps = {
  favorites: [],
  setLocalStorageValue: () => {},
};

export const FavoritesContext = React.createContext<FavoritesContextProps>(initialContext);

export const FavoritesContextProvider = ({ children }: ProviderProps) => {
  const [favorites, setLocalStorageValue] = useLocalStorage("favorites", []);

  return <FavoritesContext.Provider value={{ favorites, setLocalStorageValue }}>{children}</FavoritesContext.Provider>;
};

import { GetCharacters } from "./components/GetCharacters/GetCharacters.component";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { FavoritesContext } from "./context/favorites.provider";
import { CharactersContext } from "./context/characters.context";
import { Layout } from "./components/Layout/Layout.component";

const App = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const characters = GetCharacters();

  return (
    <CharactersContext.Provider value={characters}>
      <FavoritesContext.Provider value={favorites}>
        <Layout />
      </FavoritesContext.Provider>
    </CharactersContext.Provider>
  );
};

export default App;

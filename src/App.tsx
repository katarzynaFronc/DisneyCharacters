import { Characters } from "./components/Characters/Characters.component";
import { GetCharacters } from "./components/GetCharacters/GetCharacters.component";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { FavoritesContext } from "./context/favorites.provider";

const App = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const characters = GetCharacters();

  return (
    <FavoritesContext.Provider value={favorites}>
      <div>
        <Characters characters={characters} />
      </div>
    </FavoritesContext.Provider>
  );
};

export default App;

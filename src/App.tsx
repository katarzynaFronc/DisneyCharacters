import { Route, BrowserRouter, Routes } from "react-router-dom";
import { GetCharacters } from "./components/GetCharacters/GetCharacters.component";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { FavoritesContext } from "./context/favorites.provider";
import { CharactersContext } from "./context/characters.context";
import { Layout } from "./components/Layout/Layout.component";
import { Homepage } from "./pages/Homepage.page";
import { FavoritePage } from "./pages/Favorites.page";

const App = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const characters = GetCharacters();

  return (
    <CharactersContext.Provider value={characters}>
      <FavoritesContext.Provider value={favorites}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/favorites" element={<FavoritePage filteredData={favorites} />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </FavoritesContext.Provider>
    </CharactersContext.Provider>
  );
};

export default App;

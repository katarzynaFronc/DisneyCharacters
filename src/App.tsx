import { Route, BrowserRouter, Routes } from "react-router-dom";
import { GetCharacters } from "./components/GetCharacters/GetCharacters.component";
import { FavoritesContext, FavoritesContextProvider } from "./context/favorites.provider";
import { CharactersContext } from "./context/characters.context";
import { Layout } from "./components/Layout/Layout.component";
import { Homepage } from "./pages/Homepage.page";
import { FavoritePage } from "./pages/Favorites.page";
import { useContext } from "react";

const App = () => {
  const { favorites } = useContext(FavoritesContext);
  const characters = GetCharacters();

  return (
    <CharactersContext.Provider value={characters}>
      <FavoritesContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/favorites" element={<FavoritePage filteredData={favorites} />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </FavoritesContextProvider>
    </CharactersContext.Provider>
  );
};

export default App;

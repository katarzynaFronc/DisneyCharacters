import { CharactersList } from "./components/CharactersList/CharactersList.component";
import { GetCharacters } from "./components/GetCharacters/GetCharacters.component";

const App = () => {
  const characters = GetCharacters();

  return (
    <div>
      <CharactersList characters={characters} />
    </div>
  );
};

export default App;

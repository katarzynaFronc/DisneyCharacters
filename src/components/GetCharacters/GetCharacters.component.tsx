import { useEffect, useState } from "react";
import { CharacterProps } from "../CharacterDetail/CharacterDetails.component";

export const charactersApi50 = () => fetch("https://api.disneyapi.dev/character");
export const charactersApi100 = () => fetch("http://api.disneyapi.dev/character?page=2&pageSize=50");

export const GetCharacters = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  useEffect(() => {
    const fetchCharacters50 = async () => {
      try {
        const response = await charactersApi50();
        const data = await response.json();
        return data.data.slice(0, 50);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCharacters100 = async () => {
      try {
        const response = await charactersApi100();
        const data = await response.json();
        return data.data.slice(0, 50);
      } catch (error) {
        console.error(error);
      }
    };

    Promise.all([fetchCharacters50(), fetchCharacters100()])
      .then(([characters50, characters100]) => {
        const mergedCharacters = [...characters50, ...characters100];
        setCharacters(mergedCharacters);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const withFilms = characters ? characters.filter((character) => character.films.length > 0) : [];

  return withFilms;
};

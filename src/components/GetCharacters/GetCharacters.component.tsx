import { useEffect, useState } from "react";

interface CharacterProps {
  _id: number;
  name: string;
  imageUrl: string;
  films: string[];
  tvShows: string[];
}

export const GetCharacters = () => {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  useEffect(() => {
    const fetchCharacters50 = async () => {
      try {
        const response = await fetch("https://api.disneyapi.dev/character");
        const data = await response.json();
        return data.data.slice(0, 50);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCharacters100 = async () => {
      try {
        const response = await fetch("http://api.disneyapi.dev/character?page=2&pageSize=50");
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
        console.log(mergedCharacters);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <></>;
};

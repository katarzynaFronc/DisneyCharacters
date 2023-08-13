import { Characters } from "../components/Characters/Characters.component";
import { MostPopular } from "../components/MostPopularCard/MostPopularCard.styled";

export const Homepage = () => {
  return (
    <>
      <MostPopular />
      <Characters />
    </>
  );
};

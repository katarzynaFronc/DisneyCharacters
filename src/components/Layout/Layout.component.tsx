import { Characters } from "../Characters/Characters.component";
import { Footer } from "../Footer/Footer.component";
import { MostPopular } from "../MostPopularCard/MostPopularCard.styled";
import { Navigation } from "../Navigation/Navigation.component";
import { LayoutContainer } from "./Layout.styled";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Navigation />
      <MostPopular />
      <Characters />
      <Footer />
    </LayoutContainer>
  );
};

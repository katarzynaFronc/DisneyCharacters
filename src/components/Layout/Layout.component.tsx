import { ReactNode } from "react";
import { LayoutContainer } from "./Layout.styled";
import { Navigation } from "../Navigation/Navigation.component";
import { Footer } from "../Footer/Footer.component";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Navigation />
      <div> {children}</div>
      <Footer />
    </LayoutContainer>
  );
};

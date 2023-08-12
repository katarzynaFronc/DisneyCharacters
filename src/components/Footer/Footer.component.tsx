import { Link } from "react-router-dom";
import { FooterContainer, GitHubButton } from "./Footer.styled";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

export const Footer = () => {
  return (
    <FooterContainer>
      <h2>
        We are Disney fans and we adore the concept
        <br />
        Open Source <FavoriteRoundedIcon style={{ color: "#ff0000" }}></FavoriteRoundedIcon>
      </h2>
      <a href="https://github.com/katarzynaFronc/DisneyCharacters">
        <GitHubButton>Go to GitHub</GitHubButton>
      </a>
      <p>
        Made with<FavoriteRoundedIcon style={{ color: "#ff0000", fontSize: 16 }}></FavoriteRoundedIcon> 2023
      </p>
    </FooterContainer>
  );
};

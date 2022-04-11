import { Link } from "react-router-dom"
import { SocialIcon } from "../../pages/Home/components/SocialIcon";
import { useTheme } from "../../context/useTheme";
import LogoLight from "../../assets/logo_light.svg";
import LogoMode from "../../assets/logo_mode.svg";

import { FooterWrapper } from "./Footer.styles";

export const Footer = () => {
  const { mode } = useTheme();
  return (
    <FooterWrapper mode ={mode}>
      <div>
        <Link to="/">
          {mode === "dark" ? (
            <img src={LogoLight} alt="company_logo" />
          ) : (
            <img src={LogoMode} alt="company_logo" />
          )}
        </Link>
      </div>
      <div>
        <SocialIcon />
      </div>
    </FooterWrapper>
  );
};

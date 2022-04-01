
import { SocialIcon } from "../../pages/Home/components/SocialIcon";
import { Logo } from "../icons/Logo";

import { FooterWrapper } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Logo />
      </div>
      <div>
        <SocialIcon />
      </div>
    </FooterWrapper>
  );
};



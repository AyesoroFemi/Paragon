import styled from "styled-components"
import { SocialIcon } from "../pages/Home/components/SocialIcon"
import { Logo } from "./icons/Logo"


export const Footer = () => {
  return (
    <FooterWrapper>
            <div>
                <Logo/>
            </div>
            <div>
                <SocialIcon />
            </div>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled.div`
    padding-top: 27px;
    padding-bottom: 27px;
    padding-left: 7rem;
    padding-right: 7rem;
    background-color: #434343;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
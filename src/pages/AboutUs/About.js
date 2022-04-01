import styled from "styled-components";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navbar/NavBar"
import { HeaderText } from "../Service/Service";
import { AboutContent } from "./components/AboutContent/AboutContent";


export const About = () => {
  return (
    <>
       <NavBar/>
       <AboutWrap>
            <HeaderText style={{marginTop: '1.3rem'}}>
                About Us
                <p></p>
            </HeaderText>
            <AboutContent/>
       </AboutWrap>
       <Footer/>
    </>
  )
}


export const AboutWrap = styled.div`
    border: 1px solid transparent;
    background-image: url(./assets/pattern.png);
    margin-top:4rem;
    margin-bottom: 120px;
    
`

import styled from "styled-components"
import { Footer } from "../../components/footer/Footer"
import { Container, NavBar } from "../../components/navbar/NavBar"
import { AboutSession } from "./components/AboutSession"
import { Banner } from "./components/Banner"
import { Forms } from "./components/Forms"
import { Gallery } from "./components/Gallery"
import { ServiceSession } from "./components/ServiceSession"
import { SliderContent } from "./components/SliderContent"
import { SocialIcon } from "./components/SocialIcon"



export const Home = () => {
    return (
      <>
          <NavBar/>
          <SliderContent/>
          <IconWrapper>
              <SocialIcon/>
          </IconWrapper>
          <AboutSession />
          <ServiceSession/>
          <Gallery />
          <Banner />
          <Forms />
        <Footer/>
      </>
    )
}

export const IconWrapper= styled(Container)`

`
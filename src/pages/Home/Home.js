import styled from "styled-components"
import { Footer } from "../../components/footer/Footer"
import { NavBar } from "../../components/navbar/NavBar"
import { Container } from "../../components/navbar/NavBar.styles"

import { AboutSession } from "./components/aboutSession/AboutSession"
import { Banner } from "./components/Banner"
import { Forms } from "../../components/forms/Forms"
import { Gallery } from "./components/Gallery"
import { ServiceSession } from "./components/ServiceSession"
import { SliderContent } from "./components/sliderContent/SliderContent"
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
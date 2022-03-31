import styled from "styled-components"

import { ImageSlider } from "./ImageSlider"

export const SliderContent = () => {
  return (
    <Wrapper>
        <TextWrapper>
            <h1>Innovative ideas,  <br />
                stylish designs
            </h1>
            <ParaText>
                We are committed understanding the challenges and <br/>
                in our projects by understanding the challenges and <br/>
                solutions in each project.  
            </ParaText>
            <ButtonGroup>
                <PortFolioButton>
                        <a href="">Show porfolio</a>
                        <box-icon name='right-arrow-alt'></box-icon>
                </PortFolioButton>
                <ShowButton>
                    <a href="">Contact Us</a>
                </ShowButton>
            </ButtonGroup>
        </TextWrapper>
        <ImageSlider />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
    margin-top: 2rem;
    height: 72vh;
    overflow-x: hidden;
    display: flex;
`

export const TextWrapper = styled.div`
    margin-left: 7rem;
    color: #fff;
    /* flex: 0.5; */

    h1 {
        margin-top: 6rem;
        font-size: 4rem;
    }
`

export const ParaText = styled.div`
    margin-top: -2rem;
    width: 529px;
    font-size: 18px;
    line-height: 40px;
    font-weight: 400;
`

export const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1rem;

    div {
        padding: 1rem 1.4rem;
        border-radius: 5px;  
    }

    div a{
        text-decoration: none;
        color: #232323;
        font-weight: 500;
    }
`

export const ShowButton = styled.div`
    background-color: #E59D30;

    div {
        padding: 1rem 1.4rem;
        border-radius: 5px;  
    }

    div a{
        text-decoration: none;
        color: black;
       
    }
   
`

export const PortFolioButton = styled.div`
   display: flex;
   background-color: #fff;


   div {
        padding: 1rem 1.4rem;
        border-radius: 5px;  
   }
   
    div a{
        text-decoration: none;
        color: black; 
    }
   
`